/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'

const TourLink = ({
  index,
  link,
  sale,
  type,
  news,
  item
}: {
  index: number
  link: string
  sale?: boolean
  news?: boolean
  item: any
  type?: 'standard' | 'high' | 'save'
}) => {
  return (
    <Link to={link} key={index}>
      <div className='cursor-pointer'>
        <div className='overflow-hidden relative'>
          <img
            src={item?.images[0]}
            alt='news1'
            className='w-full h-full aspect-[9/7] object-cover hover:scale-110 transition-all duration-300'
          />
          <div className='flex gap-x-2 items-center absolute top-2 right-2'>
            {news && (
              <div className='rounded-tr-md rounded-bl-md   bg-[#e6e328]  text-black text-xs gap-x-1  px-2 md:px-3 py-0.5  md:font-medium md:py-1  flex items-center justify-center'>
                New
              </div>
            )}
            {sale && (
              <div className='rounded-tr-md rounded-bl-md   bg-[#ED1B35] text-white text-xs gap-x-1  px-2 md:px-3 py-0.5  md:font-medium md:py-1  flex items-center justify-center'>
                Khuyến mãi
              </div>
            )}
          </div>
          {type === 'save' && (
            <div className='absolute bottom-2 left-0  bg-[#2faf23b3] text-white text-xs gap-x-1  px-2 md:px-3 py-0.5  md:text-base  flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='size-5'
              >
                <path d='M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17' />
                <path d='m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9' />
                <path d='m2 16 6 6' />
                <circle cx='16' cy='9' r='2.9' />
                <circle cx='6' cy='5' r='3' />
              </svg>
              Tiết kiệm
            </div>
          )}
          {type === 'standard' && (
            <div className='absolute bottom-2 left-0  bg-[#0394d9b3] text-white text-xs gap-x-1  px-2 md:px-3 py-0.5  md:text-base  flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='size-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                />
              </svg>
              Tiêu chuẩn
            </div>
          )}
          {type === 'high' && (
            <div className='absolute bottom-2 left-0  bg-[#ffb800b3] text-white text-xs gap-x-1  px-2 md:px-3 py-0.5  md:text-base  flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-gem size-4'
              >
                <path d='M6 3h12l4 6-10 13L2 9Z' />
                <path d='M11 3 8 9l4 13 4-13-3-6' />
                <path d='M2 9h20' />
              </svg>
              Cao cấp
            </div>
          )}
        </div>
        <div>
          <p className='uppercase font-medium mt-3 mb-2'>{item?.title}</p>

          <div className='flex items-center gap-2 text-gray-600 mb-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
              />
            </svg>

            <span className='text-sm'>Nơi khởi hành:</span>
            <span className='font-medium text-sm text-black'>Tuỳ chọn</span>
          </div>

          <div className='flex items-center gap-2 text-gray-600 mb-1'>
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

            <span className='text-sm'>Hãng bay:</span>
            <span className='font-medium text-sm text-black'>Tuỳ chọn</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 mb-1 flex-wrap'>
            <span className='text-sm'>Ngày đi:</span>
            <span className='font-medium text-sm text-gray-600'>Liên hệ</span>
          </div>
          <div className='text-[#ED1B35]  font-medium text-[22px] flex gap-x-1 end mt-3'>
            <p className=' font-bold'>Liên hệ ngay</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TourLink
