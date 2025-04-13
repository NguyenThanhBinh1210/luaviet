/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import logo from '~/assets/6219758633915369280.jpg'
import Button from '../Button'
import { useEffect, useMemo, useState } from 'react'
import ChangeLanguage from '../ChangeLanguage'
import { useQuery } from 'react-query'
import categoryApi from '~/apis/category.api'
import { useTranslation } from 'react-i18next'
const Header = () => {
  const [categories, setCategories] = useState<any>()

  // Lấy ngôn ngữ từ localStorage, mặc định là 'vi'
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
  const [activeTour, setActive] = useState<any>({})
  return (
    <header
      style={{
        boxShadow: ' 0 0 10px rgba(0,0,0,0.3)'
      }}
      className='fixed  bg-white top-0 left-0 right-0 z-50 flex justify-between items-center px-2 md:px-4 xl:px-8 '
    >
      <div className='flex   w-full justify-between items-center'>
        <Link to='/' className='flex items-center gap-4'>
          <img src={logo} alt='logo' className='  w-[70px]' />
        </Link>
        <div className='flex items-center gap-4 '>
          <div className='hidden lg:flex md:gap-x-3 xl:gap-x-6 2xl:gap-x-10 mr-6 text-sm xl:text-base'>
            <Link to={'/'} className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group block'>
              {t('header.home')}
              <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </Link>
            <div className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group flex items-center gap-x-1'>
              {t('header.travel')}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 group-hover:rotate-180 transition-all duration-300'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
              <div
                style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                className='px-5 pt-[82px] font-normal text-[#222222] w-screen rounded pb-[37px]  transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible left-0 top-[150px] group-hover:top-[50px]  z-50 fixed bg-white'
              >
                <div className='max-w-[1242px] mx-auto px-4 flex '>
                  <div className='w-[300px]'>
                    {organizedCategories.map((item: any, index: number) => (
                      <Link
                        key={index}
                        to={`/du-lich/du-lich-${item.slug}`}
                        state={{ title: `${t('header.travel')} ${item.name}`, type: `du-lich-${item.slug}` }}
                        onMouseEnter={() => setActive(item)}
                        className={`${activeTour === item && 'font-medium'} hover:font-medium mb-3 block `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='flex-1 flex gap-x-6'>
                    {activeTour.subCategories?.map((item: any, index: number) => (
                      <div key={index} className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={`/du-lich/du-lich-${activeTour.slug}/${item.slug}`}
                          state={{ title: `${t('header.travel')} ${item.name}`, local: item.name, type: `du-lich-${item.slug}` }}
                          className='font-semibold mb-2 block'
                        >
                          {item.name}
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          {item.subCategories.map((subItem: any, index: number) => (
                            <Link
                              key={index}
                              to={`/du-lich/du-lich-${activeTour.slug}/${item.slug}/${subItem.slug}`}
                              state={{ title: `${t('header.travel')} ${item.name}`, local: subItem.name, type: `du-lich-${item.slug}` }}
                              className='hover:opacity-55 transition-all'
                            >
                              {subItem.name}
                            </Link>
                          ))}
                          {item.subCategories.length > 5 && (
                            <Link
                              to={`/du-lich/du-lich-${item.slug}`}
                              state={{ title: `${t('header.travel')} ${item.name}`, type: `du-lich-${item.slug}` }}
                              className='font-medium underline hover:opacity-55 transition-all '
                            >
                              Xem tất cả
                            </Link>
                          )}

                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
            {/* <div className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
              Tour Khách Đoàn
              <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </div> */}
            {/* <div className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group flex items-center gap-x-1'>
              Đối tác
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 group-hover:rotate-180 transition-all duration-300'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
              <div
                style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                className='px-5 font-normal text-[#222222] rounded pt-5 pb-3 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible top-full  group-hover:top-[calc(100%-20px)] left-1/2 -translate-x-1/2 absolute bg-white'
              >
                <Link to={'/'} className='w-[149px] mb-3 block '>
                  Ngân hàng
                </Link>
                <Link to={'/'} className='w-[149px] mb-3 block '>
                  Tài chính
                </Link>
                <Link to={'/'} className='w-[149px] mb-3 block '>
                  Thương mại
                </Link>
              </div>
            </div> */}
            <Link to={'/tin-tuc'} className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
              {t('header.news')}
              <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </Link>
            {/* <Link
              to={'/'}
              className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'
            >
              Chính Sách & Quy Định
              <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </Link> */}
            <Link to={'/gallery'} className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
              {t('header.display')}
              <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </Link>
            <Link to={'/lien-he'} className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
              {t('header.contact')}
              <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </Link>
            {/* <Link to={'/tuyen-dung'} className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
              Tuyển Dụng
              <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </Link> */}
          </div>
          <ChangeLanguage />
          <SearchButton />
          <Button
            className='lg:hidden'
            onlyIcon
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                />
              </svg>
            }
          >
            12412321
          </Button>
          <ButtonMenu organizedCategories={organizedCategories} />
        </div>
      </div>
    </header>
  )
}
const ButtonMenu = ({ organizedCategories }: { organizedCategories: any }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Hàm để đóng menu
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='bg-[#013879] lg:hidden w-10 h-10 text-white flex items-center justify-center'
      >
        {!isOpen ? (
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
              d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
            />
          </svg>
        ) : (
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
        )}
      </button>
      <div
        className={`fixed overflow-y-scroll scrollbar-hidden w-full bottom-0  border-t h-[calc(100vh-64px)] bg-white z-50   transition-all duration-500 ${isOpen ? '-right-0' : '-right-full opacity-0 pointer-events-none'
          }`}
      >
        <Link
          to={'/'}
          className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b'
          onClick={handleLinkClick}
        >
          Trang chủ
        </Link>
        {organizedCategories.map((item: any, index: number) => (
          <Accordion key={index} title={` ${t('header.travel')} ${item.name}`}  >
            {item.subCategories.map((subItem: any, index: number) => (
              <div key={index}>
                <div className='mb-5'>
                  <Link
                    to={`/du-lich/du-lich-${item.slug}/${subItem.slug}`}
                    state={{ title: `${t('header.travel')} ${subItem.name}`, local: subItem.name, type: `du-lich-${item.slug}` }}
                    className='font-semibold mb-2 block'
                    onClick={handleLinkClick}
                  >
                    {subItem.name}
                  </Link>
                  <div className='grid grid-cols-3  gap-y-3 text-sm'>
                    {subItem.subCategories.map((subSubItem: any, index: number) => (
                      <Link
                        key={index}
                        to={`/du-lich/du-lich-${item.slug}/${subItem.slug}/${subSubItem.slug}`}
                        state={{ title: `Du lịch ${item.name}`, local: subSubItem.name, type: `du-lich-${item.slug}` }}
                        className='hover:opacity-55 transition-all'
                        onClick={handleLinkClick}
                      >
                        {subSubItem.name}
                      </Link>
                    ))}
                    {subItem.subCategories.length > 5 && (
                      <Link
                        to={`/du-lich/du-lich-${item.slug}/${subItem.slug}`}
                        state={{ title: `${t('header.travel')} ${subItem.name}`, local: subItem.name, type: `du-lich-${item.slug}` }}
                        className='font-semibold mb-2 block'
                        onClick={handleLinkClick}
                      >
                        Xem tất cả
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}

          </Accordion>
        ))}



        <Link
          to={'/'}
          className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b'
          onClick={handleLinkClick}
        >
          {t('header.news')}

        </Link>
        <Link
          to={'/gallery'}
          className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b'
          onClick={handleLinkClick}
        >
          {t('header.display')}

        </Link>

        <Link
          to={'/lien-he'}
          className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b'
          onClick={handleLinkClick}
        >
          {t('header.contact')}
        </Link>

      </div>
    </>
  )
}
const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
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
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 bg-white z-50 px-4 py-20 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className='max-w-[1060px] mx-auto'>
          <div className='relative flex items-center border-b-2 border-[#013879] pb-4'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-[#013879]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
              </svg>
            </button>

            <input
              type='text'
              className='w-full  font-medium  text-xl text-[#013879]  px-5 h-[46px] rounded-[10px]  pr-14'
              placeholder='Tìm kiếm'
            />
            <button className='absolute right-0 top-2/4 -translate-y-2/4 text-[#013879] '>
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
        </div>
      </div>
    </>
  )
}
const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='border-b'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer text-[#013879] font-medium text-lg py-6 px-[16px] w-full   flex items-center gap-x-2'
      >
        {title}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className={`size-4 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
      </div>
      <div
        className={`px-[16px]  flex flex-col  text-[#222222]  ${isOpen ? 'max-h-[3000px] pb-3' : 'max-h-0 pb-0'
          } transition-max-height duration-500 overflow-hidden`}
      >
        {children}
      </div>
    </div>
  )
}
export default Header
