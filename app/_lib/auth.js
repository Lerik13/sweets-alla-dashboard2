import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { isUserAllowed } from './data-service'

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return isUserAllowed(auth?.user?.email)
    },
  },
})
