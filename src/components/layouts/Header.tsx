import { Link } from 'react-router-dom'
import logo from '~/assets/logo.jpg'
import Button from '../Button'
import { useEffect, useState } from 'react'
import ChangeLanguage from '../ChangeLanguage'
const Header = () => {
  return (
    <header
      style={{
        boxShadow: ' 0 0 10px rgba(0,0,0,0.3)'
      }}
      className='fixed  bg-white top-0 left-0 right-0 z-50 flex justify-between items-center px-2 md:px-4 xl:px-8 '
    >
      <Link to='/' className='flex items-center gap-4'>
        <img src={logo} alt='logo' className='w-[108px] md:w-[120px] xl:w-[155px]' />
      </Link>
      <div className='flex items-center gap-4 '>
        <div className='hidden lg:flex md:gap-x-3 xl:gap-x-6 2xl:gap-x-10 mr-6 text-sm xl:text-base'>
          <div className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
            Giới Thiệu
            <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
          </div>
          <div className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group flex items-center gap-x-1'>
            Du Lịch
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
              <div className='max-w-[1242px] mx-auto px-4'>
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
            </div>
          </div>
          <div className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
            Tour Khách Đoàn
            <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
          </div>
          <div className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group flex items-center gap-x-1'>
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
          </div>
          <Link to={'/tin-tuc'} className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
            Tin Tức
            <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
          </Link>
          <Link
            to={'/chinh-sach-va-quy-dinh'}
            className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'
          >
            Chính Sách & Quy Định
            <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
          </Link>
          <Link to={'/lien-he'} className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
            Liên Hệ
            <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
          </Link>
          <Link to={'/tuyen-dung'} className='py-[22px] relative  text-[#013879]  font-medium cursor-pointer group'>
            Tuyển Dụng
            <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300'></div>
          </Link>
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
        <ButtonMenu />
      </div>
    </header>
  )
}
const ButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
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
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b '>
          Giới Thiệu
        </Link>
        <div>
          <div className='cursor-pointer text-[#013879] font-medium text-lg py-6 px-[16px] w-full  border-b flex items-center gap-x-2'>
            Du Lịch Nước Ngoài{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='size-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
            </svg>
          </div>
        </div>
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b '>
          Tour Khách Đoàn
        </Link>
        <Accordion>
          <Link to=''>Ngân Hàng</Link>
          <Link to=''>Tài Chính</Link>
          <Link to=''>Thương mại</Link>
        </Accordion>
        <Accordion>
          <Link to=''>Ngân Hàng</Link>
          <Link to=''>Tài Chính</Link>
          <Link to=''>Thương mại</Link>
        </Accordion>
        <Accordion>
          <Link to=''>Ngân Hàng</Link>
          <Link to=''>Tài Chính</Link>
          <Link to=''>Thương mại</Link>
        </Accordion>
        <Accordion>
          <Link to=''>Ngân Hàng</Link>
          <Link to=''>Tài Chính</Link>
          <Link to=''>Thương mại</Link>
        </Accordion>
        <Accordion>
          <Link to=''>Ngân Hàng</Link>
          <Link to=''>Tài Chính</Link>
          <Link to=''>Thương mại</Link>
        </Accordion>
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b '>
          Tin Tức
        </Link>
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b '>
          Chính Sách & Quy Định
        </Link>
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b '>
          Liên Hệ
        </Link>
        <Link to={'/tuyen-dung'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b '>
          Tuyển Dụng
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
const Accordion = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='border-b'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer text-[#013879] font-medium text-lg py-6 px-[16px] w-full   flex items-center gap-x-2'
      >
        Đối Tác{' '}
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
        className={`px-[16px] space-y-2 flex flex-col  text-[#222222]  ${isOpen ? 'max-h-[1000px] pb-3' : 'max-h-0 pb-0'
          } transition-max-height duration-500 overflow-hidden`}
      >
        {children}
      </div>
    </div>
  )
}
export default Header
