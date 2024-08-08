"use client"

import Header from "@/components/Header"
import store from "@/store"
import { Provider } from "react-redux"


export default function ReduxProvider({children,getSession}){
  
return <Provider store={store}>
  <Header  getSession={getSession}/>
   {children}
   </Provider>

}