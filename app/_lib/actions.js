'use server'

import { revalidatePath } from 'next/cache' // To refresh the page after update
import { redirect } from 'next/navigation'
import { supabase } from './supabase'
import { auth, signIn, signOut } from './auth'

export async function signInAction() {
  await signIn('google')
  //await signIn('google', { redirectTo: '/products' })
}

export async function signOutAction() {
  await signOut()
  //await signOut({ redirectTo: '/' })
}

export async function updateProduct(formData) {
  const session = await auth()
  //console.log('-----------------------')
  //console.log(session)
  if (!session) throw new Error('You must be logged in')

  const productId = Number(formData.get('id'))

  //console.log('!!! productId =')
  //console.log(productId)

  const updateData = {
    id: Number(formData.get('id')),
    categoryId: Number(formData.get('categoryId')),
    name: formData.get('name').slice(0, 50),
    description: formData.get('description').slice(0, 1000),
    ingredients: formData.get('ingredients').slice(0, 1000),
    price: Number(formData.get('price')),
    order: Number(formData.get('order')),
  }
  console.log('!!! updateData:')
  console.log(updateData)

  const { data, error } = await supabase
    .from('products')
    .update(updateData)
    .eq('id', productId)
    .select()
  //.update({ name: 'cake' })
  //.eq("user_id", userId); // Ensure only the owner can update

  //console.log('----------Data:')
  //console.log(data)

  if (error) {
    console.log(error)
    throw new Error('Product could not be updated')
  }

  //revalidatePath('/dashboard/products/productId')
  revalidatePath('/dashboard/products') // Refresh the page to show updated data

  redirect('/dashboard/products')
}
