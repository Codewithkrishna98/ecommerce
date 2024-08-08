import { fetchDetails } from "@/action"
import { auth } from "@/auth";
import AddToCartbtn from "@/components/Addtocartbtn";



const productDetails =  async({params}) => {
  const getSession = await auth()
  if(!getSession?.user)  redirect("/unauth")
  const getproductInfo =   await fetchDetails(params.details)
  console.log(getproductInfo);
  return (
    <div className=" flex  lg:gap-2 lg:p-1  flex-col lg:flex-row md:flex-row">

    
    <div className=" flex lg:flex-1  sm:h-[300px] sm:w-[40%] lg:p-3    flex-col   lg:h-screen">
      <div className=" w-full  flex justify-center  border-none bg-gray-200 rounded-lg  h-[60%] ">
        <img
        src={getproductInfo.thumbnail}
        alt={getproductInfo.title}
        className="w-[60%] object-cover "
        />
      </div>
      
      <div className=" w-full h-[20%] rounded-xl bg-slate-300 flex  justify-center gap-3 m-1 p-1 border">
       {
        getproductInfo?.images.map((image)=>
          <div key={image.id} className=" w-[110px] h-full pl-3  bg-white rounded-lg  ">

            <img  className="w-fit  h-[120px]  object-contain  " src={image} alt={image}/>

          </div>
            )
        
       }
      </div>
    </div>
    <div className=" flex lg:flex-1  sm:h-[300px] sm:w-[40%] lg:p-9   rounded-xl flex-col  lg:h-screen">
          <h1 className="text-2xl font-bold mt-6 text-gray-800">{getproductInfo.title}</h1>
          <p className=" mt-2 text-2xl font-bold text-gray-700">
          ₹{getproductInfo.price}
          </p>
          <p className="mt-5 text-xl font-semibold text-gray-700  ">{getproductInfo.description}</p>
          <div className="mt-10 ">
           
             <AddToCartbtn   product={getproductInfo}/>
          </div>
    </div>
    </div>
    
  )
}

export default productDetails
