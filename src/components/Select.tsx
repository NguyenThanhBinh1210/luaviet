/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, useLocation } from 'react-router-dom'
import { getQueryParams, getUpdatedQueryParams } from '~/utils/utils'

export const SortBy = ({ sortInitial }: { sortInitial: any }) => {
  const location = useLocation()

  return (
    <div className='relative z-10 group '>
      <button className='flex items-center gap-x-3 text-[#013879] font-medium w-full justify-center md:justify-start border md:border-0 text-sm md:text-base py-2 md:py-0'>
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
            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
          />
        </svg>
        Sắp xếp theo
      </button>
      <div className='absolute top-full left-0 bg-white  p-4 text-sm w-full shadow-md  group-hover:opacity-100 opacity-0 group-hover:visible invisible'>
        {sortInitial.map((item: any, index: number) => (
          <Link

            state={location.state}
            to={`${location.pathname}?${getUpdatedQueryParams({ sort: item.value }, location)}`}
            className={`block mb-2 ${getQueryParams(location).sort === item.value && 'text-red-500'} `}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
