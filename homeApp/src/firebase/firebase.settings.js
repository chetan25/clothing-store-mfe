import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  //  documentRef can do set/get/update/delete
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //check if there is data for that id in that location
  if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();
     try {
         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
         })
     } catch (err) {
         console.log('error creating user');
     }
  }

  //get the reference to the cartItems
  const cartRef = firestore.collection('users').doc(`${userAuth.uid}`)
      .collection('cartItems');
  const cartSnapShot = await cartRef.get();
  //if no cartItem collection create a new one
  if (cartSnapShot.docs.length  === 0) {
      const newCheckOutItem = cartRef.doc();
      const createdAt = new Date();
      try {
          await newCheckOutItem.set({
              'items': [],
              createdAt,
          });
      } catch (err) {
          console.log('error creating cartItem');
      }
  }
  // const item = cartSnapShot.docs[0];
  // await firestore.collection('users').doc(`${userAuth.uid}`)
  //     .collection('cartItems').doc(`${item.id}`).delete();
  //check if there is data for that id in that location

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const createAccountWithEmail = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export  const addCollectionAndDocumentItems = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach(({title, items}) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, {title, items});
  });
  return await batch.commit();
};

export const convertCollectionSnapShotToMap = (collection) => {
  const transformedCollection = collection.docs.map(doc => {
      const { title, items } = doc.data();
      return {
        title,
        items,
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id
      };
  });

  return transformedCollection.reduce((acc, current) => {
        acc[current.title.toLowerCase()] = current;
        return acc;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
};

export const persistCart = async (uid, cartItems) => {
    const cartRef = firestore.collection('users').doc(`${uid}`)
        .collection('cartItems');
    const cartSnapShot = await cartRef.get();
    const cartItemsDoc = cartSnapShot.docs[0];
    const cartItemRef = await firestore.collection('users').doc(`${uid}`)
        .collection('cartItems').doc(`${cartItemsDoc.id}`);
    try {
        await cartItemRef.update({
            'items': cartItems,
        });
    } catch (err) {
        console.log('error creating cartItem');
    }
};

export default firebase;