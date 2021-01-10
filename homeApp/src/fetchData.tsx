import {convertCollectionSnapShotToMap, firestore} from "./firebase/firebase.settings";

export const fetchCollectionAsync = async () => {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = await collectionRef.get();
        const collectionMap = await convertCollectionSnapShotToMap(snapshot);
        console.log(collectionMap, 'collectionMap');
    } catch(err) {
       console.log('error');
    }
}