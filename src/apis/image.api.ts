import http from '~/utils/http'

export interface Image {
  _id: string
  filename: string
  url: string
  pageSlug: string
  category: string
}

export const imageApi = {
  getImages(params?: { pageSlug?: string; category?: string }) {
    return http.get<{ status: string; data: Image[] }>('/images', { params })
  }
} 