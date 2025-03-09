import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import Container from '~/components/Container'
import Section from '~/components/Section'
import { useState } from 'react'

const initial = [
  {
    checked: false,
    value: 'hut_thuoc',
    title: 'Hút thuốc'
  },
  {
    checked: false,
    value: 'phong_cao_tang',
    title: 'Phòng tầng cao'
  },
  {
    checked: false,
    value: 'tre_em_hieu_dong',
    title: 'Trẻ em hiếu động'
  },
  {
    checked: false,
    value: 'an_chay',
    title: 'Ăn chay'
  },
  {
    checked: false,
    value: 'co_nguoi_khuyet_tat',
    title: 'Có người khuyết tật'
  },
  {
    checked: false,
    value: 'phu_nu_co_thai',
    title: 'Phụ nữ có thai'
  }
]
const initial2 = [
  {
    value: '1',
    title: 'Thanh toán tại văn phòng Lửa Việt'
  },
  {
    value: '2',
    title: 'Thu tiền tại nhà'
  },
  {
    value: '3',
    title: 'Chuyển khoản'
  },
  {
    value: '4',
    title: 'Thanh toán online'
  }
]

const Booking = () => {
  const [luuY, setLuuY] = useState(initial)
  const [term, setTerm] = useState(false)
  const [paymentMethod, setMethod] = useState('')
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
            Đặt tour
          </Link>
        </div>
      </Container>
      <Section classNameTitle='!text-left' title='Tổng Quan Về Chuyến Đi'>
        <div className='grid lg:grid-cols-3 gap-x-20 mt-10'>
          <div className='md:col-span-2  text-[#222222]'>
            <div className='mb-10'>
              <p className='font-bold text-xl md:text-2xl mb-5'>Thông Tin Liên Lạc</p>
              <div className='bg-[#F6F8FA] p-6 grid md:grid-cols-2 gap-6'>
                <div className='text-sm '>
                  <label className='font-bold' htmlFor=''>
                    Họ và tên <span className='text-[#ED1B35]'>*</span>
                  </label>
                  <div className='p-4 bg-white mt-2'>
                    <input
                      type='text'
                      required
                      placeholder='Nhập Họ và tên'
                      className='placeholder:text-[#738ba3] w-full'
                    />
                  </div>
                </div>
                <div className='text-sm '>
                  <label className='font-bold' htmlFor=''>
                    Email <span className='text-[#ED1B35]'>*</span>
                  </label>
                  <div className='p-4 bg-white mt-2'>
                    <input
                      type='text'
                      required
                      placeholder='sample@gmail.com'
                      className='placeholder:text-[#738ba3] w-full'
                    />
                  </div>
                </div>
                <div className='text-sm '>
                  <label className='font-bold' htmlFor=''>
                    Số điện thoại <span className='text-[#ED1B35]'>*</span>
                  </label>
                  <div className='p-4 bg-white mt-2'>
                    <input
                      type='text'
                      required
                      placeholder='Nhập số điệnt thoại liên hệ'
                      className='placeholder:text-[#738ba3] w-full'
                    />
                  </div>
                </div>
                <div className='text-sm '>
                  <label className='font-bold' htmlFor=''>
                    Địa chỉ <span className='text-[#ED1B35]'>*</span>
                  </label>
                  <div className='p-4 bg-white mt-2'>
                    <input
                      type='text'
                      required
                      placeholder='Nhập địa chỉ liên hệ'
                      className='placeholder:text-[#738ba3] w-full'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-10'>
              <p className='font-bold text-xl md:text-2xl mb-5'>Hành Khách</p>
              <div className='grid md:grid-cols-2 gap-6'>
                <GroupCounter title='Người lớn' description='(Từ đủ 11 tuổi)' />
                <GroupCounter title='Trẻ em' description='(Từ 2 đến dưới 11 tuổi)' />
                <GroupCounter title='Em bé' description='(Dưới 2 tuổi)' />
              </div>
            </div>
            <div className='mb-10'>
              <p className='font-bold text-xl md:text-2xl mb-5'>Thông Tin Hành Khách</p>
              <p className='text-lg font-bold mb-3'>Quý khách có ghi chú lưu ý gì, hãy nói với chúng tôi!</p>
              <div className='bg-[#F6F8FA] p-6 grid grid-cols-2 md:grid-cols-3 gap-y-4'>
                {luuY.map((item, index) => (
                  <div key={index} className='flex items-center'>
                    <input
                      id={item.value}
                      name={item.value}
                      type='checkbox'
                      className='hidden'
                      checked={item.checked}
                      onChange={() => {
                        const newLuuY = [...luuY]
                        newLuuY[index].checked = !newLuuY[index].checked
                        setLuuY(newLuuY)
                      }}
                    />
                    <label htmlFor={item.value} className='pl-7 relative cursor-pointer text-sm'>
                      <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5  border border-[#013879] cursor-pointer'></div>
                      {item.title}
                      {item.checked && (
                        <div className={` bg-[#013879] size-3 top-1/2 -translate-y-1/2  absolute left-1`}></div>
                      )}
                    </label>
                  </div>
                ))}
                <div className='text-sm col-span-2 md:col-span-3 '>
                  <div className='p-4 bg-white mt-2'>
                    <textarea
                      rows={3}
                      required
                      placeholder='Ghi chú thêm'
                      className='placeholder:text-[#738ba3] w-full'
                    />
                  </div>
                </div>
              </div>
              <div className='bg-[#F6F8FA] p-6 mt-6 space-y-4'>
                <p className='text-sm mb-4'>
                  Bằng cách nhấp chuột vào nút "ĐỒNG Ý" dưới đây, Khách hàng đồng ý rằng các Điều kiện điều khoản này sẽ
                  được áp dụng. Vui lòng đọc kỹ Điều kiện điều khoản trước khi lựa chọn sử dụng dịch vụ của Lửa Việt
                  Tours.
                </p>
                <div className='flex items-center justify-center mt-4'>
                  <input id={'term'} name={'term'} type='checkbox' className='hidden' onChange={() => setTerm(!term)} />
                  <div>
                    <label htmlFor={'term'} className='pl-7 relative cursor-pointer text-sm'>
                      <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5  border border-[#013879] cursor-pointer'></div>
                      Tôi đã đọc và đồng ý với Điều khoản thanh toán
                      {term && <div className={` bg-[#013879] size-3 top-1/2 -translate-y-1/2  absolute left-1`}></div>}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className='font-bold text-xl md:text-2xl mb-5'>Phương Thức Thanh Toán</p>
              <div className='space-y-3'>
                {initial2.map((item, index) => (
                  <div key={index} className='flex items-center'>
                    <input
                      onChange={(e) => {
                        setMethod(e.target.value)
                      }}
                      id={`tour${index}`}
                      name={`tour`}
                      type='radio'
                      className='hidden'
                      value={item.value}
                    />
                    <label htmlFor={`tour${index}`} className={`pl-7 relative cursor-pointer`}>
                      <div className='absolute left-0 top-1/2 -translate-y-1/2 size-5 rounded-full border border-[#013879] cursor-pointer'></div>
                      {item.title}
                      <div
                        className={`${
                          paymentMethod === item.value ? 'block' : 'hidden'
                        } bg-[#013879] size-3 top-1/2 -translate-y-1/2 rounded-full absolute left-1`}
                      ></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className='p-[30px] text-[#222222] h-max sticky top-[80px] mt-10 md:mt-0'
            style={{ boxShadow: '10px 10px 36px rgba(0,0,0,0.08)' }}
          >
            <div className='flex  items-start gap-x-2 text-sm text-[#222222]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 flex-shrink-0 translate-y-0.5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z'
                />
              </svg>
              <p className='flex-shrink-0'>Mã tour:</p>
              <strong className='font-medium'>CHÂU ÂU 9N9Đ | PHÁP – LUXEMBOUNG – BỈ – HÀ LAN – ĐỨC</strong>
            </div>
            <p className='font-bold text-lg mt-3'>CHÂU ÂU 9N9Đ | PHÁP – LUXEMBOURG – BỈ – HÀ LAN – ĐỨC</p>
            <div className='flex items-center gap-x-2 text-sm mt-3 pb-3 border-b'>
              07/04/2025
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3' />
              </svg>
              15/04/2025
            </div>
            <div className='mt-5 space-y-2'>
              <div className='flex items-center justify-between'>
                <p className='text-sm'>Người lớn:</p>
                <div className='space-x-1'>
                  <span className='font-bold'>0</span>

                  <span className='text-xs font-semibold'>VNĐ</span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm'>Trẻ em:</p>
                <div className='space-x-1'>
                  <span className='font-bold'>0</span>

                  <span className='text-xs font-semibold'>VNĐ</span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm'>Em bé:</p>
                <div className='space-x-1'>
                  <span className='font-bold'>0</span>

                  <span className='text-xs font-semibold'>VNĐ</span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-bold'>Phòng đơn:</p>
                <div className='space-x-1'>
                  <span className='font-bold'>0</span>

                  <span className='text-xs font-semibold'>VNĐ</span>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between text-[#ED1B35] mt-8'>
              <p className=' font-bold'>Tổng cộng:</p>
              <div className='space-x-1'>
                <span className='font-bold'>0</span>

                <span className='text-sm font-semibold'>VNĐ</span>
              </div>
            </div>
            <Button className='py-4  mt-5 text-xl w-full'>Đặt ngay</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
const GroupCounter = ({ title, description }: { title: string; description: string }) => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='border p-6 flex items-center justify-between'>
      <div className='text-sm'>
        <p className='font-semibold'>{title}</p>
        <p className='text-[#B6B6B6]'>{description}</p>
      </div>
      <div className='flex items-center text-[#013879]'>
        <button
          className='border-2 border-[#013879] size-[22px] flex items-center justify-center rounded-md'
          onClick={decreaseCount}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
          </svg>
        </button>
        <div className='flex items-center justify-center w-[63px] h-[30px] font-semibold text-2xl leading-relaxed'>
          {count}
        </div>
        <button
          className='border-2 border-[#013879] size-[22px] flex items-center justify-center rounded-md'
          onClick={increaseCount}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default Booking
