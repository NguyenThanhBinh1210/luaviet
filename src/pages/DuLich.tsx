/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AccodionFilter } from '~/components/Accodion'
// import Container from '~/components/Container'
import Section from '~/components/Section'
import { SortBy } from '~/components/Select'
import TourLink from '~/components/TourLink'
import { getQueryParams, getUpdatedQueryParams } from '~/utils/utils'
import { useMutation, useQuery } from 'react-query'
import { tourApi } from '~/apis/tour.api'
import categoryApi from '~/apis/category.api'
import { useTranslation } from 'react-i18next'

const DuLich = () => {
  const location = useLocation()
  const [tour, setTour] = useState<any>([])
  const [categories, setCategories] = useState<any>()
  const currentLanguage = localStorage.getItem('app_language') || 'vi'
  const { t } = useTranslation()

  useQuery({
    queryKey: ['categories', currentLanguage], // Thêm currentLanguage vào queryKey để re-fetch khi ngôn ngữ thay đổi
    queryFn: async () => {
      const response = await categoryApi.getCategories({
        languageCode: currentLanguage
      })
      setCategories(response.data.data)
      return response.data.data
    }
  })
  const organizedCategories = useMemo(() => {
    if (!categories) return []

    const categoryMap: { [key: string]: any } = {}
    const result: any = []

    categories.forEach((cat: any) => {
      categoryMap[cat._id] = { ...cat, subCategories: [] }
    })

    Object.values(categoryMap).forEach((cat: any) => {
      if (cat.parentId) {
        const parent = categoryMap[cat.parentId]
        if (parent) {
          parent.subCategories.push(cat)
        }
      } else {
        result.push(cat)
      }
    })

    return result
  }, [categories])


  const [activeTour, setActive] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (location.state?.type) {
      setActive(location.state.type)
    }
  }, [location.state?.type])
  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showFilter])

  const mutation = useMutation({
    mutationFn: async (url: string) => {
      const response = await tourApi.getToursBySlug(url, {
        languageCode: currentLanguage
      })
      setTour(response.data.data)
    }
  })

  useEffect(() => {
    if (getLastSegment(location.pathname) === 'du-lich-trong-nuoc') {
      mutation.mutate('trong-nuoc')
    } else if (getLastSegment(location.pathname) === 'du-lich-nuoc-ngoai') {
      mutation.mutate('nuoc-ngoai')
    } else {
      mutation.mutate(getLastSegment(location.pathname))
    }
  }, [location.pathname])
  const sortInitial = [
    {
      title: 'Mới nhất',
      value: 'SORT_TYPE1'
    },
    {
      title: 'Giá thấp -> cao',
      value: 'SORT_TYPE2'
    },
    {
      title: 'Giá cao -> thấp',
      value: 'SORT_TYPE3'
    }
  ]

  return (
    <div>
      <div className='px-4 max-w-[1262px] mx-auto'>
        <div className=' items-center gap-1 mt-[52px] hidden md:flex'>
          <Link to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
          <p className='text-[13px]'>{t('travel.title')}</p>
        </div>
      </div>
      <Section>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-10'>
          <div className='hidden md:block'>
            <p className='font-bold text-lg pb-5 border-b text-[#013879]'>{t('travel.filter')}</p>
            <div className='flex flex-col '>
              <AccodionFilter title={t('travel.filterOptions.destination')}>
                <div className='mb-4 grid grid-cols-2 md:grid-cols-1 gap-y-1'>
                  {organizedCategories?.map((cat: any, index: number) => (

                    <div key={index} className='flex items-center'>
                      <input
                        onChange={() => {
                          setActive(`du-lich-${cat.slug}`)
                          navigate(`/du-lich/du-lich-${cat.slug}?${getUpdatedQueryParams({}, location)}`, {
                            state: {
                              title: `Du Lịch ${cat.name}`,
                              type: `du-lich-${cat.slug}`
                            }
                          })
                        }}
                        id={`du-lich-${cat.slug}`}
                        name='tour'
                        type='radio'
                        className='hidden'
                        value={`du-lich-${cat.slug}`}
                      />
                      <label htmlFor={`du-lich-${cat.slug}`} className='pl-7 relative cursor-pointer'>
                        <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5 rounded-full border border-[#013879] cursor-pointer'></div>
                        Du lịch {cat.name}
                        <div
                          className={`${activeTour === `du-lich-${cat.slug}` ? 'block' : 'hidden'
                            } bg-[#013879] size-3 top-1/2 -translate-y-1/2 rounded-full absolute left-1`}
                        ></div>
                      </label>
                    </div>
                  ))}

                </div>
                <div className='pb-4 md:pb-6 border-b mb-4 grid grid-cols-2 gap-x-2 md:flex md:flex-col'>
                  <div className='mb-4 '>
                    <p className='font-bold mb-2 text-[#013879]'>Điểm đi</p>
                    <div className='pr-4 bg-white'>
                      <select
                        name='diem_di'
                        id='diem_di'
                        onChange={(e) =>
                          navigate(
                            `${location.pathname}?${getUpdatedQueryParams({ diem_di: e.target.value }, location)}`,
                            {
                              state: location.state
                            }
                          )
                        }
                        className='text-[#013879] py-[13px] px-4 w-full  text-sm font-medium'
                      >
                        <option className='font-normal' value=''>
                          Chọn điểm đi
                        </option>
                        <option className='font-normal' data-tour='ha-noi' value='142'>
                          Hà Nội
                        </option>
                        <option className='font-normal' data-tour='tp-ho-chi-minh' value='190'>
                          TP Hồ Chí Minh
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <p className='font-bold mb-2 text-[#013879]'>Điểm đến</p>
                    <div className='pr-4 bg-white'>
                      <select
                        name='diem_den'
                        id='diem_den'
                        className='text-[#013879] py-[13px] px-4 w-full  text-sm font-medium'
                        onChange={(e) =>
                          navigate(
                            `${location.pathname}?${getUpdatedQueryParams({ diem_den: e.target.value }, location)}`,
                            {
                              state: location.state
                            }
                          )
                        }
                      >
                        <option value=''>Chọn điểm đến</option>
                        {location?.state?.type === 'du-lich-nuoc-ngoai' && (
                          <>
                            <option data-tour='du-lich-nuoc-ngoai' value='208'>
                              Bỉ
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='171'>
                              Pháp
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='178'>
                              Đức
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='170'>
                              Ý
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='197'>
                              Hà Lan
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='277'>
                              Thổ Nhĩ Kỳ
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='274'>
                              Nga
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='278'>
                              Na Uy
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='281'>
                              Séc
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='282'>
                              Áo
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='283'>
                              Slovakia
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='284'>
                              Hungary
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='280'>
                              Phần Lan
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='279'>
                              Thụy Điển
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='174'>
                              Đan Mạch
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='173'>
                              Thuỵ Sĩ
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='172'>
                              Luxembourg
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='193'>
                              Nhật Bản
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='163'>
                              Trung Quốc
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='194'>
                              Hàn Quốc
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='195'>
                              Đài Loan
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='212'>
                              Dubai
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='276'>
                              Thổ Nhĩ Kỳ
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='164'>
                              Hồng Kông
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='165'>
                              Thái Lan
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='211'>
                              Maldives
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='177'>
                              Singapore
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='206'>
                              Indonesia
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='175'>
                              Campuchia
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='275'>
                              Lào
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='200'>
                              Bali
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='176'>
                              Malaysia
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='196'>
                              Úc
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='166'>
                              Hoa Kỳ
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='167'>
                              Canada
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='159'>
                              Ai Cập
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='160'>
                              Nam Phi
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='161'>
                              Mauritius
                            </option>
                            <option data-tour='du-lich-nuoc-ngoai' value='162'>
                              Kenya
                            </option>
                          </>
                        )}
                        {location?.state?.type === 'du-lich-trong-nuoc' && (
                          <>
                            <option data-tour='du-lich-trong-nuoc' value='150'>
                              Huế
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='149'>
                              Đà Nẵng
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='183'>
                              Hội An
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='151'>
                              Quảng Bình
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='185'>
                              Tây Nguyên
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='294'>
                              Nha Trang
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='186'>
                              Quảng Trị
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='191'>
                              Pleiku
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='184'>
                              Nghệ An
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='142'>
                              Hà Nội
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='141'>
                              Hạ Long
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='143'>
                              Ninh Bình
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='147'>
                              Tây Bắc
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='144'>
                              Sapa
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='146'>
                              Đông Bắc
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='180'>
                              Sơn La
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='181'>
                              Điện Biên
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='182'>
                              Lai Châu
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='145'>
                              Lào Cai
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='179'>
                              Hòa Bình
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='190'>
                              TP Hồ Chí Minh
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='153'>
                              Côn Đảo
                            </option>
                            <option data-tour='du-lich-trong-nuoc' value='154'>
                              Phú Quốc
                            </option>
                          </>
                        )}
                        {location?.state?.type === 'tour-cao-cap' && (
                          <>
                            <option value=''>Chọn điểm đến</option>
                            <option data-tour='tour-cao-cap' value='273'>
                              Bờ Tây
                            </option>
                            <option data-tour='tour-cao-cap' value='285'>
                              Singapore - Malaysia
                            </option>
                            <option data-tour='tour-cao-cap' value='286'>
                              Đài Loan - Nhật Bản
                            </option>
                            <option data-tour='tour-cao-cap' value='265'>
                              Hong Kong - Nhật Bản
                            </option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
                <AccodionFilter title={t('travel.filterOptions.duration')}>
                  <Link
                    state={location.state}
                    to={`${location.pathname}?${getUpdatedQueryParams({ so_ngay: '1-3' }, location)}`}
                    className={`${getQueryParams(location).so_ngay == '1-3' ? 'bg-[#C0E7FD]' : 'bg-white'
                      } text-sm border-b border-r  cursor-pointer py-3 text-center border-[#C0E7FD]`}
                  >
                    1-3 ngày{' '}
                  </Link>
                  <Link
                    state={location.state}
                    to={`${location.pathname}?${getUpdatedQueryParams({ so_ngay: '4-7' }, location)}`}
                    className={`${getQueryParams(location).so_ngay == '4-7' ? 'bg-[#C0E7FD]' : 'bg-white'
                      } text-sm border-b border-r  cursor-pointer py-3 text-center border-[#C0E7FD]`}
                  >
                    4-7 ngày{' '}
                  </Link>
                  <Link
                    state={location.state}
                    to={`${location.pathname}?${getUpdatedQueryParams({ so_ngay: '8-14' }, location)}`}
                    className={`${getQueryParams(location).so_ngay == '8-14' ? 'bg-[#C0E7FD]' : 'bg-white'
                      } text-sm border-b border-r  cursor-pointer py-3 text-center border-[#C0E7FD]`}
                  >
                    8-14 ngày{' '}
                  </Link>
                  <Link
                    state={location.state}
                    to={`${location.pathname}?${getUpdatedQueryParams({ so_ngay: '>14' }, location)}`}
                    className={`${getQueryParams(location).so_ngay == '>14' ? 'bg-[#C0E7FD]' : 'bg-white'
                      } text-sm border-b border-r  cursor-pointer py-3 text-center border-[#C0E7FD]`}
                  >
                    Trên 14 ngày{' '}
                  </Link>
                </AccodionFilter>
                <AccodionFilter title={t('travel.filterOptions.people')}>
                  <Link
                    state={location.state}
                    to={`${location.pathname}?${getUpdatedQueryParams({ so_nguoi: '1' }, location)}`}
                    className={`${getQueryParams(location).so_nguoi == '1' ? 'bg-[#C0E7FD]' : 'bg-white'
                      } text-sm border-b border-r  cursor-pointer py-3 text-center border-[#C0E7FD]`}
                  >
                    1 người
                  </Link>
                  <Link
                    state={location.state}
                    to={`${location.pathname}?${getUpdatedQueryParams({ so_nguoi: '2' }, location)}`}
                    className={`${getQueryParams(location).so_nguoi == '2' ? 'bg-[#C0E7FD]' : 'bg-white'
                      } text-sm border-b border-r  cursor-pointer py-3 text-center border-[#C0E7FD]`}
                  >
                    2 người
                  </Link>
                  <Link
                    state={location.state}
                    to={`${location.pathname}?${getUpdatedQueryParams({ so_nguoi: `3${','}5` }, location)}`}
                    className={`${getQueryParams(location).so_nguoi == '3,5' ? 'bg-[#C0E7FD]' : 'bg-white'
                      } text-sm border-b border-r  cursor-pointer py-3 text-center border-[#C0E7FD]`}
                  >
                    3-5 người
                  </Link>
                  <Link
                    state={location.state}
                    to={`${location.pathname}?${getUpdatedQueryParams({ so_nguoi: '6' }, location)}`}
                    className={`${getQueryParams(location).so_nguoi == '6' ? 'bg-[#C0E7FD]' : 'bg-white'
                      } text-sm border-b border-r  cursor-pointer py-3 text-center border-[#C0E7FD]`}
                  >
                    5+ người
                  </Link>
                </AccodionFilter>
                <div className='mb-4'>
                  <p className='font-bold mb-2 text-[#013879]'>Dòng tour</p>
                  <div className='pr-4 bg-white'>
                    <select
                      name='diem_di'
                      id='diem_di'
                      onChange={(e) =>
                        navigate(
                          `${location.pathname}?${getUpdatedQueryParams({ dong_tour: e.target.value }, location)}`,
                          {
                            state: location.state
                          }
                        )
                      }
                      className='text-[#013879] py-[13px] px-4 w-full  text-sm font-medium'
                    >
                      <option className='font-normal' value=''>
                        Chọn dòng tour
                      </option>

                      <option value='tietkiem'>Tiết kiệm</option>
                      <option value='tieuchuan'>Tiêu chuẩn</option>
                      <option value='caocap'>Cao cấp</option>
                    </select>
                  </div>
                </div>
                <div className='mb-4'>
                  <p className='font-bold mb-2 text-[#013879]'>Hiển thị những chuyến đi</p>
                  <div className='flex items-center gap-x-10 md:flex-col gap-y-2 md:items-start'>
                    <div className='flex items-center'>
                      <input
                        onChange={(e) => {
                          navigate(
                            `${location.pathname}?${getUpdatedQueryParams(
                              {
                                khuyen_mai:
                                  getQueryParams(location).khuyen_mai === 'true'
                                    ? ''
                                    : e.target.value === 'on'
                                      ? 'true'
                                      : ''
                              },
                              location
                            )}`,
                            {
                              state: location.state
                            }
                          )
                        }}
                        id='khuyen_mai'
                        name='khuyen_mai'
                        type='checkbox'
                        className='hidden'
                      />
                      <label htmlFor='khuyen_mai' className='pl-7 relative cursor-pointer'>
                        <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5  border border-[#013879] cursor-pointer'></div>
                        Khuyến mãi
                        <div
                          className={`${getQueryParams(location).khuyen_mai === 'true' ? 'block' : 'hidden'
                            } bg-[#013879] size-3 top-1/2 -translate-y-1/2  absolute left-1`}
                        ></div>
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        onChange={(e) => {
                          navigate(
                            `${location.pathname}?${getUpdatedQueryParams(
                              {
                                con_cho:
                                  getQueryParams(location).con_cho === 'true' ? '' : e.target.value === 'on' ? 'true' : ''
                              },
                              location
                            )}`,
                            {
                              state: location.state
                            }
                          )
                        }}
                        id='con_cho'
                        name='con_cho'
                        type='checkbox'
                        className='hidden'
                      />
                      <label htmlFor='con_cho' className='pl-7 relative cursor-pointer'>
                        <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5  border border-[#013879] cursor-pointer'></div>
                        Còn chỗ
                        <div
                          className={`${getQueryParams(location).con_cho === 'true' ? 'block' : 'hidden'
                            } bg-[#013879] size-3 top-1/2 -translate-y-1/2  absolute left-1`}
                        ></div>
                      </label>
                    </div>
                  </div>
                </div>
              </AccodionFilter>
            </div>
          </div>
          <div className='md:col-span-3'>
            <div className='flex justify-between items-center'>
              <p className='font-bold text-[28px] md:text-[40px] text-[#013879]'>
                {location?.state?.local ? location?.state?.local : t('travel.allTours')}
              </p>
              <div className='flex items-center gap-x-3'>
                <div className='md:hidden' onClick={() => setShowFilter(true)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
                    />
                  </svg>
                </div>
                <SortBy
                  options={sortInitial}
                  onChange={(value: string) => {
                    console.log(value)
                  }}
                />
              </div>
            </div>
            {location?.state?.local === t('destinations.europe') && (
              <div className='mt-2'>
                <strong className='italic text-[#000080]'>{t('travel.descriptions.europe.title')}</strong>{' '}
                {t('travel.descriptions.europe.content')}
              </div>
            )}
            {location?.state?.local === t('destinations.asia') && (
              <div className='mt-2'>
                <strong className='italic text-[#000080]'>{t('travel.descriptions.asia.title')}</strong>{' '}
                {t('travel.descriptions.asia.content')}
              </div>
            )}
            {location?.state?.local === t('destinations.australia') && (
              <div className='mt-2'>
                <strong className='italic text-[#000080]'>{t('travel.descriptions.australia.title')}</strong>{' '}
                {t('travel.descriptions.australia.content')}
              </div>
            )}
            <div className='mt-[30px] grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16'>
              {tour.map((item: any, index: number) => (
                <TourLink
                  item={item}
                  key={index}
                  index={index}
                  link={`/du-lich/${item.categoryIdLevel1.slug}/${item.categoryIdLevel2.slug}/${item.categoryIdLevel3.slug}/${item.slug}`}
                />
              ))}
              {tour.length === 0 && (
                <div className='text-center col-span-2 lg:col-span-3 text-lg' >
                  {t('travel.noResults')}
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export const getLastSegment = (path: string | null): string => {
  if (!path) return '';

  const segments = path.split('/');
  return segments[segments.length - 1] || '';
}

export default DuLich
