/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import Container from '~/components/Container'


import Section from '~/components/Section'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { galleryApi } from '~/apis/gallery.ai'
import { useQuery } from 'react-query'

const TuyenDung = () => {
  const [gallery, setGallery] = useState<any>([])
  const { t } = useTranslation()
  const currentLanguage = localStorage.getItem('app_language') || 'vi'
  useQuery({
    queryKey: ['gallery', currentLanguage],
    queryFn: async () => {
      const response = await galleryApi.getGallerys(currentLanguage)
      if (response.data.data) {
        setGallery(response.data.data.data)
        return response.data.data
      }
      return []
    }
  })

  return (
    <div>
      <Container>
        <div className=' items-center gap-1 mt-[52px]  hidden md:flex mb-10'>
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
          <Link to='/gallery' className='text-[13px]'>
            {t('header.display')}
          </Link>
        </div>
      </Container>

      <Section title='Hình ảnh các đoàn tour' className='pb-10 '>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5  md:gap-10 gap-y-20 md:gap-y-28 justify-center mt-16'>
          {gallery.map((item: any, index: number) => (
            <ImgGallery item={item} key={index} />
          ))}
        </div>
      </Section>
      {/*
      <Section title='7 Nguyên Tắc Của Hùng Anh' bg='bg-[#F6F8FA]' className='pb-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2  md:gap-5 justify-center mt-16'>
          {data.map((item, index) => (
            <div key={index} className=' bg-white flex flex-col items-center justify-center px-2 py-3 gap-y-5'>
              <img src={item.img} alt={item.title} className=' w-[100px] object-cover' />
              <p className='text-[#222222] text-sm md:text-lg text-center px-2'>{item.title}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section bg='bg-[#D4F1FF]'>
        <div className='flex flex-col md:flex-row md:gap-x-20 gap-8'>
          <img src={img9} alt='img9' className=' w-full object-cover md:w-[416px]' />
          <div className='flex-1'>
            <h2 className='text-[28px] md:text-[40px] font-bold text-[#013879] mb-5'>
              Các Chế Độ - Chính Sách - Phúc Lợi
            </h2>
            <div className='space-y-1'>
              <p className='flex items-start gap-x-2 text-[15px] md:text-[16px] text-[#222222]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 flex-shrink-0 translate-y-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>
                Lương cơ bản và Thưởng hấp dẫn dựa trên nổ lực của bản thân theo KPI.
              </p>
              <p className='flex items-start gap-x-2 text-[15px] md:text-[16px] text-[#222222]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 flex-shrink-0 translate-y-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>
                Được đào tạo kỹ năng, nghiệp vụ chuyên môn.
              </p>
              <p className='flex items-start gap-x-2 text-[15px] md:text-[16px] text-[#222222]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 flex-shrink-0 translate-y-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>
                Hỗ trợ chi phí điện thoại và gửi xe.
              </p>
              <p className='flex items-start gap-x-2 text-[15px] md:text-[16px] text-[#222222]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 flex-shrink-0 translate-y-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>
                Cấp laptop, điện thoại, phần mềm có bản quyền phục vụ công việc.
              </p>
              <p className='flex items-start gap-x-2 text-[15px] md:text-[16px] text-[#222222]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 flex-shrink-0 translate-y-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>{' '}
                Chính sách hỗ trợ nhân viên và người thân đi du lịch.
              </p>
              <p className='flex items-start gap-x-2 text-[15px] md:text-[16px] text-[#222222]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 flex-shrink-0 translate-y-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>{' '}
                Tham gia huấn luyện nội bộ hàng năm.
              </p>
              <p className='flex items-start gap-x-2 text-[15px] md:text-[16px] text-[#222222]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 flex-shrink-0 translate-y-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>{' '}
                Được hưởng các chính sách chăm sóc nhân viên của công ty (sinh nhật hàng tháng, ốm đau, cưới hỏi,…)
              </p>
              <p className='flex items-start gap-x-2 text-[15px] md:text-[16px] text-[#222222]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 flex-shrink-0 translate-y-0.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z'
                  />
                </svg>{' '}
                Các chế độ BHXH, BHYT, BHTN theo Luật định.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section title='Form Tuyển Dụng' bg='bg-[#F6F8FA]'>
        <form className='mt-[30px] md:mt-[100px] max-w-[815px] mx-auto space-y-6'>
          <div className='md:flex md:items-center'>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='name'>
              Họ và tên <span className='text-[#FF0000]'>*</span>
            </label>
            <input
              className='p-[18px] bg-white w-full mt-1.5 md:mt-0'
              type='text'
              id='name'
              placeholder='Nhập họ và tên'
            />
          </div>
          <div className='md:flex md:items-center'>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='name'>
              Email <span className='text-[#FF0000]'>*</span>
            </label>
            <input className='p-[18px] bg-white w-full mt-1.5 md:mt-0' type='text' id='name' placeholder='Nhập email' />
          </div>
          <div className='md:flex md:items-center'>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='name'>
              Số điện thoại <span className='text-[#FF0000]'>*</span>
            </label>
            <input
              className='p-[18px] bg-white w-full mt-1.5 md:mt-0'
              type='text'
              id='name'
              placeholder='Nhập Số điện thoại'
            />
          </div>
          <div className='md:flex '>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='name'>
              Nội dung liên hệ <span className='text-[#FF0000]'>*</span>
            </label>
            <textarea
              rows={5}
              className='p-[18px] bg-white w-full mt-1.5 md:mt-0'
              id='name'
              placeholder='Nhập nội dung liên hệ'
            />
          </div>
          <Button className='py-4 mx-auto mt-10'>Ứng tuyển ngay</Button>
        </form>
      </Section>
      <Section title='Thông Tin Tuyển Dụng'>
        <div className='mt-12 space-y-2'>
          <Accodion title='Nhân viên Kinh doanh (TPHCM/ Hà Nội/ Đà Nẵng/ Buôn Ma Thuột)' />
          <Accodion title='Hướng dẫn viên tiếng Nhật (TPHCM)' />
          <Accodion title='Nhân viên Kế toán (TPHCM)' />
        </div>
      </Section>
      <Section title='Quy Trình Tuyển Dụng'>
        <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-14 gap-y-10'>
          <div className='bg-[#F6F8FA] p-4 relative'>
            <div className='absolute -top-[18px] left-1/2 -translate-x-1/2   bg-[#ED1B35] rounded-full font-bold text-white md:text-lg px-10 py-1 flex justify-center items-center'>
              Bước 1
            </div>
            <div className='absolute top-[calc(100%-10px)] right-1/2 translate-x-1/2 md:translate-x-0 rotate-90 md:rotate-0 md:-right-10 md:top-1/2 md:-translate-y-1/2'>
              <svg xmlns='http://www.w3.org/2000/svg' width='22' height='23' viewBox='0 0 22 23' fill='none'>
                <g clip-path='url(#clip0_22_12262)'>
                  <path
                    d='M4.53118 4.08008H0L6.16 11.5001L0 18.9202H4.53118L10.6912 11.5001L4.53118 4.08008Z'
                    fill='#0394D9'
                  />
                  <path d='M12.4513 0H5.42773L14.9766 11.5L5.42773 23H12.4513L22.0002 11.5L12.4513 0Z' fill='#0394D9' />
                </g>
                <defs>
                  <clipPath id='clip0_22_12262'>
                    <rect width='22' height='23' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='text-lg text-[#222222] pt-[28px] pb-5 px-2.5 flex items-center gap-x-6'>
              <img src={img10} alt='img8' className='w-[98px]' />
              <p>Đăng ký - nộp hồ sơ qua email hoặc trực tiếp tại công ty</p>
            </div>
          </div>
          <div className='bg-[#F6F8FA] p-4 relative'>
            <div className='absolute -top-[18px] left-1/2 -translate-x-1/2   bg-[#ED1B35] rounded-full font-bold text-white md:text-lg px-10 py-1 flex justify-center items-center'>
              Bước 2
            </div>
            <div className='absolute top-[calc(100%-10px)] right-1/2 translate-x-1/2 md:translate-x-0 rotate-90 md:rotate-0 md:-right-10 md:top-1/2 md:-translate-y-1/2'>
              <svg xmlns='http://www.w3.org/2000/svg' width='22' height='23' viewBox='0 0 22 23' fill='none'>
                <g clip-path='url(#clip0_22_12262)'>
                  <path
                    d='M4.53118 4.08008H0L6.16 11.5001L0 18.9202H4.53118L10.6912 11.5001L4.53118 4.08008Z'
                    fill='#0394D9'
                  />
                  <path d='M12.4513 0H5.42773L14.9766 11.5L5.42773 23H12.4513L22.0002 11.5L12.4513 0Z' fill='#0394D9' />
                </g>
                <defs>
                  <clipPath id='clip0_22_12262'>
                    <rect width='22' height='23' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='text-lg text-[#222222] pt-[28px] pb-5 px-2.5 flex items-center gap-x-6'>
              <img src={img11} alt='img8' className='w-[98px]' />
              <p>Thực hiện các bài kiểm tra</p>
            </div>
          </div>
          <div className='bg-[#F6F8FA] p-4 relative'>
            <div className='absolute -top-[18px] left-1/2 -translate-x-1/2   bg-[#ED1B35] rounded-full font-bold text-white md:text-lg px-10 py-1 flex justify-center items-center'>
              Bước 3
            </div>

            <div className='text-lg text-[#222222] pt-[28px] pb-5 px-2.5 flex items-center gap-x-6'>
              <img src={img12} alt='img12' className='w-[98px]' />
              <p>Phỏng vấn trực tiếp</p>
            </div>
          </div>
        </div>
      </Section>
      */}
    </div>
  )
}

