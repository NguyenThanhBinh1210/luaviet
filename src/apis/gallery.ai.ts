/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '~/utils/http'

export const galleryApi = {
  createGallery: (data: any) => http.post('/galleries', data),
  getGallerys: (languageCode?: string) => http.get('/galleries', { params: languageCode ? { languageCode } : {} }),
  deleteGallery: (id: string) => http.delete(`/galleries/${id}`),
  editGallery: (id: string, data: any) => http.patch(`/gallery/${id}`, data)
}
