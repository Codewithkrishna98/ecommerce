import { auth } from "@/auth"
import { redirect } from "next/navigation"
 
 
 const page =  async () => {

  const getSession = await auth()
  if(getSession?.user)  redirect("/")
   return (
     <div className=" w-full flex justify-center h-full items-center">
          <div className=" flex justify-center items-center w-full h-full">
            <h1 className=" text-3xl font-bold text-gray-700">You are not logged in! login with github</h1>
          </div>
     </div>
   )
 }
 
 export default page
 