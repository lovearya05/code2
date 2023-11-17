import toast from "react-simple-toasts";
import { collection, addDoc, getDocs, query, where,doc, setDoc, updateDoc } from "firebase/firestore"; 

// updateOrCreateData(db, collectionName, 'uid',user?.uid, {...profileData, uid : user?.uid}, ()=>{}, ()=>{})
export const updateOrCreateData = async (db, collectionName='', toMatchField='', matchId='', newData={},prevFunction=()=>{}, nextFunction=()=>{}) => {
  prevFunction()
  const rewardBookCollection = collection(db, collectionName);
  const querySnapshot = await getDocs(query(rewardBookCollection, where(toMatchField, '==', matchId)));
  
  try {
    if (querySnapshot.size > 0) { 
      const firstDoc = querySnapshot.docs[0];
      const docRef = doc(db, collectionName, firstDoc.id);

      await updateDoc(docRef, newData);
      console.log(`Document with companyUserId ${matchId} updated successfully.`);

    } else {
        await setDoc(doc(rewardBookCollection), { ...newData, matchId });
        console.log(`New document with companyUserId ${matchId} added successfully.`);
    }
    nextFunction()
    toast('Updated sucessfully')
  } catch (e) {
    console.error('Error updating document: ', e);
    toast('Try again later')
  }
};

export const getData = async (db, collectionName='', toMatchField='', matchId='', prevFunction=()=>{}, nextFunction=()=>{})=>{
  prevFunction()
  try{
    const rewardBookCollection = collection(db, collectionName);
    const querySnapshot = await getDocs(query(rewardBookCollection, where(toMatchField, '==', matchId)));
    if (querySnapshot.size > 0){
      const firstDoc = querySnapshot.docs[0];
      const data = firstDoc?.data()
      nextFunction()
      return data
    }
    nextFunction()
    return {}
  }catch(e){
    // nextFunction()
    console.log(e)
  }
}
export const getAllData = async (db, collectionName='', toMatchField='', matchId='', prevFunction=()=>{}, nextFunction=()=>{})=>{
  prevFunction()
  try{
    const rewardBookCollection = collection(db, collectionName);
    const querySnapshot = await getDocs(query(rewardBookCollection, where(toMatchField, '==', matchId)));
    const matchingData = [];

    querySnapshot.forEach((doc) => {
      matchingData.push(doc.data());
    });

    nextFunction();
    return matchingData;
  } catch(e) {
    // nextFunction()
    console.log(e);
    return [];
  }
}