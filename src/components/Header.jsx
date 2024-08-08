import Link from "next/link"
import { Button } from "./ui/button"

import Bag from "./Bag";
import { signInUser, signOutUser } from "@/action";
 
 const Header = ({getSession}) => {

  async function handleSignInAuth(){
    await signInUser()
  }

async function handleSignOutauth(){
  await signOutUser()
}
   return (
     <header className=" h-fit p-8 shadow-md  z-50  relative min-w-full flex md:justify-between lg:justify-between items-center     ">
        <div className="w-[100px]  h-fit ">
          <Link  href={"/"} className="lg:text-3xl sm:text-sm  font-bold">ShoppingMania</Link>
        </div>
        <div className=" flex lg:gap-7  lg:pl-0 md:pl-5 pl-9 md:gap-5 gap-3 justify-center items-center  w-[400px] h-fit">
             <span className=" lg:text-xl sm:text-sm font-bold text-gray-800"><Link href={"/"}>Products</Link></span>
           
               <Bag/>
            <span className=" lg:ml-4 ml-2 ">
              <form action={  getSession?.user ? handleSignOutauth :  handleSignInAuth}>
                <Button  type="submit">{
                  getSession?.user ? "Logout" : "Login"
                  }</Button>
              </form>
            </span>
        </div>
     </header>
   )
 }
 
 export default Header
 