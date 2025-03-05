import { supabase } from './supabase'
import { notFound } from 'next/navigation'

export async function isUserAllowed(email) {
  //console.log('----------!!! isUserAllowed:')
  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single()

  return !!data
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(name)')
    .eq('id', id)
    .single()

  // For testing
  //await new Promise((res) => setTimeout(res, 2000))

  if (error) {
    console.error(error)
    notFound()
  }

  return data
}

export const getProducts = async function () {
  const { data, error } = await supabase
    .from('products')
    .select('id, name, categoryId, image, description, order')
    .order('categoryId, order')

  if (error) {
    console.error(error)
    throw new Error('Products could not be loaded')
  }

  return data
}

export const getCategories = async function () {
  const { data, error } = await supabase
    .from('categories')
    .select('id, name')
    .order('order')

  if (error) {
    console.error(error)
    throw new Error('Categories could not be loaded')
  }

  return data
}
