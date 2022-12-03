export const fetchProducts = fetch("https://testbackend.nc-one.com/image");

export const fetchProduct = (id:number)=>{
   return fetch(`https://testbackend.nc-one.com/image?id=${id}`)
}