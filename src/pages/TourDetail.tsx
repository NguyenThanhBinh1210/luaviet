/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '~/components/Button'
import Container from '~/components/Container'
import Section from '~/components/Section'
import img from '~/assets/4sand.avif'
import TourLink from '~/components/TourLink'
import { getUpdatedQueryParams } from '~/utils/utils'
const TourDetail = () => {
  const location = useLocation()
  const [ngayDi, setNgayDi] = useState('07-04')
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
          <Link to={'#'} className='text-[13px]'>
            Du lịch Nước Ngoài
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
          <Link to={'#'} className='text-[13px]'>
            Châu Âu
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
          <Link to={'#'} className='text-[13px]'>
            CHÂU ÂU 9N9Đ | PHÁP – LUXEMBOURG – BỈ – HÀ LAN – ĐỨC
          </Link>
        </div>
      </Container>
      <Section className='text-[#222222]'>
        <div className='flex  items-center gap-x-2 text-sm text-[#222222]'>
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
              d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z'
            />
          </svg>
          Mã tour:
          <strong className='font-medium'>CHAUAU9N9DCA</strong>
        </div>
        <div className='flex flex-col md:flex-row gap-x-24  justify-between'>
          <div>
            <h1 className='font-bold uppercase text-[22px] md:text-[30px] my-4'>
              CHÂU ÂU 9N9Đ | PHÁP – LUXEMBOURG – BỈ – HÀ LAN – ĐỨC
            </h1>
            <div className='flex flex-col md:flex-row gap-x-28 text-sm gap-y-3'>
              <div className='space-y-2  md:space-y-5'>
                <div className='flex items-center gap-x-2'>
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
                      d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  9N9Đ
                </div>
                <div className='flex items-center gap-x-2'>
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
                      d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
                    />
                  </svg>
                  Air China
                </div>
              </div>
              <div className='flex gap-x-2 h-max'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4 flex-shrink-0'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                  />
                </svg>
                <p className='flex-shrink-0'>Ngày đi:</p>
                <div className='flex flex-wrap gap-x-2 gap-y-2'>
                  <div
                    onClick={() => setNgayDi('07-04')}
                    className={`  ${
                      ngayDi === '07-04' ? 'text-[#013879] border-[#013879]' : 'border-[#D4F1FF]'
                    } font-bold cursor-pointer text-xs py-0.5 px-2.5 rounded-full bg-[#D4F1FF] border  `}
                  >
                    07-04
                  </div>
                  <div
                    onClick={() => setNgayDi('05-05')}
                    className={`  ${
                      ngayDi === '05-05' ? 'text-[#013879] border-[#013879]' : 'border-[#D4F1FF]'
                    } font-bold cursor-pointer text-xs py-0.5 px-2.5 rounded-full bg-[#D4F1FF] border  `}
                  >
                    05-05
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end gap-y-3 mt-4 md:mt-0'>
            <p className='text-[32px] font-bold text-[#ED1B35]'>
              54.990.000 <span className='text-[20px]'>VNĐ</span>
            </p>
            <Button to={`/booking/?${getUpdatedQueryParams({ id: '23930', date: ngayDi }, location)}`} className='py-4'>
              Đặt Ngay
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-1 mt-6 md:mt-10'>
          <div className='col-span-4 md:col-span-2 md:row-span-2'>
            <img src={img} alt='img' className='aspect-[16/12] object-cover' />
          </div>
          <div>
            <img src={img} alt='img' className='aspect-[16/12] object-cover' />
          </div>
          <div>
            <img src={img} alt='img' className='aspect-[16/12] object-cover' />
          </div>
          <div>
            <img src={img} alt='img' className='aspect-[16/12] object-cover' />
          </div>
          <div>
            <img src={img} alt='img' className='aspect-[16/12] object-cover' />
          </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-x-20 mt-10'>
          <div className='md:col-span-2 '>
            <Accodion title='Tổng Quan'>
              ƯU ĐIỂM Không rủi ro Visa: Hoàn 100% giá tour (Bao gồm Phí Visa). Tiện lợi ngay khi bắt đầu: Đưa đón tận
              nhà Miễn phí 2 chiều (nội thành Tp Hồ Chí Minh). Duy trì kết nối: Tặng sim 3G/4G (1 sim/2 khách người
              lớn). Thanh toán bằng Thẻ tín dụng: Tiết kiệm 1.000.000đ. Số lượng quà tặng có giới hạn và các khuyến mãi
              có điều kiện áp dụng. ĐIỂM NHẤN CHƯƠNG TRÌNH Tham quan: Khải Hoàn Môn, Đại lộ Champs Elysees, Tháp Eiffel,
              Bảo tàng Musée de Louvre, Nhà thờ Đức Bà Reims, Nhà hát kịch Opéra-Théâtre de Metz Métropole,… Lưu trú:
              Khách sạn chuẩn 3 sao. Hoạt động khác: Dạo thuyền trên sông Seine ngắm cảnh hai bên bờ thơ mộng, Đắm chìm
              vào lễ hội hoa Keukenhof tại Hà Lan (tháng 3-5 hàng năm), Tự do mua sắm tại các TTTM,…
            </Accodion>
            <div>
              <div className='flex justify-between items-center text-[#013879] cursor-pointer pb-[20px]'>
                <p className=' font-bold text-[20px] md:text-[24px]'>Chương Trình</p>
              </div>
              <div className=''>
                <Accodion2 title='TP.HCM - BẮC KINH - PARIS'>
                  U ĐIỂM Không rủi ro Visa: Hoàn 100% giá tour (Bao gồm Phí Visa). Tiện lợi ngay khi bắt đầu: Đưa đón
                  tận nhà Miễn phí 2 chiều (nội thành Tp Hồ Chí Minh). Duy trì kết nối: Tặng sim 3G/4G (1 sim/2 khách
                  người lớn). Thanh toán bằng Thẻ tín dụng: Tiết kiệm 1.000.000đ. Số lượng quà tặng có giới hạn và các
                  khuyến mãi có điều kiện áp dụng. ĐIỂM NHẤN CHƯƠNG TRÌNH Tham quan: Khải Hoàn Môn, Đại lộ Champs
                  Elysees, Tháp Eiffel, Bảo tàng Musée de Louvre, Nhà thờ Đức Bà Reims, Nhà hát kịch Opéra-Théâtre de
                  Metz Métropole,… Lưu trú: Khách sạn chuẩn 3 sao. Hoạt động khác: Dạo thuyền trên sông Seine ngắm cảnh
                  hai bên bờ thơ mộng, Đắm chìm vào lễ hội hoa
                </Accodion2>
                <Accodion2 title='TP.HCM - BẮC KINH - PARIS'>
                  U ĐIỂM Không rủi ro Visa: Hoàn 100% giá tour (Bao gồm Phí Visa). Tiện lợi ngay khi bắt đầu: Đưa đón
                  tận nhà Miễn phí 2 chiều (nội thành Tp Hồ Chí Minh). Duy trì kết nối: Tặng sim 3G/4G (1 sim/2 khách
                  người lớn). Thanh toán bằng Thẻ tín dụng: Tiết kiệm 1.000.000đ. Số lượng quà tặng có giới hạn và các
                  khuyến mãi có điều kiện áp dụng. ĐIỂM NHẤN CHƯƠNG TRÌNH Tham quan: Khải Hoàn Môn, Đại lộ Champs
                  Elysees, Tháp Eiffel, Bảo tàng Musée de Louvre, Nhà thờ Đức Bà Reims, Nhà hát kịch Opéra-Théâtre de
                  Metz Métropole,… Lưu trú: Khách sạn chuẩn 3 sao. Hoạt động khác: Dạo thuyền trên sông Seine ngắm cảnh
                  hai bên bờ thơ mộng, Đắm chìm vào lễ hội hoa
                </Accodion2>
                <Accodion2 title='TP.HCM - BẮC KINH - PARIS'>
                  U ĐIỂM Không rủi ro Visa: Hoàn 100% giá tour (Bao gồm Phí Visa). Tiện lợi ngay khi bắt đầu: Đưa đón
                  tận nhà Miễn phí 2 chiều (nội thành Tp Hồ Chí Minh). Duy trì kết nối: Tặng sim 3G/4G (1 sim/2 khách
                  người lớn). Thanh toán bằng Thẻ tín dụng: Tiết kiệm 1.000.000đ. Số lượng quà tặng có giới hạn và các
                  khuyến mãi có điều kiện áp dụng. ĐIỂM NHẤN CHƯƠNG TRÌNH Tham quan: Khải Hoàn Môn, Đại lộ Champs
                  Elysees, Tháp Eiffel, Bảo tàng Musée de Louvre, Nhà thờ Đức Bà Reims, Nhà hát kịch Opéra-Théâtre de
                  Metz Métropole,… Lưu trú: Khách sạn chuẩn 3 sao. Hoạt động khác: Dạo thuyền trên sông Seine ngắm cảnh
                  hai bên bờ thơ mộng, Đắm chìm vào lễ hội hoa
                </Accodion2>
              </div>
            </div>
            <Accodion title='Quy Định'>
              ƯU ĐIỂM Không rủi ro Visa: Hoàn 100% giá tour (Bao gồm Phí Visa). Tiện lợi ngay khi bắt đầu: Đưa đón tận
              nhà Miễn phí 2 chiều (nội thành Tp Hồ Chí Minh). Duy trì kết nối: Tặng sim 3G/4G (1 sim/2 khách người
              lớn). Thanh toán bằng Thẻ tín dụng: Tiết kiệm 1.000.000đ. Số lượng quà tặng có giới hạn và các khuyến mãi
              có điều kiện áp dụng. ĐIỂM NHẤN CHƯƠNG TRÌNH Tham quan: Khải Hoàn Môn, Đại lộ Champs Elysees, Tháp Eiffel,
              Bảo tàng Musée de Louvre, Nhà thờ Đức Bà Reims, Nhà hát kịch Opéra-Théâtre de Metz Métropole,… Lưu trú:
              Khách sạn chuẩn 3 sao. Hoạt động khác: Dạo thuyền trên sông Seine ngắm cảnh hai bên bờ thơ mộng, Đắm chìm
              vào lễ hội hoa Keukenhof tại Hà Lan (tháng 3-5 hàng năm), Tự do mua sắm tại các TTTM,…
            </Accodion>
            <div className='mb-[28px]'>
              <div className='flex justify-between items-center text-[#013879] cursor-pointer pb-[20px]'>
                <p className=' font-bold text-[20px] md:text-[24px]'>Giá Tour & Phụ Thu Phòng Đơn</p>
              </div>
              <div>
                <div className='flex justify-between items-center text-lg font-bold border-b-2 border-[#222222] pb-2 mb-4'>
                  <p>Khách hàng</p>
                  <p>Giá tour</p>
                </div>
                <div className='flex items-end mb-2 text-[#222222] text-[16px]'>
                  <div className='flex-1 relative '>
                    <div className='absolute border-b border-dashed border-[#222222] bottom-1.5 left-0 h-[1px] w-full z-0'></div>
                    <div className='bg-white z-10 w-max relative pr-2'>Người lớn (Từ đủ 11 tuổi)</div>
                  </div>
                  <p className='pl-2'>49.990.000 VNĐ</p>
                </div>
                <div className='flex items-end mb-2 text-[#222222] text-[16px]'>
                  <div className='flex-1 relative '>
                    <div className='absolute border-b border-dashed border-[#222222] bottom-1.5 left-0 h-[1px] w-full z-0'></div>
                    <div className='bg-white z-10 w-max relative pr-2'>Trẻ em (Từ 2 đến dưới 11 tuổi)</div>
                  </div>
                  <p className='pl-2'>46.990.000 VNĐ</p>
                </div>
                <div className='flex items-end mb-2 text-[#222222] text-[16px]'>
                  <div className='flex-1 relative '>
                    <div className='absolute border-b border-dashed border-[#222222] bottom-1.5 left-0 h-[1px] w-full z-0'></div>
                    <div className='bg-white z-10 w-max relative pr-2'>Em bé (Dưới 2 tuổi)</div>
                  </div>
                  <p className='pl-2'>7.000.000 VNĐ</p>
                </div>
                <div className='flex items-end mb-2 text-[#013879] font-bold text-[16px]'>
                  <div className='flex-1 relative '>
                    <div className='absolute border-b border-dashed border-[#222222] bottom-1.5 left-0 h-[1px] w-full z-0'></div>
                    <div className='bg-white z-10 w-max relative pr-2'>Phòng đơn</div>
                  </div>
                  <p className='pl-2'>12.000.000 VNĐ</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex justify-between items-center text-[#013879] cursor-pointer pb-[28px]'>
                <p className=' font-bold text-[20px] md:text-[24px]'>Danh Sách Ngày Khởi Hành</p>
              </div>
              <div className='p-6 flex items-center gap-x-4 text-[#222222] border relative'>
                <div className='cursor-pointer'>Tháng 04, 2025</div>
                <div className='cursor-pointer'>Tháng 05, 2025</div>
                <div className='cursor-pointer'>Tháng 06, 2025</div>
                <p className='text-[#013879] bg-white absolute left-3 -top-3.5 font-bold px-2'>Chọn tháng khởi hành</p>
              </div>
              <div className='overflow-x-auto w-[calc(100vw-32px)] lg:w-full'>
                <div className='border mt-14 flex justify-between w-max'>
                  <div className='w-[143px] pl-4 py-4 relative'>
                    <div className='absolute -top-8 left-0 font-bold text-[#013879] pl-4'>Khởi hành</div>
                    <p className='text-sm'>Thứ hai</p>
                    <p className='text-lg font-semibold'>07/04/2025</p>
                  </div>
                  <div className='w-[93px] relative flex items-center justify-center'>
                    <div className='absolute h-[1px] w-full border-b border-[#013879] border-dashed'>
                      <div className='absolute size-[5px] bg-[#013879] -top-[1.6px] left-0 rounded-full'></div>
                      <div className='absolute size-[5px] bg-[#013879] -top-[1.6px] right-0 rounded-full'></div>
                    </div>
                    <div className='border relative rounded-full bg-white border-[#013879] size-[56px] flex items-center justify-center flex-col'>
                      <p className='text-sm leading-4'>9</p>
                      <p className='text-sm leading-4'>ngày</p>
                    </div>
                  </div>
                  <div className='w-[140px] py-4 pl-4 relative'>
                    <div className='absolute -top-8 left-0 font-bold text-[#013879] pl-4'>Ngày về</div>
                    <p className='text-sm'>Thứ hai</p>
                    <p className='text-lg font-semibold'>07/04/2025</p>
                  </div>
                  <div className='w-[144px] flex flex-col justify-center border-l items-center relative'>
                    <div className='absolute -top-8 left-0 font-bold text-[#013879] pl-5'>Giá tiền</div>
                    <p className='line-through text-[#888888] text-sm'>49.990.000 đ</p>
                    <p className='text-[#ED1B35] font-bold'>49.990.000 đ</p>
                  </div>
                  <div className='w-[130px] flex items-center text-sm gap-x-1  border-l justify-center relative'>
                    <div className='absolute -top-8 left-0 font-bold text-[#013879] pl-5 text-base'>Giá tiền</div>
                    5.000.000 <span className='text-xs'>VND</span>
                  </div>
                  <div className='w-[140px] px-5 flex items-center justify-center border-l'>
                    <Link to={`/booking/?${getUpdatedQueryParams({ id: '23930', date: ngayDi }, location)}`}>
                      <button className='border border-[#013879] text-[#013879] hover:bg-[#013879] font-medium hover:text-white transition-all w-full py-2'>
                        Đặt ngay
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='p-[30px] text-[#222222] h-max sticky top-[80px]'
            style={{ boxShadow: '10px 10px 36px rgba(0,0,0,0.08)' }}
          >
            <p className='text-lg font-bold mb-3'>Thông Tin Cơ Bản</p>
            <ul className='space-y-2'>
              <li className='relative pl-3'>
                Khởi hành: 07-04-2025
                <span className='size-1 bg-[#222222] top-1/2 -translate-y-1/2 left-0 absolute'></span>
              </li>
              <li className='relative pl-3'>
                Giờ đi: 05:00
                <span className='size-1 bg-[#222222] top-1/2 -translate-y-1/2 left-0 absolute'></span>
              </li>
              <li className='relative pl-3'>
                Tập trung: 02:00
                <span className='size-1 bg-[#222222] top-1/2 -translate-y-1/2 left-0 absolute'></span>
              </li>
              <li className='relative pl-3'>
                Thời gian: 9 ngày 9 đêm
                <span className='size-1 bg-[#222222] top-1/2 -translate-y-1/2 left-0 absolute'></span>
              </li>
            </ul>
            <div className='flex flex-col justify-end gap-y-3 mt-4 '>
              <p className='text-[32px] font-bold text-[#ED1B35] text-center'>
                54.990.000 <span className='text-[20px]'>VNĐ</span>
              </p>
              <Button
                to={`/booking/?${getUpdatedQueryParams({ id: '23930', date: ngayDi }, location)}`}
                className='py-4 w-full'
              >
                Đặt Ngay
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Section classNameTitle='!text-left !text-[28px]' title='Có Thể Quý Khách Sẽ Thích'>
        <div className='grid  grid-cols-2 gap-3 gap-y-10 lg:grid-cols-4 mt-6'>
          {Array.from({ length: 6 }).map((_, index) => (
            <TourLink news sale type='save' key={index} index={index} link={'/tin-tuc/mua-hoa-anh-dao-han-quoc-2025'} />
          ))}
        </div>
      </Section>
    </div>
  )
}
const Accodion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false)
  return (
    <div className='border-b md:border-b-0 mb-[28px]'>
      <div
        onClick={() => setShow(!show)}
        className='flex justify-between items-center text-[#013879] cursor-pointer pb-[20px]'
      >
        <p className=' font-bold text-[20px] md:text-[24px]'>{title}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className={`size-5 transition-all md:hidden ${show ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
      </div>
      <div
        className={` mb-4 transition-all ${
          show ? 'max-h-[1000px] ' : 'max-h-0 md:max-h-[1000px] overflow-hidden mb-0'
        }`}
      >
        <>{children}</>
      </div>
    </div>
  )
}
const Accodion2 = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false)
  const contentRef = useRef<any>(null) // Tạo ref để tham chiếu đến element

  return (
    <div className='border  mb-4'>
      <div onClick={() => setShow(!show)} className='flex justify-between items-center  cursor-pointer p-[20px]'>
        <div className='flex items-center gap-x-3 '>
          <div className='bg-[#222222] pl-1 pr-2 text-white font-semibold relative'>
            Ngày 1
            <div className='absolute border-[5px] border-transparent border-l-[#222222] top-1/2 -translate-y-1/2 left-full'></div>
          </div>
          <p className=' font-bold text-lg'>{title}</p>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className={`size-5 transition-all  ${show ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
      </div>
      <div
        className={`relative mb-4 transition-all pr-[20px] pl-[100px]   ${
          show ? 'max-h-[1000px] ' : 'max-h-0 overflow-hidden  mb-0'
        }`}
      >
        <>
          <div ref={contentRef} className='mb-3'>
            {children}
          </div>
          <div
            style={{ height: contentRef?.current?.clientHeight + 10 }}
            className='absolute -top-[15px] left-[53px] w-[1px] border-l border-black border-dashed'
          >
            <div className='bg-[#222222] absolute top-full left-0 -translate-x-1 z-10 size-1.5 rounded-s-full'></div>
          </div>
        </>
      </div>
    </div>
  )
}
export default TourDetail
