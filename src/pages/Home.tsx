/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import europe from '~/assets/canh-dong-hoa-tulip-ha-lan.jpg'
import australia from '~/assets/nha-hat-con-so-mua-thu.jpg'
import korea from '~/assets/thap-namsan-han-quoc.jpg'
import japan from '~/assets/osaka-mua-hoa-anh-dao.jpg'

import banner1 from '~/assets/banner-website-han-quoc-pc.jpg'
import banner2 from '~/assets/banner-website-dai-loan-pc.jpg'
import banner3 from '~/assets/banner-website-chau-au-pc.png'
import banner11 from '~/assets/banner-website-han-quoc-sp-1024x573.jpg'
import banner22 from '~/assets/banner-website-dai-loan-sp-1024x573.jpg'
import banner33 from '~/assets/banner-website-chau-au-sp-1024x573.png'
import TourLink from '~/components/TourLink'
import { useState, useEffect } from 'react'
import { tourApi } from '~/apis/tour.api'
import { useQuery } from 'react-query'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [tours, setTours] = useState<any>()
  console.log(tours);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])
  useQuery({
    queryKey: ['tour-all'],
    queryFn: async () => {
      const response = await tourApi.getTours()
      const data = response.data.data.filter((item: any) => item.isPopular === true)
      setTours(data)
    }
  })
  return (
    <div>
      <div>
        {currentImageIndex === 0 && (
          <>
            <img src={banner1} alt='banner' className='fade-in  object-cover hidden lg:block' />
            <img src={banner11} alt='banner' className='fade-in  object-cover lg:hidden' />
          </>
        )}
        {currentImageIndex === 1 && (
          <>
            <img src={banner2} alt='banner' className='fade-in  object-cover hidden lg:block' />
            <img src={banner22} alt='banner' className='fade-in  object-cover lg:hidden' />
          </>
        )}
        {currentImageIndex === 2 && (
          <>
            <img src={banner3} alt='banner' className='fade-in  object-cover hidden lg:block' />
            <img src={banner33} alt='banner' className='fade-in  object-cover lg:hidden' />
          </>
        )}
      </div>
      <section className='pt-20'>
        <div className='px-4 max-w-[1262px] mx-auto'>
          <h2 className='text-[28px] md:text-[40px] font-bold text-[#013879] text-center'>Tour Nổi Bật</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-y-[33px] md:gap-y-[65px] gap-4 mt-8'>
            {tours?.map((item: any, index: number) => (
              <TourLink
                item={item}
                key={index}
                index={index}
                link={`/du-lich/${item.categoryIdLevel1.slug}/${item.categoryIdLevel2.slug}/${item.categoryIdLevel3.slug}/${item.slug}`}
              />
            ))}
          </div>

        </div>
      </section>
      <section className='py-20'>
        <div className='px-4 max-w-[1262px] mx-auto'>
          <h2 className='text-[28px] md:text-[40px] font-bold text-[#013879] text-center'>Điểm Đến Yêu Thích</h2>
          <div className='my-12'>
            <div className='grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-2 md:gap-4'>
              <Link to={'/du-lich/du-lich-nuoc-ngoai/chau-au'} className='col-span-2 row-span-2 relative  group 1'>
                <img
                  src={europe}
                  alt='news2'
                  className='w-full  h-full  aspect-square object-cover hover:scale-110 transition-all duration-300'
                />
                <div className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'></div>
                <p className='text-[26px] group-hover:text-[40px] group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300 absolute bottom-4 left-4 text-white text-center '>
                  Châu Âu
                </p>
              </Link>
              <Link to={'/du-lich/du-lich-nuoc-ngoai/chau-uc'} className=' relative  group 2'>
                <img
                  src={australia}
                  alt='news2'
                  className='w-full  h-full aspect-square  object-cover hover:scale-110 transition-all duration-300'
                />
                <div className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'></div>
                <p className='text-[20px] group-hover:text-[30px] group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300 absolute bottom-4 left-4 text-white text-center '>
                  Châu Úc
                </p>
              </Link>
              <Link to={'/du-lich/du-lich-nuoc-ngoai/chau-a/han-quoc'} className=' relative  group 3'>
                <img
                  src={korea}
                  alt='news2'
                  className='w-full  h-full  object-cover hover:scale-110 transition-all duration-300'
                />
                <div className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'></div>
                <p className='text-[20px] group-hover:text-[30px] group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300 absolute bottom-4 left-4 text-white text-center '>
                  Hàn Quốc
                </p>
              </Link>
              <Link to={'/du-lich/du-lich-nuoc-ngoai/chau-a/nhat-ban'} className='col-span-2  relative  group 4'>
                <img
                  src={japan}
                  alt='news2'
                  className='w-full  h-full  aspect-[2/1]  object-cover hover:scale-110 transition-all duration-300'
                />
                <div className='group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'></div>
                <p className='text-[20px] group-hover:text-[30px] group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300 absolute bottom-4 left-4 text-white text-center '>
                  Nhật Bản
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='py-20 bg-[#F6F8FA]'>
        <div className='px-4 max-w-[1262px] mx-auto'>
          <h2 className='text-[28px] md:text-[40px] font-bold text-[#013879] text-center'>Tin Tức Và Sự Kiện</h2>
          <div className='my-12'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {Array.from({ length: 4 }).map((_, index) => (
                <Link
                  to={`/tin-tuc/mua-hoa-anh-dao-han-quoc-2025`}
                  state={{ title: 'Mua Hóa Anh Đào Hạn Quốc 2025', type: 'detail' }}
                >
                  <div className='cursor-pointer' key={index} style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                    <div className='overflow-hidden '>
                      <img
                        src={news1}
                        alt='news1'
                        className='w-full  h-full aspect-[9/6] object-cover hover:scale-110 transition-all duration-300'
                      />
                    </div>
                    <div className='p-4'>
                      <p className='text-[#8B8B8B] font-medium text-[13px] mb-1'>28-02-2025</p>
                      <p className='line-clamp-2 font-medium'>
                        CẦU CỔNG VÀNG – TUYỆT TÁC KIẾN TRÚC VƯỢT THỜI GIAN TẠI SAN FRANCISCO
                      </p>
                      <p className='line-clamp-3 text-sm text-[#222222]'>
                        Cầu Cổng Vàng, biểu tượng nổi tiếng thế giới thuộc thành phố San Francisco với thiết kế độc đáo
                        nổi bật với gam màu đỏ cam đầy rực rỡ. Ngoài ra, đây còn là biểu tượng của sự phát triển và tinh
                        thần đổi mới. Dù là trong ánh bình minh, giữa làn sương mờ hay khi hoàng hôn buông xuống, Cầu
                        Cổng Vàng ...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Button to='/tin-tuc' className='mx-auto py-3'>
          Xem Thêm
        </Button>
      </section> */}
    </div>
  )
}

export default Home
