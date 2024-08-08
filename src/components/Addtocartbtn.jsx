"use client"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "./ui/button"
import { addItemInCart, removeItemfromCart } from "@/store/slices/cart-slice"

 
 
 const AddToCartbtn = ({product}) => {
  const {cart} = useSelector((state)=>state)
  // console.log(cart?.cartItems);
   const dispatch = useDispatch()
  function handleRemove (){
    dispatch(removeItemfromCart(product?.id))
  }
  function handleAdd(){
     dispatch( addItemInCart(product))
  }

   return (
     <div>
        <Button
        type="button"
        onClick={cart?.cartItems.some((items)=>items.id===product.id) ? handleRemove : handleAdd}

        >{
            cart?.cartItems.some((items)=>items.id === product.id) ? "Remove" : "Add to cart"
          }</Button>
     </div>
   )
 }
 
 export default AddToCartbtn
 