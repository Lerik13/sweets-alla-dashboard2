'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { updateProduct } from '@/app/_lib/actions'
import SubmitButton from './SubmitButton'

function ProductForm({ product, user, categories }) {
  const router = useRouter()
  const [formData, setFormData] = useState(product)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  /*
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await updateProduct(product.id, formData)
    setMessage(response.message)
    if (response.success) router.push('/products') // Redirect after successful update
  }
*/
  return (
    <div>
      <form action={updateProduct} className="border space-y-4">
        <input type="hidden" id="id" name="id" value={product.id} />
        <div className="space-y-1">
          <label htmlFor="name" className="text-accent-500">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="px-5 py-3 bg-accent-100 w-full shadow-sm rounded-sm"
            placeholder="Product Name"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="categoryId" className="text-accent-500">
            Category:
          </label>
          <select
            name="categoryId"
            id="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="px-5 py-3 bg-accent-100 w-full shadow-sm rounded-sm"
            required
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="description" className="text-accent-500">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            rows="7"
            className="px-5 py-3 bg-accent-100 w-full shadow-sm rounded-sm"
            placeholder="Description about the sweet product"
          ></textarea>
        </div>

        <div className="space-y-1">
          <label htmlFor="ingredients" className="text-accent-500">
            Ingredients:
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            className="px-5 py-3 bg-accent-100 w-full shadow-sm rounded-sm"
            placeholder="Ingredients – what this product is made of"
          ></textarea>
        </div>

        <div className="flex justify-between space-x-6">
          <div className="flex items-center space-x-2">
            <label htmlFor="price" className="text-accent-500">
              Price:
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price ?? 0}
              onChange={handleChange}
              className="px-5 py-3 bg-accent-100 w-full shadow-sm rounded-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="order" className="text-accent-500">
              Order:
            </label>
            <input
              type="number"
              name="order"
              id="order"
              value={formData.order ?? 0}
              onChange={handleChange}
              className="px-5 py-3 bg-accent-100 w-full shadow-sm rounded-sm"
            />
          </div>
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton>Update Product</SubmitButton>
        </div>
      </form>

      {message && <p className="mt-2 text-center text-green-500">{message}</p>}
    </div>
  )
}

export default ProductForm
