// "use client"

import Link from "next/link"
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
 
 
 const Bag = () => {
  const {cart} = useSelector((state)=>state)
  console.log(cart?.cartItems.length);
  const itemInCart = cart?.cartItems.length
   return (
     <div className=" ">
       <span className=" lg:text-xl   sm:text-sm font-bold text-gray-800">
              <Link href={"/cart"}> <p className="text-sm  pb-4 border  w-4 text-center h-4 border-black  rounded-full   bg-red-200 font-semibold ml-3 -mb-2 text-red-900 ">{itemInCart}</p> <FaBagShopping  className=" text-xl mb-3"/> </Link>
                </span>
     </div>
   )
 }
 
 export default Bag
 