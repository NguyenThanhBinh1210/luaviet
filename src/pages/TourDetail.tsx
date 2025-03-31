/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '~/components/Button'
// import Container from '~/components/Container'
import Section from '~/components/Section'
import { tourApi } from '~/apis/tour.api'
import { getLastSegment } from './DuLich'
import { useQuery } from 'react-query'
import chatApi from '~/apis/chat.api'
import zalo from '~/assets/zalo.svg'
import whatsapp from '~/assets/whatsapp.svg'
import '~/styles/index.css'
import { useTranslation } from 'react-i18next'

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
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#25D366]">
                <img src={whatsapp} alt="WhatsApp" />
              </div>
            </a>
          )
        }
        return null
      })}
    </div>
  )
}

const TourDetail = () => {
  const location = useLocation()
  const [tour, setTour] = useState<any>()
  const { t } = useTranslation()
  const currentLanguage = localStorage.getItem('app_language') || 'vi'
  
  const slug = getLastSegment(location.pathname)
  
  useQuery({
    queryKey: ['tour-detail', slug, currentLanguage],
    queryFn: async () => {
      const response = await tourApi.getTour(slug, {
        languageCode: currentLanguage
      })
      setTour(response.data.data)
      return response.data.data
    }
  })

  return (
    <div>
      <SocialFloatingButtons />
      <div className='px-4 max-w-[1262px] mx-auto'>
        <div className=' items-center gap-1 mt-[52px] hidden md:flex'>
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
          <Link to='/du-lich'>
            <p className='text-[13px]'>{t('tourDetail.breadcrumbs.travel')}</p>
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
          <p className='text-[13px]'>{tour?.name}</p>
        </div>
      </div>
      <Section>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10'>
          <div className='md:col-span-2'>
            <div className=''>
              <p className='font-bold text-[28px] md:text-[40px] text-[#013879]'>{tour?.name}</p>
              <div className='mt-[30px]'>
                <img src={tour?.thumbnail} alt='tour' className='w-full h-full object-cover' />
              </div>
              <div className='mt-[30px]'>
                <div className='flex flex-col gap-y-5'>
                  <div>
                    <p className='font-bold text-lg pb-5 border-b text-[#013879]'>{t('tourDetail.sections.overview')}</p>
                    <div className='mt-5 grid grid-cols-2 gap-y-5'>
                      <div className='flex items-center gap-x-3'>
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
                            d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
                          />
                        </svg>
                        <div>
                          <p className='text-[#8B8B8B] text-[13px]'>{t('tourDetail.details.duration')}</p>
                          <p className='font-medium'>{tour?.duration}</p>
                        </div>
                      </div>
                      <div className='flex items-center gap-x-3'>
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
                            d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                          />
                        </svg>
                        <div>
                          <p className='text-[#8B8B8B] text-[13px]'>{t('tourDetail.details.destination')}</p>
                          <p className='font-medium'>{tour?.destination}</p>
                        </div>
                      </div>
                      <div className='flex items-center gap-x-3'>
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
                            d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                          />
                        </svg>
                        <div>
                          <p className='text-[#8B8B8B] text-[13px]'>{t('tourDetail.details.tourGuide')}</p>
                          <p className='font-medium'>{tour?.tourGuide}</p>
                        </div>
                      </div>
                      <div className='flex items-center gap-x-3'>
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
                            d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z'
                          />
                        </svg>
                        <div>
                          <p className='text-[#8B8B8B] text-[13px]'>{t('tourDetail.details.accommodation')}</p>
                          <p className='font-medium'>{tour?.accommodation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='font-bold text-lg pb-5 border-b text-[#013879]'>{t('tourDetail.sections.description')}</p>
                    <div className='mt-5'>
                      <div dangerouslySetInnerHTML={{ __html: tour?.description || '' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className='font-bold text-lg pb-5 border-b text-[#013879]'>{t('tourDetail.sections.itinerary')}</p>
                    <div className='mt-5'>
                      <div dangerouslySetInnerHTML={{ __html: tour?.itinerary || '' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className='font-bold text-lg pb-5 border-b text-[#013879]'>{t('tourDetail.sections.included')}</p>
                    <div className='mt-5'>
                      <div dangerouslySetInnerHTML={{ __html: tour?.included || '' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className='font-bold text-lg pb-5 border-b text-[#013879]'>{t('tourDetail.sections.excluded')}</p>
                    <div className='mt-5'>
                      <div dangerouslySetInnerHTML={{ __html: tour?.excluded || '' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className='font-bold text-lg pb-5 border-b text-[#013879]'>{t('tourDetail.sections.notes')}</p>
                    <div className='mt-5'>
                      <div dangerouslySetInnerHTML={{ __html: tour?.notes || '' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='sticky top-[100px] border p-5 mt-[30px] md:mt-[100px]'>
              <p className='font-bold text-lg pb-5 border-b text-[#013879]'>{t('tourDetail.booking.title')}</p>
              <div className='mt-5'>
                <div className='flex justify-between items-center'>
                  <p className='text-[#8B8B8B] text-[13px]'>{t('tourDetail.booking.price')}</p>
                  <p className='font-bold text-[#013879] text-[20px]'>{tour?.price?.toLocaleString('vi-VN')} VND</p>
                </div>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-[#8B8B8B] text-[13px]'>{t('tourDetail.booking.departureDate')}</p>
                  <p className='font-medium'>{tour?.departureDate}</p>
                </div>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-[#8B8B8B] text-[13px]'>{t('tourDetail.booking.returnDate')}</p>
                  <p className='font-medium'>{tour?.returnDate}</p>
                </div>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-[#8B8B8B] text-[13px]'>{t('tourDetail.booking.availableSeats')}</p>
                  <p className='font-medium'>{tour?.availableSeats}</p>
                </div>
                <div className='mt-5'>
                  <Button to={`/booking/${tour?.slug}`} className='w-full'>
                    {t('tourDetail.booking.bookNow')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default TourDetail
