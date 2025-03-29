/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '~/utils/http'

export const blogApi = {
  createBlog: (data: any) => http.post('/blogs', data),
  getBlogs: () => http.get('/blogs'),
  deleteBlog: (id: string) => http.delete(`/blogs/${id}`),
  editBlog: (id: string, data: any) => http.put(`/tours/${id}`, data),
  getCategories: () => http.get('/categories/level3')
}
