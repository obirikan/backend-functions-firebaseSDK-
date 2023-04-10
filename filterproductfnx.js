        async function filterProductsBySearch(products, keyword) {
          const filteredProducts = products.filter((product) => {
            const title = product.title.toLowerCase();
            const tags = product.tags.map((tag) => tag.toLowerCase());
        
            return title.includes(keyword.toLowerCase()) || tags.includes(keyword.toLowerCase());
          });
        
          return filteredProducts;
        }
