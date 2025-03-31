/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '~/utils/http'
import { CreateTourType } from '~/types/tour.type'

export const tourApi = {
  createTour: (data: CreateTourType) => http.post('/tours', data),
  getTours: (params?: { languageCode?: string }) => {
    return http.get('/tours', { 
      params: params
    })
  },
  getToursBySlug: (slug: string, params?: { languageCode?: string }) => {
    return http.get(`/tours/category/${slug}`, { params })
  },
  getTour: (slug: string, params?: { languageCode?: string }) => {
    return http.get(`/tours/${slug}`, { params })
  },
  deleteTour: (id: string) => http.delete(`/tours/${id}`),
  editTour: (id: string, data: any) => http.put(`/tours/${id}`, data)
}
