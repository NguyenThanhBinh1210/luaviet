/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '~/components/Button'
import Container from '~/components/Container'
import Section from '~/components/Section'
import { tourApi } from '~/apis/tour.api'
import { getLastSegment } from './DuLich'
import { useQuery } from 'react-query'
import chatApi from '~/apis/chat.api'
import zalo from '~/assets/zalo.svg'
import whatsapp from '~/assets/whatsapp.svg'
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
    <div className="fixed right-4 bottom-20 flex flex-col gap-3 z-50">
      {socialLinks.map((link) => {
        if (link.name === "Facebook") {
          return (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1877f2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                </svg>
              </div>
            </a>
          )
        } else if (link.name === "Zalo") {
          return (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0068ff]">
                <img src={zalo} alt="Zalo" />
              </div>
            </a>
          )
        } else if (link.name === "Whatsapp") {
          return (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={whatsapp} alt="WhatsApp" />
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
  );
};
const TourDetail = () => {
  const location = useLocation()
  const [tour, setTour] = useState<any>()
  const [showContactDropdown, setShowContactDropdown] = useState(false)

  useQuery({
    queryKey: ['tour', getLastSegment(location.pathname)],
    queryFn: async () => {
      const response = await tourApi.getTour(getLastSegment(location.pathname))
      setTour(response.data.data.tour)
    }
  })

  // Lấy danh sách các liên kết xã hội
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])
  console.log("socialLinks",socialLinks);
  useQuery({
    queryKey: ['socialLinks1'],
    queryFn: async () => {
      const response = await chatApi.getChats()
      console.log("response",response);
      if (response.status === 200) {
        setSocialLinks(response.data.data)
      }
      return response
    }
  })

  return (
    <div>
      <SocialFloatingButtons />
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
          <Link to={`/du-lich/du-lich-${tour?.categoryIdLevel1?.slug}`} className='text-[13px]'>
            Du Lịch {tour?.categoryIdLevel1?.name}
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
          <Link to={`/du-lich/du-lich-${tour?.categoryIdLevel1?.slug}/${tour?.categoryIdLevel2?.slug}`} className='text-[13px]'>
            {tour?.categoryIdLevel2?.name}
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
            {tour?.title}
          </Link>
        </div>
      </Container>
      <Section className='text-[#222222]'>
        <div className='flex flex-col md:flex-row gap-x-24 justify-between'>
          <div>
            <h1 className='font-bold uppercase text-[22px] md:text-[30px] my-4'>
              {tour?.title}
            </h1>
          </div>
          <div className='flex flex-col justify-end gap-y-3 mt-4 md:mt-0 relative'>
            <Button
              className='py-4'
              onClick={() => setShowContactDropdown(!showContactDropdown)}
            >
              Liên hệ ngay
            </Button>

            {/* Dropdown menu */}
            {showContactDropdown && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 border overflow-hidden z-50">
                <div className="py-1 h-14 grid grid-cols-3 gap-2">
                  {/* Phone contact */}
                  {/* <a
                    href="tel:1900 636 732"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-all"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#e60039]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <span>Gọi điện: 1900 636 732</span>
                  </a> */}

                  {/* Social links - Render directly instead of using renderSocialButton */}
                  {socialLinks.map((link) => {
                    if (link.name === "Facebook") {
                      console.log(link);
                      return (
                        <a
                          key={link.id}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-all justify-center"
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1877f2]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                            </svg>
                          </div>
                          {/* <span>Facebook</span> */}
                        </a>
                      )
                    } else if (link.name === "Zalo") {
                      return (
                        <a
                          key={link.id}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-all justify-center"
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0068ff]">
                            <img src={zalo} alt="Zalo" className="w-5 h-5" />
                          </div>
                          {/* <span>Zalo</span> */}
                        </a>
                      )
                    } else if (link.name === "Whatsapp") {
                      return (
                        <a
                          key={link.id}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-all justify-center"
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
                          </div>
                          {/* <span>WhatsApp</span> */}
                        </a>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='grid grid-cols-4 gap-1 mt-6 md:mt-10'>
          <div className='col-span-4 md:col-span-2 md:row-span-2'>
            <img src={tour?.images[0] || ''} alt='img1' className='aspect-[16/12] object-cover' />
          </div>
          <div>
            <img src={tour?.images[1] || ''} alt='img2' className='aspect-[16/12] object-cover' />
          </div>
          <div>
            <img src={tour?.images[2] || ''} alt='img3' className='aspect-[16/12] object-cover' />
          </div>
          <div>
            <img src={tour?.images[3] || ''} alt='img4' className='aspect-[16/12] object-cover' />
          </div>
          <div>
            <img src={tour?.images[4] || ''} alt='img5' className='aspect-[16/12] object-cover' />
          </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-x-20 mt-10'>
          <div className='md:col-span-2 ' dangerouslySetInnerHTML={{ __html: tour?.content }}>

          </div>
          {/* <div
            className='p-[30px] text-[#222222] h-max sticky top-[80px]'
            style={{ boxShadow: '10px 10px 36px rgba(0,0,0,0.08)' }}
          >
            <p className='text-lg font-bold mb-3'>Thông Tin Cơ Bản</p>
            <ul className='space-y-2'>
              <li className='relative pl-3'>
                Khởi hành: -----
                <span className='size-1 bg-[#222222] top-1/2 -translate-y-1/2 left-0 absolute'></span>
              </li>
              <li className='relative pl-3'>
                Giờ đi: -----
                <span className='size-1 bg-[#222222] top-1/2 -translate-y-1/2 left-0 absolute'></span>
              </li>
              <li className='relative pl-3'>
                Tập trung: -----
                <span className='size-1 bg-[#222222] top-1/2 -translate-y-1/2 left-0 absolute'></span>
              </li>
              <li className='relative pl-3'>
                Thời gian: -----
                <span className='size-1 bg-[#222222] top-1/2 -translate-y-1/2 left-0 absolute'></span>
              </li>
            </ul>
            <div className='flex flex-col justify-end gap-y-3 mt-4 '>
              <a href="tel:1900636732">
                <Button
                  className='py-4 w-full'
                >
                  Liên hệ ngay
                </Button>
              </a>
            </div>
          </div> */}
        </div>
      </Section >

    </div >
  )
}
// const Accodion = ({ title, children }: { title: string; children: React.ReactNode }) => {
//   const [show, setShow] = useState(false)
//   return (
//     <div className='border-b md:border-b-0 mb-[28px]'>
//       <div
//         onClick={() => setShow(!show)}
//         className='flex justify-between items-center text-[#013879] cursor-pointer pb-[20px]'
//       >
//         <p className=' font-bold text-[20px] md:text-[24px]'>{title}</p>
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           strokeWidth={2}
//           stroke='currentColor'
//           className={`size-5 transition-all md:hidden ${show ? 'rotate-180' : ''}`}
//         >
//           <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
//         </svg>
//       </div>
//       <div
//         className={` mb-4 transition-all ${show ? 'max-h-[1000px] ' : 'max-h-0 md:max-h-[1000px] overflow-hidden mb-0'
//           }`}
//       >
//         <>{children}</>
//       </div>
//     </div>
//   )
// }
// const Accodion2 = ({ title, children }: { title: string; children: React.ReactNode }) => {
//   const [show, setShow] = useState(false)
//   const contentRef = useRef<any>(null) // Tạo ref để tham chiếu đến element

//   return (
//     <div className='border  mb-4'>
//       <div onClick={() => setShow(!show)} className='flex justify-between items-center  cursor-pointer p-[20px]'>
//         <div className='flex items-center gap-x-3 '>
//           <div className='bg-[#222222] pl-1 pr-2 text-white font-semibold relative'>
//             Ngày 1
//             <div className='absolute border-[5px] border-transparent border-l-[#222222] top-1/2 -translate-y-1/2 left-full'></div>
//           </div>
//           <p className=' font-bold text-lg'>{title}</p>
//         </div>
//         <svg
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 24 24'
//           strokeWidth={2}
//           stroke='currentColor'
//           className={`size-5 transition-all  ${show ? 'rotate-180' : ''}`}
//         >
//           <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
//         </svg>
//       </div>
//       <div
//         className={`relative mb-4 transition-all pr-[20px] pl-[100px]   ${show ? 'max-h-[1000px] ' : 'max-h-0 overflow-hidden  mb-0'
//           }`}
//       >
//         <>
//           <div ref={contentRef} className='mb-3'>
//             {children}
//           </div>
//           <div
//             style={{ height: contentRef?.current?.clientHeight + 10 }}
//             className='absolute -top-[15px] left-[53px] w-[1px] border-l border-black border-dashed'
//           >
//             <div className='bg-[#222222] absolute top-full left-0 -translate-x-1 z-10 size-1.5 rounded-s-full'></div>
//           </div>
//         </>
//       </div>
//     </div>
//   )
// }
export default TourDetail
