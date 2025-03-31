/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { blogApi } from '~/apis/blog.api'
import news1 from '~/assets/6170305031849493246 (1).jpg'
import { useTranslation } from 'react-i18next'

const News = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);
  const title = location.state?.title
  const type = location.state?.type
  // const tags = location.state?.tags
  // const createdAt = location.state?.createdAt
  const content = location.state?.content

  const [blogs, setBlogs] = useState([])
  const [diffBlogs, SetDiffBlogs] = useState([])

  // Lấy ngôn ngữ từ localStorage, mặc định là 'vi'
  const currentLanguage = localStorage.getItem('app_language') || 'vi'
  const { t } = useTranslation()

  useQuery({
    queryKey: ['blogs', currentLanguage], // Thêm currentLanguage vào queryKey để re-fetch khi ngôn ngữ thay đổi
    queryFn: async () => {
      const response = await blogApi.getBlogs({
        languageCode: currentLanguage
      })
      if (response.data.data.data) {
        setBlogs(response.data.data.data)
        SetDiffBlogs(response.data.data.data)
        return response.data.data.data
      }
      return []
    }
  })
  useEffect(() => {
    if (location.pathname.includes('loai-tin-tuc')) {
      const category = title
      console.log(category);
      const filteredBlogs = diffBlogs.filter((blog: any) => blog.tags[0].includes(category))
      setBlogs(filteredBlogs)
    } else {
      setBlogs(diffBlogs)
    }
  }, [location.pathname, title])
  // const convertToSlug = (text: string) => {
  //   return text
  //     .toLowerCase() // Chuyển đổi tất cả các ký tự thành chữ thường
  //     .trim() // Loại bỏ khoảng trắng ở đầu và cuối
  //     .replace(/[^a-z0-9 -]/g, '') // Xóa bỏ các ký tự không phải là chữ cái, số, khoảng trắng hoặc dấu gạch ngang
  //     .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
  //     .replace(/-+/g, '-') // Loại bỏ các dấu gạch ngang liên tiếp
  // }
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    }
    return date.toLocaleString('en-US', options)
  }

  // const groupToursByCategory = (blogs: any) => {
  //   return blogs.reduce(
  //     (result: any, blog: any) => {
  //       // Nếu blog có categoryIdLevel3, nhóm theo _id của categoryIdLevel3
  //       const category = blog.tags[0] ? blog.tags[0] : 'No Category'

  //       // Nếu category chưa có trong result, khởi tạo mảng mới
  //       if (!result[category]) {
  //         result[category] = []
  //       }

  //       // Thêm tour vào mảng tương ứng
  //       result[category].push(blog)

  //       return result
  //     },
  //     {} as Record<string, any[]>
  //   )
  // }
  return (
    <div className='px-4 max-w-[1262px] mx-auto pb-[87px]'>
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
        <Link to='/tin-tuc' className='text-[13px]'>
          {t('news.title')}
        </Link>
        {location.pathname.includes('loai-tin-tuc') && (
          <>
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
            <p className='text-[13px]'>{location.state?.title}</p>
          </>
        )}
      </div>
      <div>
        {type !== 'detail' && (
          <div>
            <div className='mt-[30px] md:mt-[52px]'>
              <h2 className='text-[28px] md:text-[40px] font-bold text-[#013879] text-center'>
                {t('news.latestNews')}
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 mt-[30px]'>
                {blogs.map((item: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(`/tin-tuc/${item.slug}`, {
                        state: {
                          type: 'detail',
                          title: item.title,
                          tags: item.tags,
                          createdAt: item.createdAt,
                          content: item.content
                        }
                      })
                    }}
                    className='cursor-pointer'
                  >
                    <div className='overflow-hidden'>
                      <img
                        src={item.thumbnail}
                        alt='news1'
                        className='w-full h-full aspect-[9/7] object-cover hover:scale-110 transition-all duration-300'
                      />
                    </div>
                    <div>
                      <p className='uppercase font-medium mt-3 mb-2'>{item.title}</p>
                      <p className='text-[#8B8B8B] text-sm line-clamp-3'>{item.description}</p>
                      <div className='flex justify-between items-center mt-3'>
                        <p className='text-[#8B8B8B] text-xs'>{formatDate(item.createdAt)}</p>
                        <p className='text-[#013879] text-xs font-medium'>{t('news.readMore')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {type === 'detail' && (
          <div className='mt-[30px] md:mt-[52px]'>
            <h2 className='text-[28px] md:text-[40px] font-bold text-[#013879] text-center'>{title}</h2>
            <div className='mt-[30px]'>
              <div className='overflow-hidden'>
                <img src={news1} alt='news1' className='w-full h-full aspect-video object-cover' />
              </div>
              <div className='mt-5'>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default News
