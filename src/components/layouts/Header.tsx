import { Link } from 'react-router-dom'
import logo from '~/assets/logo.jpg'
import Button from '../Button'
import { useEffect, useState } from 'react'
import ChangeLanguage from '../ChangeLanguage'
import { menuItems } from '~/constants/renaral.const'
const Header = () => {
  const [activeTour, setActive] = useState(1)
  return (
    <header
      style={{
        boxShadow: ' 0 0 10px rgba(0,0,0,0.3)'
      }}
      className='fixed  bg-white top-0 left-0 right-0 z-50 flex justify-between items-center px-2 md:px-4 xl:px-8 '
    >
      <div className='flex   w-full justify-between items-center'>

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
                <div className='max-w-[1242px] mx-auto px-4 flex '>
                  <div className='w-[300px]'>
                    {menuItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        state={{ title: item.title, type: item.type }}
                        onMouseEnter={() => setActive(index + 1)}
                        className={`${activeTour === index + 1 && 'font-medium'} hover:font-medium mb-3 block `}
                      >
                        {item.title}
                      </Link>
                    ))}

                  </div>
                  <div className='flex-1 flex gap-x-6'>
                    <div className={`${activeTour === 1 ? 'flex' : 'hidden'} `}>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/du-lich-nuoc-ngoai/chau-au'}
                          state={{ title: 'Du lịch Nước ngoài', local: 'Châu Âu', type: 'du-lich-nuoc-ngoai' }}
                          className='font-semibold mb-2 block'
                        >
                          Châu Âu
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-au/bi'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Bỉ', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all '
                          >
                            Bỉ
                          </Link>
                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-au/phap'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Pháp', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Pháp
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-au/duc'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Đức', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Đức
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-au/it'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Ý', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Ý
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-au/han-lan'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Hà Lan', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Hà Lan
                          </Link>
                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-au'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Châu Âu', type: 'du-lich-nuoc-ngoai' }}
                            className='font-medium underline hover:opacity-55 transition-all '
                          >
                            Xem tất cả
                          </Link>
                        </div>
                      </div>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/du-lich-nuoc-ngoai/chau-a'}
                          state={{ title: 'Du lịch Nước ngoài', local: 'Châu Á', type: 'du-lich-nuoc-ngoai' }}
                          className='font-semibold mb-2 block'
                        >
                          Châu Á
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-a/nhat-ban'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Nhật Bản', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Nhật Bản
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-a/trung-quoc'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Trung Quốc', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Trung Quốc
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-a/han-quoc'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Hàn Quốc', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Hàn Quốc
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-a/dai-loan'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Đài Loan', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Đài Loan
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-a/dubai'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Dubai', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Dubai
                          </Link>
                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-a'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Châu Á', type: 'du-lich-nuoc-ngoai' }}
                            className='font-medium underline hover:opacity-55 transition-all '
                          >
                            Xem tất cả
                          </Link>
                        </div>
                      </div>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/du-lich-nuoc-ngoai/chau-uc'}
                          state={{ title: 'Du lịch Nước ngoài', local: 'Châu Úc', type: 'du-lich-nuoc-ngoai' }}
                          className='font-semibold mb-2 block'
                        >
                          Châu Úc
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-uc/uc'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Úc', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Úc
                          </Link>
                        </div>
                      </div>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/du-lich-nuoc-ngoai/chau-my'}
                          state={{ title: 'Du lịch Nước ngoài', local: 'Châu Mỹ', type: 'du-lich-nuoc-ngoai' }}
                          className='font-semibold mb-2 block'
                        >
                          Châu Mỹ
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-my/hoa-ky'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Hoa Kỳ', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Hoa Kỳ
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-my/canada'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Canada', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Canada
                          </Link>
                        </div>
                      </div>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/du-lich-nuoc-ngoai/chau-phi'}
                          state={{ title: 'Du lịch Nước ngoài', local: 'Châu Phi', type: 'du-lich-nuoc-ngoai' }}
                          className='font-semibold mb-2 block'
                        >
                          Châu Phi
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-phi/ai-cap'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Ai Cập', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Ai Cập
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-phi/nam-phi'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Nam Phi', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Nam Phi
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-phi/mauritius'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Mauritius', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Mauritius
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-nuoc-ngoai/chau-phi/kenya'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Kenya', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Kenya
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className={`${activeTour === 2 ? 'flex' : 'hidden'} `}>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/du-lich-trong-nuoc/mien-trung'}
                          state={{ title: 'Du lịch Trong Nước', local: 'Miền Trung', type: 'du-lich-trong-nuoc' }}
                          className='font-semibold mb-2 block'
                        >
                          Miền Trung
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-trung/hue'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Huế', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Huế
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-trung/da-nang'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Đà Nẵng', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Đà Nẵng
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-trung/hoi-an'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Hội An', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Hội An
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-trung/quang-binh'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Quảng Bình', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Quảng Bình
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-trung/tay-nguyen'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Tây Nguyên', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Tây Nguyên
                          </Link>
                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-trung'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Miền Trung', type: 'du-lich-trong-nuoc' }}
                            className='font-medium underline hover:opacity-55 transition-all '
                          >
                            Xem tất cả
                          </Link>
                        </div>
                      </div>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/du-lich-trong-nuoc/mien-trung'}
                          state={{ title: 'Du lịch Trong Nước', local: 'Miền Bắc', type: 'du-lich-trong-nuoc' }}
                          className='font-semibold mb-2  block'
                        >
                          Miền Bắc
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-bac/ha-noi'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Hà Nội', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Hà Nội
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-bac/ha-long'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Hạ Long', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Hạ Long
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-bac/ninh-binh'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Ninh Bình', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Ninh Bình
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-bac/tay-bac'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Tây Bắc', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Tây Bắc
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-bac/sapa'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Sapa', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Sapa
                          </Link>
                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-trung'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Miền Bắc', type: 'du-lich-trong-nuoc' }}
                            className='font-medium underline hover:opacity-55 transition-all '
                          >
                            Xem tất cả
                          </Link>
                        </div>
                      </div>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/du-lich-trong-nuoc/mien-nam'}
                          state={{ title: 'Du lịch Trong Nước', local: 'Miền Nam', type: 'du-lich-trong-nuoc' }}
                          className='font-semibold mb-2  block'
                        >
                          Miền Nam
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-nam/tp-ho-chi-minh'}
                            state={{ title: 'Du lịch Trong Nước', local: 'TP Hồ Chí Minh', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            TP Hồ Chí Minh
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-nam/con-dao'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Côn Đảo', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Côn Đảo
                          </Link>

                          <Link
                            to={'/du-lich/du-lich-trong-nuoc/mien-nam/phu-quoc'}
                            state={{ title: 'Du lịch Trong Nước', local: 'Phú Quốc', type: 'du-lich-trong-nuoc' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Phú Quốc
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className={`${activeTour === 3 ? 'flex' : 'hidden'} `}>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/tour-cao-cap/chau-my'}
                          state={{ title: 'Tour Cao Cấp', local: 'Châu Mỹ', type: 'tour-cao-cap' }}
                          className='font-semibold mb-2  block'
                        >
                          Châu Mỹ
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/tour-cao-cap/chau-my/bo-tay'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Bờ Tây', type: 'du-lich-nuoc-ngoai' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Bờ Tây
                          </Link>
                        </div>
                      </div>
                      <div className='w-[140px] xl:w-[180px]'>
                        <Link
                          to={'/du-lich/tour-cao-cap/du-lich-tour-du-thuyen'}
                          state={{ title: 'Tour Cao Cấp', local: 'Tour Du thuyền', type: 'tour-cao-cap' }}
                          className='font-semibold mb-2 block'
                        >
                          Tour Du thuyền
                        </Link>
                        <div className='flex flex-col gap-y-3 text-sm'>
                          <Link
                            to={'/du-lich/tour-cao-cap/du-lich-tour-du-thuyen/singapore-malaysia'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Singapore - Malaysia', type: 'tour-cao-cap' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Singapore - Malaysia
                          </Link>

                          <Link
                            to={'/du-lich/tour-cao-cap/du-lich-tour-du-thuyen/dai-loan-nhat-ban'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Đài Loan - Nhật Bản', type: 'tour-cao-cap' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Đài Loan - Nhật Bản
                          </Link>

                          <Link
                            to={'/du-lich/tour-cao-cap/du-lich-tour-du-thuyen/hong-kong-nhat-ban'}
                            state={{ title: 'Du lịch Nước ngoài', local: 'Hong Kong - Nhật Bản', type: 'tour-cao-cap' }}
                            className='hover:opacity-55 transition-all'
                          >
                            Hong Kong - Nhật Bản
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b' onClick={handleLinkClick}>
          Giới Thiệu
        </Link>

        <Accordion title='Du Lịch Nước Ngoài'>
          <div className='mb-5'>
            <Link
              to={'/du-lich/du-lich-nuoc-ngoai/chau-au'}
              state={{ title: 'Du lịch Nước ngoài', local: 'Châu Âu', type: 'du-lich-nuoc-ngoai' }}
              className='font-semibold mb-2 block'
              onClick={handleLinkClick}
            >
              Châu Âu
            </Link>
            <div className='grid grid-cols-3  gap-y-3 text-sm'>
              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-au/bi'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Bỉ', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Bỉ
              </Link>
              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-au/phap'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Pháp', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Pháp
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-au/duc'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Đức', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Đức
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-au/it'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Ý', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Ý
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-au/han-lan'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Hà Lan', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Hà Lan
              </Link>
              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-au'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Châu Âu', type: 'du-lich-nuoc-ngoai' }}
                className='font-medium underline hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className='mb-5'>
            <Link
              to={'/du-lich/du-lich-nuoc-ngoai/chau-a'}
              state={{ title: 'Du lịch Nước ngoài', local: 'Châu Á', type: 'du-lich-nuoc-ngoai' }}
              className='font-semibold mb-2 block'
              onClick={handleLinkClick}
            >
              Châu Á
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-a/nhat-ban'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Nhật Bản', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Nhật Bản
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-a/trung-quoc'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Trung Quốc', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Trung Quốc
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-a/han-quoc'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Hàn Quốc', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Hàn Quốc
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-a/dai-loan'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Đài Loan', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Đài Loan
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-a/dubai'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Dubai', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Dubai
              </Link>
              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-a'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Châu Á', type: 'du-lich-nuoc-ngoai' }}
                className='font-medium underline hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className='mb-5'>
            <Link
              to={'/du-lich/du-lich-nuoc-ngoai/chau-uc'}
              state={{ title: 'Du lịch Nước ngoài', local: 'Châu Úc', type: 'du-lich-nuoc-ngoai' }}
              className='font-semibold mb-2 block'
              onClick={handleLinkClick}
            >
              Châu Úc
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-uc/uc'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Úc', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Úc
              </Link>
            </div>
          </div>
          <div className='mb-5'>
            <Link
              to={'/du-lich/du-lich-nuoc-ngoai/chau-my'}
              state={{ title: 'Du lịch Nước ngoài', local: 'Châu Mỹ', type: 'du-lich-nuoc-ngoai' }}
              className='font-semibold mb-2 block'
              onClick={handleLinkClick}
            >
              Châu Mỹ
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-my/hoa-ky'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Hoa Kỳ', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Hoa Kỳ
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-my/canada'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Canada', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Canada
              </Link>
            </div>
          </div>
          <div className='mb-5'>
            <Link
              to={'/du-lich/du-lich-nuoc-ngoai/chau-phi'}
              state={{ title: 'Du lịch Nước ngoài', local: 'Châu Phi', type: 'du-lich-nuoc-ngoai' }}
              className='font-semibold mb-2 block'
              onClick={handleLinkClick}
            >
              Châu Phi
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-phi/ai-cap'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Ai Cập', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Ai Cập
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-phi/nam-phi'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Nam Phi', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Nam Phi
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-phi/mauritius'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Mauritius', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Mauritius
              </Link>

              <Link
                to={'/du-lich/du-lich-nuoc-ngoai/chau-phi/kenya'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Kenya', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Kenya
              </Link>
            </div>
          </div>
        </Accordion>
        <Accordion title='Du Lịch Trong Nước'>
          <div className='mb-5'>
            <Link
              to={'/du-lich/du-lich-trong-nuoc/mien-trung'}
              state={{ title: 'Du lịch Trong Nước', local: 'Miền Trung', type: 'du-lich-trong-nuoc' }}
              className='font-semibold mb-2 block'
              onClick={handleLinkClick}
            >
              Miền Trung
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-trung/hue'}
                state={{ title: 'Du lịch Trong Nước', local: 'Huế', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Huế
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-trung/da-nang'}
                state={{ title: 'Du lịch Trong Nước', local: 'Đà Nẵng', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Đà Nẵng
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-trung/hoi-an'}
                state={{ title: 'Du lịch Trong Nước', local: 'Hội An', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Hội An
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-trung/quang-binh'}
                state={{ title: 'Du lịch Trong Nước', local: 'Quảng Bình', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Quảng Bình
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-trung/tay-nguyen'}
                state={{ title: 'Du lịch Trong Nước', local: 'Tây Nguyên', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Tây Nguyên
              </Link>
              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-trung'}
                state={{ title: 'Du lịch Trong Nước', local: 'Miền Trung', type: 'du-lich-trong-nuoc' }}
                className='font-medium underline hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className='mb-5'>
            <Link
              to={'/du-lich/du-lich-trong-nuoc/mien-trung'}
              state={{ title: 'Du lịch Trong Nước', local: 'Miền Bắc', type: 'du-lich-trong-nuoc' }}
              className='font-semibold mb-2  block'
              onClick={handleLinkClick}
            >
              Miền Bắc
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-bac/ha-noi'}
                state={{ title: 'Du lịch Trong Nước', local: 'Hà Nội', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Hà Nội
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-bac/ha-long'}
                state={{ title: 'Du lịch Trong Nước', local: 'Hạ Long', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Hạ Long
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-bac/ninh-binh'}
                state={{ title: 'Du lịch Trong Nước', local: 'Ninh Bình', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Ninh Bình
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-bac/tay-bac'}
                state={{ title: 'Du lịch Trong Nước', local: 'Tây Bắc', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Tây Bắc
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-bac/sapa'}
                state={{ title: 'Du lịch Trong Nước', local: 'Sapa', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Sapa
              </Link>
              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-trung'}
                state={{ title: 'Du lịch Trong Nước', local: 'Miền Bắc', type: 'du-lich-trong-nuoc' }}
                className='font-medium underline hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className='mb-5'>
            <Link
              to={'/du-lich/du-lich-trong-nuoc/mien-nam'}
              state={{ title: 'Du lịch Trong Nước', local: 'Miền Nam', type: 'du-lich-trong-nuoc' }}
              className='font-semibold mb-2  block'
              onClick={handleLinkClick}
            >
              Miền Nam
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-nam/tp-ho-chi-minh'}
                state={{ title: 'Du lịch Trong Nước', local: 'TP Hồ Chí Minh', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                TP Hồ Chí Minh
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-nam/con-dao'}
                state={{ title: 'Du lịch Trong Nước', local: 'Côn Đảo', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Côn Đảo
              </Link>

              <Link
                to={'/du-lich/du-lich-trong-nuoc/mien-nam/phu-quoc'}
                state={{ title: 'Du lịch Trong Nước', local: 'Phú Quốc', type: 'du-lich-trong-nuoc' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Phú Quốc
              </Link>
            </div>
          </div>
        </Accordion>
        <Accordion title='Tour Cao Cấp'>
          <div className='mb-5'>
            <Link
              to={'/du-lich/tour-cao-cap/chau-my'}
              state={{ title: 'Tour Cao Cấp', local: 'Châu Mỹ', type: 'tour-cao-cap' }}
              className='font-semibold mb-2  block'
              onClick={handleLinkClick}
            >
              Châu Mỹ
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/tour-cao-cap/chau-my/bo-tay'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Bờ Tây', type: 'du-lich-nuoc-ngoai' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Bờ Tây
              </Link>
            </div>
          </div>
          <div className='mb-5'>
            <Link
              to={'/du-lich/tour-cao-cap/du-lich-tour-du-thuyen'}
              state={{ title: 'Tour Cao Cấp', local: 'Tour Du thuyền', type: 'tour-cao-cap' }}
              className='font-semibold mb-2 block'
              onClick={handleLinkClick}
            >
              Tour Du thuyền
            </Link>
            <div className='grid grid-cols-3 gap-y-3 text-sm'>
              <Link
                to={'/du-lich/tour-cao-cap/du-lich-tour-du-thuyen/singapore-malaysia'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Singapore - Malaysia', type: 'tour-cao-cap' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Singapore - Malaysia
              </Link>

              <Link
                to={'/du-lich/tour-cao-cap/du-lich-tour-du-thuyen/dai-loan-nhat-ban'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Đài Loan - Nhật Bản', type: 'tour-cao-cap' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Đài Loan - Nhật Bản
              </Link>

              <Link
                to={'/du-lich/tour-cao-cap/du-lich-tour-du-thuyen/hong-kong-nhat-ban'}
                state={{ title: 'Du lịch Nước ngoài', local: 'Hong Kong - Nhật Bản', type: 'tour-cao-cap' }}
                className='hover:opacity-55 transition-all'
                onClick={handleLinkClick}
              >
                Hong Kong - Nhật Bản
              </Link>
            </div>
          </div>
        </Accordion>
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b' onClick={handleLinkClick}>
          Tour Khách Đoàn
        </Link>
        <Accordion title='Đối tác'>
          <div className='space-y-2 flex flex-col'>
            <Link to='/' onClick={handleLinkClick}>Ngân Hàng</Link>
            <Link to='/' onClick={handleLinkClick}>Tài Chính</Link>
            <Link to='/' onClick={handleLinkClick}>Thương mại</Link>
          </div>
        </Accordion>

        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b' onClick={handleLinkClick}>
          Tin Tức
        </Link>
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b' onClick={handleLinkClick}>
          Chính Sách & Quy Định
        </Link>
        <Link to={'/'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b' onClick={handleLinkClick}>
          Liên Hệ
        </Link>
        <Link to={'/tuyen-dung'} className='text-[#013879] font-medium text-lg py-6 px-[16px] w-full block border-b' onClick={handleLinkClick}>
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
