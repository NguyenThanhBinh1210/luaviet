import { Link } from 'react-router-dom'
import certification1 from '~/assets/certifi1.png'
import certification2 from '~/assets/certifi2.png'
import Button from '../Button'

const Footer = () => {
  return (
    <div className='bg-[#013879] pt-14 text-white'>
      <div className='px-4 max-w-[1262px] mx-auto'>
        <div className='md:grid md:grid-cols-12'>
          <div className='col-span-7 flex flex-wrap gap-y-12'>
            <div className='w-full md:w-[58%] space-y-4'>
              <div>
                <p className='font-semibold mb-3'>Du Lịch Nước Ngoài</p>
                <div className='flex flex-wrap  text-[13px] gap-3'>
                  <div className='w-1/3 max-w-[104px]'>
                    <p className='font-semibold mb-2'>Châu Âu</p>
                    <div className='flex flex-col gap-1'>
                      <Link to='/'>Bỉ</Link>
                      <Link to='/'>Pháp</Link>
                      <Link to='/'>Đức</Link>
                      <Link to='/'>Ý</Link>
                      <Link to='/'>Hà Lan</Link>
                    </div>
                  </div>
                  <div className='w-1/3 max-w-[104px]'>
                    <p className='font-semibold mb-2'>Châu Á</p>
                    <div className='flex flex-col gap-1'>
                      <Link to='/'>Nhật Bản</Link>
                      <Link to='/'>Trung Quốc</Link>
                      <Link to='/'>Hàn Quốc</Link>
                      <Link to='/'>Đài Loan</Link>
                      <Link to='/'>Dubai</Link>
                    </div>
                  </div>
                  <div className='w-1/3 max-w-[104px]'>
                    <p className='font-semibold mb-2'>Châu Úc</p>
                    <div className='flex flex-col gap-1'>
                      <Link to='/'>Úc</Link>
                    </div>
                  </div>
                  <div className='w-1/3 max-w-[104px]'>
                    <p className='font-semibold mb-2'>Châu Mỹ</p>
                    <div className='flex flex-col gap-1'>
                      <Link to='/'>Hoa Kỳ</Link>
                      <Link to='/'>Canada</Link>
                    </div>
                  </div>
                  <div className='w-1/3 max-w-[104px]'>
                    <p className='font-semibold mb-2'>Châu Phi</p>
                    <div className='flex flex-col gap-1'>
                      <Link to='/'>Ai Cập</Link>
                      <Link to='/'>Nam Phi</Link>
                      <Link to='/'>Mauritius</Link>
                      <Link to='/'>Kenya</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className='font-semibold mb-3'>Tour cao cấp</p>
                <div className='flex flex-wrap  text-[13px] gap-3'>
                  <div className='w-1/3 max-w-[104px]'>
                    <Link to='/'>Châu Mỹ</Link>
                  </div>
                  <div className='w-1/3 max-w-[104px]'>
                    <Link to='/'>Tour Du thuyền</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[42%] space-y-4'>
              <div>
                <p className='font-semibold mb-3'>Du Lịch Trong Nước</p>
                <div className='text-[13px]'>
                  <div className='flex flex-col gap-1'>
                    <Link to='/'>Miền Trung</Link>
                    <Link to='/'>Miền Bắc</Link>
                    <Link to='/'>Miền Nam</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[58%] space-y-4'>
              <div className='max-w-[360px]'>
                <p className='font-semibold mb-3'>Liên hệ</p>
                <div className='flex flex-wrap  text-[13px] gap-3'>
                  <div className=''>
                    <p className='font-semibold mb-2'>Văn phòng chính</p>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-2'>
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
                            d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                          />
                        </svg>

                        <p>677 Trần Hưng Đạo, Phường 1, Quận 5, TP. HCM</p>
                      </div>
                      <div className='flex items-center gap-2'>
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
                            d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                          />
                        </svg>

                        <p>1900 6420</p>
                      </div>
                      <div className='flex items-center gap-2'>
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
                            d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                          />
                        </svg>

                        <p>nfo@luavietours.com</p>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <p className='font-semibold mb-2'>Văn phòng Hà Nội</p>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-2'>
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
                            d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                          />
                        </svg>

                        <p>Số 22, Mai Anh Tuấn, Phường Ô Chợ Dừa, Quận Đống Đa, TP. Hà Nội</p>
                      </div>
                      <div className='flex items-center gap-2'>
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
                            d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                          />
                        </svg>

                        <p>1900 6420</p>
                      </div>
                      <div className='flex items-center gap-2'>
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
                            d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                          />
                        </svg>

                        <p>nfo@luavietours.com</p>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <p className='font-semibold mb-2'>Văn phòng Cần Thơ</p>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-2'>
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
                            d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                          />
                        </svg>

                        <p>Số 09 Cách Mạng Tháng Tám, Phường Thới Bình, Quận Ninh Kiều, TP. Cần Thơ</p>
                      </div>
                      <div className='flex items-center gap-2'>
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
                            d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                          />
                        </svg>

                        <p>0906.801.855</p>
                      </div>
                      <div className='flex items-center gap-2'>
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
                            d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                          />
                        </svg>

                        <p>mekong.bsm@luavietours.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[42%] space-y-4'>
              <div>
                <p className='font-semibold mb-3'>Thông tin</p>
                <div className='text-[13px]'>
                  <div className='flex flex-col gap-1'>
                    <Link to='/'>Giới thiệu</Link>
                    <Link to='/'>Tổ chức sự kiện</Link>
                    <Link to='/'>Cho thuê xe</Link>
                    <Link to='/'>Vé máy bay</Link>
                    <Link to='/'>Tin tức</Link>
                    <Link to='/'>Tuyển dụng</Link>
                  </div>
                </div>
              </div>
              <div>
                <p className='font-semibold mb-3'>Chính sách và quy định</p>
                <div className='text-[13px]'>
                  <div className='flex flex-col gap-1'>
                    <Link to='/'>Điều kiện và Điều khoản sử dụng trang Web</Link>
                    <Link to='/'>Chính sách Bảo mật thông tin Khách hàng</Link>
                    <Link to='/'>Chính sách xử lý Dữ liệu Cá nhân</Link>
                    <Link to='/'>Điều khoản Hợp đồng dịch vụ</Link>
                    <Link to='/'>Các Phương thức Thanh toán</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-5'>
            <div>
              <p className='font-semibold mb-3'>Chứng Nhận</p>
              <div className='flex gap-2 '>
                <div className='w-[195px]'>
                  <img src={certification1} alt='certification' />
                  <img src={certification2} alt='certification' />
                </div>
                <div className='flex-1 text-xs space-y-2'>
                  <p>
                    Giấy chứng nhận đăng ký kinh doanh số 0301659981 do Sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 14/01/1999.
                  </p>
                  <p>Đăng ký thay đổi lần thứ: 15, ngày 07 tháng 06 năm 2022.</p>
                  <p>Số giấy phép kinh doanh lữ hành quốc tế: 79 -228 /20 16TCDL - GP LHQT cấp ngày 28/07/2016.</p>
                  <p>Số D-U-N-S doanh nghiệp: 555256961</p>
                </div>
              </div>
            </div>
            <div className='mt-40 md:max-w-[400px]'>
              <p className='font-semibold mb-1'>Newsletter</p>
              <p className='mb-3'>Email của Quý Khách</p>
              <div className='border border-white  flex items-center gap-2 py-3 px-4 '>
                <input
                  className='w-full bg-transparent outline-none placeholder:text-white'
                  type='text'
                  placeholder='Email của Quý Khách'
                />
                <button>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6 -rotate-45'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
                    />
                  </svg>
                </button>
              </div>
              <p className='font-semibold mb-2 mt-5'>Mạng xã hội</p>
              <Button
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
                1900 6420
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#222] py-2.5 mt-8 text-[10px] text-white text-center'>
        Copyright © 1999-2023 Công ty TNHH Du Lịch Lửa Việt
      </div>
    </div>
  )
}

export default Footer
