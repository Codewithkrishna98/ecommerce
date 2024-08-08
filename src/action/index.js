"use server"

import { signIn, signOut } from "@/auth";

export async function fetchPorductDetails (){
try {
  const result = await fetch('https://dummyjson.com/products',{
    method: 'GET',
    cache: "no-store"
  })
  const data = await result.json()
  return {
    success : true ,
    data : data.products
  }
} catch (error) {
   console.log(error);
   return {
    success : false ,
    message : "something error occured"
   }
}
}

export async function fetchDetails(productId){
  try {
    const result = await fetch(`https://dummyjson.com/products/${productId}`,{
      method: 'GET',
      cache: "no-store"
    })
     const data = await result.json()
    return data;
  } catch (error) {
    console.log(error);
    return {
      success : false,
      message : "failed to fethed product detailed"
    }
  }
}

export  async function signInUser(){
  await signIn("github")
}
export  async function signOutUser(){
 await signOut()
}