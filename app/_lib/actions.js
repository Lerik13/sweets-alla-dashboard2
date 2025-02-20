'use server'

import { signIn, signOut } from './auth'

export async function signInAction() {
  await signIn('google')
  //await signIn('google', { redirectTo: '/products' })
}

export async function signOutAction() {
  await signOut()
  //await signOut({ redirectTo: '/' })
}
