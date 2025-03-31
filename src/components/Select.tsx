/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { getQueryParams, getUpdatedQueryParams } from '~/utils/utils'

interface SortByProps {
  options: { title: string; value: string }[];
  onChange: (value: string) => void;
}

export const SortBy = ({ options, onChange }: SortByProps) => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(options?.[0]?.title || '')

  return (
    <div className='relative'>
      <div
        onClick={() => setShow(!show)}
        className='flex items-center gap-x-3 text-[#013879] font-medium cursor-pointer border md:border-0 text-sm md:text-base py-2 md:py-0 px-4 md:px-0 w-full justify-center md:justify-start'
      >
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
            d='M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5'
          />
        </svg>
        {active}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`size-4 transition-all ${show ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
      </div>
      <div
        className={`${
          show ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } absolute top-full right-0 z-50 bg-white shadow-lg transition-all duration-300 overflow-hidden w-[200px]`}
      >
        {options && options.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActive(item.title)
              onChange(item.value)
              setShow(false)
            }}
            className={`p-3 cursor-pointer hover:bg-gray-100 ${active === item.title ? 'text-[#013879]' : ''}`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}
