import { supabase } from './supabase'

export const getProducts = async function () {
  const { data, error } = await supabase
    .from('products')
    .select('id, name, categoryId, image, description, order')
    .order('categoryId, order')

  //await new Promise((res) => setTimeout(res, 2000))

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
