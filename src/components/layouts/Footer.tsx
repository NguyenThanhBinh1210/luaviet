/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
// import certification1 from '~/assets/certifi1.png'
// import certification2 from '~/assets/certifi2.png'
import Button from '../Button'
import zalo from '~/assets/zalo.svg'
import whatsapp from '~/assets/whatsapp.svg'
import { useQuery } from 'react-query'
import chatApi from '~/apis/chat.api'
import { useMemo, useState } from 'react'
import categoryApi from '~/apis/category.api'

// Add this interface near the top of the file
interface SocialLink {
  id: string | number
  name: string
  link: string
}

const SocialFloatingButtons = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])

  useQuery({
    queryKey: ['socialLinks'],
    queryFn: async () => {
      const response = await chatApi.getChats()
      if (response.status === 200) {
        setSocialLinks(response.data.data)
      }
      return response
    }
  })

  return (
    <div className='fixed right-4 bottom-20 flex flex-col gap-3 z-50'>
      {socialLinks.map((link) => {
        if (link.name === 'Facebook') {
          return (
            <a
              key={link.id}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all'
            >
              <div className='w-12 h-12 rounded-full flex items-center justify-center bg-[#1877f2]'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' fill='white'>
                  <path d='M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z' />
                </svg>
              </div>
            </a>
          )
        } else if (link.name === 'Zalo') {
          return (
            <a
              key={link.id}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all'
            >
              <div className='w-12 h-12 rounded-full flex items-center justify-center bg-[#0068ff]'>
                <img src={zalo} alt='Zalo' />
              </div>
            </a>
          )
        } else if (link.name === 'Whatsapp') {
          return (
            <a
              key={link.id}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all'
            >
              <div className='w-12 h-12 rounded-full flex items-center justify-center'>
                <img src={whatsapp} alt='WhatsApp' />
              </div>
            </a>
          )
        }
        return null
      })}

      {/* Phone Button - Static */}
      {/* <a
        href="tel:1900 6420"
        className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e60039]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </div>
      </a> */}
    </div>
  )
}

const Footer = () => {
  const [categories, setCategories] = useState<any>()
  const currentLanguage = localStorage.getItem('app_language') || 'vi'

  useQuery({
    queryKey: ['categories1', currentLanguage], // Thêm currentLanguage vào queryKey để re-fetch khi ngôn ngữ thay đổi
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
  return (
    <div className='bg-[#013879] pt-14 text-white relative'>
      <SocialFloatingButtons />
      <div className='px-4 max-w-[1262px] mx-auto'>
        <div className='md:grid md:grid-cols-12'>
          <div className='col-span-7 flex flex-wrap gap-y-12'>
            <div className='w-full grid md:grid-cols-2 gap-y-4'>
              {organizedCategories.map((cat: any) => (
                <div key={cat._id}>
                  <Link
                    to={`/du-lich/du-lich-${cat.slug}`}
                    state={{ title: `Du Lịch ${cat.name}`, type: `du-lich-${cat.slug}` }}
                    className='font-semibold mb-3 block'
                  >
                    {cat.name}
                  </Link>
                  <div className='flex flex-wrap  text-[13px] gap-3'>
                    {cat.subCategories.map((subCat: any) => (
                      <div className='w-1/3 max-w-[104px]'>
                        <Link
                          to={`/du-lich/du-lich-${cat.slug}/${subCat.slug}`}
                          state={{
                            title: `Du Lịch ${subCat.name}`,
                            local: subCat.name,
                            type: `du-lich-${subCat.slug}`
                          }}
                          className='font-semibold mb-2 block'
                        >
                          {subCat.name}
                        </Link>
                        <div className='flex flex-col gap-1'>
                          {subCat.subCategories.map((subSubCat: any) => (
                            <Link
                              to={`/du-lich/du-lich-${cat.slug}/${subCat.slug}/${subSubCat.slug}`}
                              state={{
                                title: `Du lịch ${subCat.name}`,
                                local: subSubCat.name,
                                type: `du-lich-${subCat.slug}`
                              }}
                            >
                              {subSubCat.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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

                        <p>HungAnh International Travel Co.,Ltd
                          No.9 Moc Bai 9 Street, Danang City, Vietnam
                        </p>
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

                        <p>+84 968272768</p>
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

                        <p>gm.hunganhtravel@gmail.com</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            {/* <div className='w-full md:w-[42%] space-y-4'>
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
            </div> */}
          </div>
          <div className='col-span-5'>
            <div>
              <p className='font-semibold mb-3'>Travel License</p>
              <div className='flex gap-2 '>
                {/* <div className='w-[195px]'>
                  <img src={certification1} alt='certification' />
                  <img src={certification2} alt='certification' />
                </div> */}
                <div className='flex-1 text-xs space-y-2'>
                  <p>
                    No: 79-042/ 2019/ TCDL – GPLHQT
                  </p>
                  {/* <p>Đăng ký thay đổi lần thứ: 15, ngày 07 tháng 06 năm 2022.</p>
                  <p>Số giấy phép kinh doanh lữ hành quốc tế: 79 -228 /20 16TCDL - GP LHQT cấp ngày 28/07/2016.</p>
                  <p>Số D-U-N-S doanh nghiệp: 555256961</p> */}
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
                +84 968272768
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#222] py-2.5 mt-8 text-[10px] text-white text-center'>
        Copyright © 1999-2023 Công ty TNHH Du Lịch Hùng Anh
      </div>
    </div>
  )
}

export default Footer
