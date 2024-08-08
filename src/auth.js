import NextAuth from "next-auth";
import Github from "next-auth/providers/github"
 
// step -1 
export const {
handlers: { GET,POST },
auth,
signIn, signOut
}= NextAuth({
  providers:[Github]
})