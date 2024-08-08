import { auth } from "@/auth";
import ReduxProvider from "@/provider";



export default async function CommonLayout ({children}){
  const getSession = await auth()
  
 

return <ReduxProvider  getSession={getSession}   >{children}</ReduxProvider>
}