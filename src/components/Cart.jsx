"use client"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "./ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { removeItemfromCart } from "@/store/slices/cart-slice"


const Cart = () => {
  const [totalPrice , setTotalPrice] = useState(0)

  const {cart} = useSelector((state)=>state)
  console.log(cart?.cartItems)
useEffect(()=>{
    setTotalPrice(cart?.cartItems.reduce((acc,curr)=>acc + curr?.price,0))
},[cart?.cartItems])


  if(!cart?.cartItems.length) return <h1 className=" text-2xl font-bold text-gray-800">No Items Store</h1>
 const dispatch = useDispatch()

function handleRemovefromCart(currentItemId){
   dispatch(removeItemfromCart(currentItemId))
}



  return (
    <div className=" w-full p-3 ">
<Table>
  <TableCaption>Your Cart</TableCaption>
  <TableCaption> <div className="text-2xl flex justify-center w-full gap-2 font-bold"> <p className=" text-2xl font-bold text-gray-800">TotalAmount</p> ₹{Math.round(totalPrice)} </div></TableCaption>
  
 
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Product</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Rating</TableHead>
      <TableHead>Catogry</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>

   {
    cart?.cartItems.map((item)=>
      
      <TableRow>
      <TableCell className="font-medium">
        <div className=" w-[200px]">
         <img
         src={item.thumbnail}
          alt={item.title}
          className="w-full object-cover "
         />
        </div>
        <p className=" text-lg font-bold text-gray-800">{item.title}</p>
      </TableCell>
      <TableCell>₹{item.price}</TableCell>
      <TableCell>
        <div className="flex"><p>⭐</p>{item.rating}</div>
        </TableCell>
        <TableCell>{item.category}</TableCell>
      <TableCell className="text-right">
        <Button  onClick={()=>handleRemovefromCart(item.id)}>Remove</Button>
      </TableCell>
    </TableRow>
    
    )
   }

    
  </TableBody>
</Table>

    </div>
  )
}

export default Cart
