import http from '~/utils/http'
import { Category, CategoryCreate, CategoryUpdate } from '~/types/category.type'

const categoryApi = {
  getCategories(params?: { languageCode?: string }) {
    return http.get<any>('/categories', { params })
  },

  getCategory(id: string) {
    return http.get<Category>(`/categories/${id}`)
  },

  createCategory(data: CategoryCreate) {
    return http.post<Category>('/categories', data)
  },

  updateCategory(id: string, data: CategoryUpdate) {
    return http.patch<Category>(`/categories/${id}`, data)
  },

  deleteCategory(id: string) {
    return http.delete(`/categories/${id}`)
  }
}

export default categoryApi
