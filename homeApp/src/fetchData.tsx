import {convertCollectionSnapShotToMap, firestore} from "./firebase/firebase.settings";
import { ProductTypeData } from './types';

export const fetchCollectionAsync = async (): Promise<ProductTypeData | undefined> => {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = await collectionRef.get();
        const collectionMap = await convertCollectionSnapShotToMap(snapshot);
        return collectionMap;
        console.log(collectionMap, 'collectionMap');
    } catch(err) {
       console.log('error');
    }
}