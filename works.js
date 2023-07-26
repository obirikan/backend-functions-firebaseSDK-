//fetch a particular product with a specific field
const fetchProducts = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, "Products");

      const productsQuery = query(
        productsCollection,
        where("vid", "==", current.aid)
      );

      const snapshot = await getDocs(productsQuery);
      const fetchedProducts = [];
      snapshot.forEach((doc) => {
        const product = { id: doc.id, ...doc.data() };
        fetchedProducts.push(product);
      });

      setLoading(false);
      setAllProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };


//adds a timestamp to all collection in the Products collection
async function addTimestampToProducts() {
  try {
    const productsRef = collection(db, 'Products');

    // Create a query for all products without a timestamp
    const q = query(productsRef);

    // Get the product IDs that match the query
    const querySnapshot = await getDocs(q);
    const productIds = querySnapshot.docs.map((doc) => doc.id);
    console.log({ productIds });

    // Update each product with the current timestamp
    const currentTimestamp = serverTimestamp();
    
    for (const productId of productIds) {
      const productRef = doc(productsRef, productId);
      await updateDoc(productRef, { timestamp: currentTimestamp }); // Update or set the 'timestamp' field with the current timestamp
    }

    console.log('Timestamps added to all products.');
  } catch (error) {
    console.error('Error adding timestamps:', error);
  }
}

