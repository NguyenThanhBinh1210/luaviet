/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { blogApi } from '~/apis/blog.api'
import news1 from '~/assets/6170305031849493246 (1).jpg'

const News = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);
  const title = location.state?.title
  const type = location.state?.type
  const tags = location.state?.tags
  const createdAt = location.state?.createdAt
  const content = location.state?.content

  const [blogs, setBlogs] = useState([])
  const [diffBlogs, SetDiffBlogs] = useState([])

  useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const response = await blogApi.getBlogs()
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
  const convertToSlug = (text: string) => {
    return text
      .toLowerCase() // Chuyển đổi tất cả các ký tự thành chữ thường
      .trim() // Loại bỏ khoảng trắng ở đầu và cuối
      .replace(/[^a-z0-9 -]/g, '') // Xóa bỏ các ký tự không phải là chữ cái, số, khoảng trắng hoặc dấu gạch ngang
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/-+/g, '-') // Loại bỏ các dấu gạch ngang liên tiếp
  }
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

  const groupToursByCategory = (blogs: any) => {
    return blogs.reduce(
      (result: any, blog: any) => {
        // Nếu blog có categoryIdLevel3, nhóm theo _id của categoryIdLevel3
        const category = blog.tags[0] ? blog.tags[0] : 'No Category'

        // Nếu category chưa có trong result, khởi tạo mảng mới
        if (!result[category]) {
          result[category] = []
        }

        // Thêm tour vào mảng tương ứng
        result[category].push(blog)

        return result
      },
      {} as Record<string, any[]>
    )
  }
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
          Tin Tức Và Sự Kiện
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
          <p className='my-12 font-bold text-[40px] text-[#013879]'>
            {location.pathname.includes('/loai-tin-tuc') && title ? title : 'Tin Tức Và Sự Kiện'}
          </p>
        )}

        <div className={`grid md:grid-cols-4 gap-x-16 ${type === 'detail' ? 'mt-12' : ''}`}>
          <div className='md:col-span-3'>
            {type !== 'detail' && (
              <>
                {blogs.map((item: any, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      navigate(`/tin-tuc/${convertToSlug(item.title)}`, {
                        state: {
                          ...item,
                          type: 'detail'
                        }
                      })
                    }
                    className=''
                  >
                    <div className='pb-9 mb-9 border-b flex gap-5 md:gap-10 flex-col md:flex-row'>
                      <div className='md:w-[259px] h-auto flex-shrink-0 overflow-hidden'>
                        <img
                          src={item.thumbnail || news1}
                          alt='news1'
                          className='w-full h-full object-cover aspect-[9/7] hover:scale-110 transition-all duration-300'
                        />
                      </div>
                      <div className='w-full'>
                        <div className='flex gap-x-3 items-center'>
                          <Link to='/' className='    text-[#013879] bg-[#C0E7FD] rounded-full px-5 py-0.5 text-[13px]'>
                            {item.tags[0]}
                          </Link>
                          <p className='text-[#8B8B8B] font-medium text-[13px] '>{formatDate(item.createdAt)}</p>
                        </div>
                        <p className='line-clamp-2 font-medium my-4'>{item.title}</p>
                        <p
                          className='text-[#222222] text-sm line-clamp-4'
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {type === 'detail' && (
              <>
                <div className='flex gap-x-3 items-center '>
                  <p className='    text-[#013879] bg-[#C0E7FD] rounded-full px-5 py-0.5 text-[13px]'>{tags[0]}</p>
                  <p className='text-[#8B8B8B] font-medium text-[13px] '>{formatDate(createdAt)}</p>
                </div>
                <p className=' font-bold text-[30px] mt-4'>{location.state?.title}</p>
                <p
                  className='mt-4 text-[#222222] italic pb-[50px] border-b'
                  dangerouslySetInnerHTML={{ __html: content }}
                ></p>
              </>
            )}
          </div>
          <div className='md:col-span-1'>
            <div>
              <p className='font-bold text-lg pb-5 border-b text-[#013879]'>Chủ Đề</p>
              <div className='flex flex-col '>
                {Object.keys(groupToursByCategory(diffBlogs)).map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      navigate(`/loai-tin-tuc/${convertToSlug(category)}`, {
                        state: {
                          title: category
                        }
                      })
                    }
                    className='py-3 border-b flex items-center gap-2 justify-between group'
                  >
                    {category}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-4 group-hover:translate-x-1 transition-all duration-300'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                    </svg>
                  </button>
                ))}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
