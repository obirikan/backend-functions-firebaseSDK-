edit

const updateProduct = async (vid, updateData) => {
  const productsRef = collection(db, 'Products');
  const q = query(productsRef, where('title', '==', vid));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docRef = doc(db, 'Products', querySnapshot.docs[0].id);
    await updateDoc(docRef, updateData);
  }
};