const ImgGallery = ({ item, index }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? item.images.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === item.images.length - 1 ? 0 : prevIndex + 1))
  }
  const [show, isShow] = useState(false)
  const handleShow = () => {
    isShow(!show)
  }
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }
    return date.toLocaleString('vi-VN', options)
  }
  return (
    <>
      <div key={index} className=' bg-white flex flex-col  relative '>
        <img
          onClick={handleShow}
          src={item.images[currentIndex]}
          alt={'https://www.luavietours.com/assets/img/gioi-thieu/img_4.jpg'}
          className=' object-cover aspect-square cursor-pointer'
        />

        <div className='px-4 py-2 md:py-5 flex flex-col justify-between h-max absolute -bottom-12 md:-bottom-20 left-1/2 -translate-x-1/2 right-0 bg-white w-[90%]'>
          <div className='w-full  text-[#013879]  font-semibold flex justify-between mb-1'>{item.title}</div>
          <div className='w-full  text-[#333333]  font-semibold text-xs flex justify-between mb-3'>
            {formatDate(item.travelDate)}
            <div className='text-[#013879]'>{item.categoryIdLevel3.name}</div>
          </div>
          <p className='text-[#222222] text-sm md:text-base line-clamp-3 min-h-16'>{item.content}</p>
        </div>
      </div>
      <div
        onClick={() => {
          handleShow()
        }}
        className={`${show ? 'block' : 'hidden'} inset-0 fixed bg-[#44444480] z-50 flex items-center justify-center`}
      >
        <div className='carousel-container' onClick={(e) => e.stopPropagation()}>
          <div className='carousel'>
            <div className='carousel-item'>
              <img
                src={item.images[currentIndex]}
                alt='carousel'
                className='carousel-image aspect-square md:aspect-[16/11] w-full object-cover'
              />
            </div>
          </div>
          <div className='carousel-controls'>
            <button className='carousel-prev' onClick={prevSlide}>
              <svg className='w-5 h-5' fill='none' viewBox='0 0 14 10' xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 5H1m0 0 4 4M1 5l4-4'
                />
              </svg>
            </button>
            <button className='carousel-next' onClick={nextSlide}>
              <svg className='w-5 h-5' fill='none' viewBox='0 0 14 10' xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TuyenDung
