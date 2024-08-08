import { fetchPorductDetails } from "@/action";
import { auth } from "@/auth";
import Product from "@/components/Product";
import { redirect } from "next/navigation";


export default async  function Home() {

  const getSession = await auth()
  
  if(!getSession?.user) redirect("/unauth")

const getALlproducts = await fetchPorductDetails()
console.log(getALlproducts);
  return (
   <div>
    
    <div className="p-5 grid grid-cols-2  gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-7 m-7">
      {
        getALlproducts && getALlproducts?.data &&  getALlproducts?.data?.length >0 ? 
          getALlproducts?.data.map((productItem)=> 
            <div  key={productItem.id}>
            <Product item={productItem}/>
            </div>
          )
        : null
      }
    </div>
   </div>
      );
}
