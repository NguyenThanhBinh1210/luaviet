/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '~/utils/http'
import { CreateTourType } from '~/types/tour.type'

export const tourApi = {
  createTour: (data: CreateTourType) => http.post('/tours', data),
  getTours: () => http.get('/tours'),
  getToursBySlug: (slug: string) => http.get(`/tours/category/${slug}`),
  getTour: (slug: string) => http.get(`/tours/${slug}`),
  deleteTour: (id: string) => http.delete(`/tours/${id}`),
  editTour: (id: string, data: any) => http.put(`/tours/${id}`, data)
}
