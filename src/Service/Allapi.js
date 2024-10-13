import axiosInstance from "../config/axiosInstance";


  export const getAllProductApi= async()=>{
  try{
    const response= await axiosInstance.get('/products')
    // console.log(result);
    return response
    
}catch(error){
    console.log(`facing error at getAll data from product api`,error);
    throw error
}
    
}

// post product data from ui

export const PostProductData = async (ProductData)=>{
    try{
              const response= await axiosInstance.post('/products',ProductData)
              return response
    }catch(error){
        console.log(`facing error for post product data from ui`,error);
    }
}

// get Singal Data from api
export const GetSingleProduct= async (id)=>{
    try{
      const response= await axiosInstance.get(`/products/${id}`)
      return response
    }catch(error){
  console.error(`facing problem in getting data from product list api`,error)
    }
}
      // DElete product details
export const DeleteProductDetails=  async (id)=>{
    try{
  const response= await axiosInstance.delete(`/products/${id}`)
          return response
    }catch(error){
console.error(`facing problem in delete data `,error)
    }
}
 // get all userData 
export const  GettAllUserList= async ()=>{
    try{
         const response =await axiosInstance.get('/user/get-all')
         return response
    }catch(error){
console.log('facing error in get all user data from api',error);
    }
}


// get product List 

export const  GetProductList= async()=>{
    try{
   const responce = await axiosInstance.get('/order/getAllorder')
      console.log(`getting data from api >>`,responce);
   return responce 
   
    }catch(error){
     console.log(`facing error in getallProductData`,error);
     throw Error
    }
}
