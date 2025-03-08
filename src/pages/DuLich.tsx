import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AccodionFilter } from '~/components/Accodion'
import Container from '~/components/Container'
import Section from '~/components/Section'
import { SortBy } from '~/components/Select'
import TourLink from '~/components/TourLink'
import { getQueryParams, getUpdatedQueryParams } from '~/utils/utils'
import news1 from '~/assets/6170305031849493246 (1).jpg'
import news2 from '~/assets/the-sands-collection-masthead-desktop.avif'
const DuLich = () => {
  const location = useLocation()
  const [activeTour, setActive] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setActive(location.state.type)
  }, [location.state.type])
  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showFilter])
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
      <Container>
        <div className=' items-center gap-1 mt-[52px]  hidden md:flex'>
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
          <Link
            state={{
              ...location.state,
              local: ''
            }}
            to={`${location.state.local ? `/du-lich/${location?.state.type}` : '#'}`}
            className='text-[13px]'
          >
            {location?.state?.title}
          </Link>
          {location.state.local && (
            <>
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
              <div className='text-[13px]'>{location?.state?.local}</div>
            </>
          )}
        </div>
      </Container>
      <Section className='flex '>
        <div
          className={`${!showFilter ? 'translate-x-full opacity-0 md:opacity-100 md:translate-x-0' : 'translate-x-0 opacity-100'
            } transition-all duration-500 fixed z-[51] inset-0 w-full md:static md:z-10 md:w-[240px] lg:w-[288px] bg-[#F6F8FA] p-4 mr-5`}
        >
          <div className='absolute md:hidden top-0 left-0 bg-white text-[#013879] font-semibold z-10 w-full py-3 text-center text-lg'>
            Lọc
            <button
              onClick={() => setShowFilter(!showFilter)}
              className='absolute top-1/2 -translate-y-1/2 right-2 p-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='pt-12 md:pt-0'>
            <div className='mb-4 grid grid-cols-2 md:grid-cols-1 gap-y-1'>
              <div className='flex items-center'>
                <input
                  onChange={(e) => {
                    setActive(e.target.value)
                    navigate(`/du-lich/${e.target.value}`, {
                      state: {
                        title: 'Du Lịch Nước Ngoài',
                        type: e.target.value
                      }
                    })
                  }}
                  id='tour0'
                  name='tour'
                  type='radio'
                  className='hidden'
                  value='du-lich-nuoc-ngoai'
                />
                <label htmlFor='tour0' className='pl-7 relative cursor-pointer'>
                  <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5 rounded-full border border-[#013879] cursor-pointer'></div>
                  Tour Nước Ngoài
                  <div
                    className={`${activeTour === 'du-lich-nuoc-ngoai' ? 'block' : 'hidden'
                      } bg-[#013879] size-3 top-1/2 -translate-y-1/2 rounded-full absolute left-1`}
                  ></div>
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  onChange={(e) => {
                    setActive(e.target.value)
                    navigate(`/du-lich/${e.target.value}`, {
                      state: {
                        title: 'Du Lịch Trong Nước',
                        type: e.target.value
                      }
                    })
                  }}
                  id='tour1'
                  name='tour'
                  type='radio'
                  className='hidden'
                  value='du-lich-trong-nuoc'
                />
                <label htmlFor='tour1' className='pl-7 relative cursor-pointer'>
                  <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5 rounded-full border border-[#013879] cursor-pointer'></div>
                  Tour Trong Nước
                  <div
                    className={`${activeTour === 'du-lich-trong-nuoc' ? 'block' : 'hidden'
                      } bg-[#013879] size-3 top-1/2 -translate-y-1/2 rounded-full absolute left-1`}
                  ></div>
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  onChange={(e) => {
                    setActive(e.target.value)
                    navigate(`/du-lich/${e.target.value}`, {
                      state: {
                        title: 'Tour Cao Cấp',
                        type: e.target.value
                      }
                    })
                  }}
                  id='tour2'
                  name='tour'
                  type='radio'
                  className='hidden'
                  value='tour-cao-cap'
                />
                <label htmlFor='tour2' className='pl-7 relative cursor-pointer'>
                  <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5 rounded-full border border-[#013879] cursor-pointer'></div>
                  Tour Cao Cấp
                  <div
                    className={`${activeTour === 'tour-cao-cap' ? 'block' : 'hidden'
                      } bg-[#013879] size-3 top-1/2 -translate-y-1/2 rounded-full absolute left-1`}
                  ></div>
                </label>
              </div>
            </div>
            <div className='pb-4 md:pb-6 border-b mb-4 grid grid-cols-2 gap-x-2 md:flex md:flex-col'>
              <div className='mb-4 '>
                <p className='font-bold mb-2 text-[#013879]'>Điểm đi</p>
                <div className='pr-4 bg-white'>
                  <select
                    name='diem_di'
                    id='diem_di'
                    onChange={(e) =>
                      navigate(`${location.pathname}?${getUpdatedQueryParams({ diem_di: e.target.value }, location)}`, {
                        state: location.state
                      })
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
            <AccodionFilter title='Số ngày'>
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
            <AccodionFilter title='Số người'>
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
                    navigate(`${location.pathname}?${getUpdatedQueryParams({ dong_tour: e.target.value }, location)}`, {
                      state: location.state
                    })
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
          </div>
        </div>
        <div className='flex-1 ml-5'>
          <div className='flex flex-col md:flex-row items-center justify-between '>
            <p className=' font-bold text-[26px] xl:text-[40px] text-[#013879] md:pr-10 mb-10 md:mb-0'>
              {location?.state?.local ? `Du Lịch ${location?.state?.local}` : location?.state?.title}
            </p>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-x-5 w-full md:w-max'>
              <button
                onClick={() => setShowFilter(!showFilter)}
                className='flex md:hidden items-center gap-x-3 text-[#013879] font-medium w-full justify-center md:justify-start border md:border-0 text-sm md:text-base py-2 md:py-0'
              >
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
                    d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
                  />
                </svg>
                Chọn lọc
              </button>
              <SortBy sortInitial={sortInitial} />
            </div>
          </div>
          {location?.state?.local === 'Châu Âu' && (
            <div className='mt-2'>
              Hành trình đầy mê hoặc qua những thành phố lãng mạn, di sản văn hóa lâu đời và thiên nhiên hùng vĩ ở châu
              Âu. <strong className='italic text-[#000080]'>Tour du lịch Châu Âu</strong> sẽ đưa du khách đến những điểm
              đến biểu tượng nhất như{' '}
              <strong className='text-[#ff6600]'>Paris hoa lệ, Venice lãng mạn và dãy núi Alps hùng vĩ</strong>,… Hãy cùng
              Lửa Việt Tours chìm đắm vào những khoảnh khắc đáng nhớ cùng hành trình khám phá châu Âu không thể nào quên!
            </div>
          )}
          <div className='mt-[30px] grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16'>
            {Array.from({ length: 6 }).map((_, index) => (
              <TourLink
                news
                sale
                type='save'
                key={index}
                index={index}
                link={'/tin-tuc/mua-hoa-anh-dao-han-quoc-2025'}
              />
            ))}
          </div>
          <div>
            <p className=' font-bold text-[26px] mt-[100px] text-[#013879] md:pr-10 mb-4'>Điểm Đến Yêu Thích</p>
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
              <Link to={'/tin-tuc/mua-hoa-anh-dao-han-quoc-2025'} className='relative  group 1'>
                <img
                  src={news1}
                  alt='news2'
                  className='w-full  h-full  aspect-video object-cover hover:scale-110 transition-all duration-300'
                />
                <div className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'></div>
                <p className=' group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300 absolute bottom-2 left-2 text-white text-center '>
                  Châu Âu
                </p>
              </Link>
              <Link to={'/tin-tuc/mua-hoa-anh-dao-han-quoc-2025'} className=' relative  group 2'>
                <img
                  src={news2}
                  alt='news2'
                  className='w-full  h-full aspect-video  object-cover hover:scale-110 transition-all duration-300'
                />
                <div className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'></div>
                <p className='  group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300 absolute bottom-2 left-2 text-white text-center '>
                  Châu Úc
                </p>
              </Link>
              <Link to={'/tin-tuc/mua-hoa-anh-dao-han-quoc-2025'} className=' relative  group 3'>
                <img
                  src={news2}
                  alt='news2'
                  className='w-full  h-full  object-cover hover:scale-110 transition-all duration-300'
                />
                <div className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'></div>
                <p className='  group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300 absolute bottom-2 left-2 text-white text-center '>
                  Hàn Quốc
                </p>
              </Link>
              <Link to={'/tin-tuc/mua-hoa-anh-dao-han-quoc-2025'} className=' relative  group 4'>
                <img
                  src={news2}
                  alt='news2'
                  className='w-full  h-full  aspect-[2/1]  object-cover hover:scale-110 transition-all duration-300'
                />
                <div className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'></div>
                <p className='  group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300 absolute bottom-2 left-2 text-white text-center '>
                  Nhật Bản
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default DuLich
