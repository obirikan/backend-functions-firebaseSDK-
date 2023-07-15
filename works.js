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
