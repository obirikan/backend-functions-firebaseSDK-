  const cartslength=()=>{
    const n=carts.length
    const uniqueCart = Array.from(new Set(carts.map(item => item.title)))
    .map(title => carts.find(item => item.title === title));
     const n1=uniqueCart.length
    return n1
  }