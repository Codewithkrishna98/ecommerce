import { auth } from "@/auth"
import Cart from "@/components/Cart"
import { redirect } from "next/navigation"

  
  
  const page =  async() => {

    const getSession = await auth()
     if(!getSession?.user)  redirect("/unauth")
    return (
      <div className=" p-5">
          <Cart/>
      </div>
    )
  }
  
  export default page
  