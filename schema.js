export const Products= (title,desc,price,quantity,markets,categories,tag,img,vid,zip_code,token,city)=>{
    return{
        title:title,
        desc:desc,
        img:img,
        categories,
        inStock:true,
        quantity:quantity,
        price:price,
        tag:tag,
        markets:markets,
        vid:vid,
        availability:true,
        zip_code:zip_code,
        token:token,
        city:city,
    }
}