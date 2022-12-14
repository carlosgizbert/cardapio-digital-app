import axios from 'axios'
import { Category } from '../types/Category'
import { Order } from '../types/Order'
import { Product } from '../types/Product'

export const api = axios.create({
  baseURL: 'http://54.94.46.47:3000',
})

export async function getCategories() {
  const response = await api.get<Category[]>('/categories')
  const { data } = response

  return data
}

export async function getProductsByCategory(categoryId?: string) {
  const route = !categoryId ? '/products' : `/categories/${categoryId}/products`
  const response = await api.get<Product[]>(route)
  const { data } = response

  return data
}

export async function createOrder(order: Order) {
  const response = await api.post<Order>('/orders', order)
  const { data } = response

  return data
}

export async function createProduct(product: Product) {
  return null
}

export async function createCategory(category: Category) {
  return null
}
