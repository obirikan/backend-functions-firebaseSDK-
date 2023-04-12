 // async function calculateSalesTax(products, originAddress, originZipCode, apiKey) {
  //   const taxjarApiKey = '';
  //   const apikey=''
  //   const taxjarApiUrl = 'https://api.taxjar.com/v2/taxes';

  //   const orderData = {
  //     from_country: 'US',
  //     from_zip: '10001',
  //     from_state: 'NY',
  //     from_city: 'New York',
  //     from_street: '123 Main St',
  //     to_country: 'US',
  //     to_zip: '90002',
  //     to_state: 'CA',
  //     to_city: 'Los Angeles',
  //     to_street: '456 Elm St',
  //     amount: 100,
  //     shipping: 10,
  //     line_items: [
  //       {
  //         id: '1',
  //         quantity: 1,
  //         unit_price: 50,
  //         product_tax_code: '20010'
  //       },
  //       {
  //         id: '2',
  //         quantity: 2,
  //         unit_price: 25,
  //         product_tax_code: '20010'
  //       }
  //     ]
  //   };

  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${taxjarApiKey}`
  //   };

  //   axios.post(taxjarApiUrl, orderData, { headers })
  //     .then(response => {
  //       console.log(response.data.tax.amount_to_collect);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // async function calculateSalesTax() {
  //   const apiKey = '';
  //   const url = 'https://api.taxjar.com/v2/taxes';
    
  //   const data = {
  //     from_country: 'US',
  //     from_zip: '92093',
  //     from_state: 'CA',
  //     from_city: 'La Jolla',
  //     to_country: 'US',
  //     to_zip: '90002',
  //     to_state: 'CA',
  //     to_city: 'Los Angeles',
  //     amount: 15,
  //     shipping: 1.5,
  //     nexus_addresses: [
  //       {
  //         id: 'Main Location',
  //         country: 'US',
  //         zip: '92093',
  //         state: 'CA',
  //         city: 'La Jolla',
  //         street: '9500 Gilman Drive'
  //       }
  //     ],
  //     line_items: [
  //       {
  //         id: '1',
  //         quantity: 1,
  //         // product_tax_code: '20010',
  //         price: 15,
  //         discount: 0
  //       }
  //     ]
  //   };
    
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${apiKey}`,
  //     },
  //     body: JSON.stringify(data),
  //   };
    
  //   fetch(url, options)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.tax.amount_to_collect,{activeAddress}); // Amount to collect
  //     })
  //     .catch(error => console.log(error));
  // }