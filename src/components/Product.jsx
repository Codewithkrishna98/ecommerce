 "use client"
import {
  Card,
  CardContent,

  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"


 const Product = ({item}) => {
  
const router = useRouter()

   return (
     <Card key={item.id} className= "transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300  md:w-[200px] lg:w-[300px]  w-[150px] ">
     <CardContent >
     <div className=" p-2">

      <img
      src={item?.thumbnail}
      alt={item?.title}
      className=" w-full h-full object-cover  lg:object-top"
      />
     </div>

     <div className="lg:mt-4    sm:mt-1  flex ">
       <CardTitle className="text-sm md:text-sm lg:text-sm text-gray-900 font-bold">
        {item?.title}
       </CardTitle>
     </div>
     <div className=" mt-2 flex lg:justify-between lg:flex-row  flex-col">
       <p className="text-xl font-bold text-gray-800"> ₹{item?.price}</p>
       <Button onClick={()=>router.push(`/${item.id}`)}>Details</Button>
     </div>
     </CardContent>
     </Card>
   )
 }
 
 export default Product
 