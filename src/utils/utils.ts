/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom'

export const getQueryParams = (location: ReturnType<typeof useLocation>) => {
  const queryString = location.search // Lấy phần query string từ location
  const params: { [key: string]: string | null } = {}

  queryString.split('&').forEach((param) => {
    const [key, value] = param.replace('?', '').split('=')
    params[decodeURIComponent(key)] = value ? decodeURIComponent(value) : null
  })

  return params
}

export const getUpdatedQueryParams = (
  newParams: { [key: string]: string },
  location: ReturnType<typeof useLocation>
) => {
  const currentParams = getQueryParams(location) // Lấy các tham số hiện tại
  const updatedParams: any = { ...currentParams, ...newParams } // Cập nhật các tham số mới

  // Lọc các tham số có giá trị null
  const filteredParams: any = Object.fromEntries(Object.entries(updatedParams).filter(([_, value]) => value !== null))

  return new URLSearchParams(filteredParams).toString() // Chuyển đổi lại thành query string
}
