import { useLanguage } from '~/hooks/useLanguage';

const ChangeLanguage = () => {
  const { currentLanguage, isInitialized } = useLanguage();

  // Hiển thị cờ tương ứng với ngôn ngữ hiện tại
  const getCurrentFlag = () => {
    switch(currentLanguage) {
      case 'zh':
        return (
          <svg xmlns='http://www.w3.org/2000/svg' width='29' height='20' viewBox='0 0 29 20' fill='none'>
            <g clipPath='url(#clip0_823_24241)'>
              <rect width='29' height='20' fill='white' />
              <path d='M0 0V6.61782V6.76437V13.2356V13.3822V20H29V13.3822V13.2356V6.76437V6.61782V0H0Z' fill='#BE1700' />
              <path d='M5.45488 3.57068L6.16008 5.74073L8.42403 5.74563L6.59536 7.09262L7.29003 9.26594L5.45488 7.92795L3.61972 9.26594L4.3152 7.09262L2.48572 5.74563L4.75048 5.74073L5.45488 3.57068Z' fill='#F1CC30' />
            </g>
          </svg>
        );
      case 'id':
        return (
          <svg xmlns='http://www.w3.org/2000/svg' width='29' height='20' viewBox='0 0 29 20' fill='none'>
            <g clipPath='url(#clip0_1_1631)'>
              <rect width='29' height='20' fill='white' />
              <path d='M0 0V10H29V0H0Z' fill='#FF0000' />
              <path d='M0 10V20H29V10H0Z' fill='white' />
            </g>
          </svg>
        );
      default: // 'vi'
        return (
          <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' viewBox='0 0 30 20' fill='none'>
            <g clipPath='url(#clip0_2_14630)'>
              <rect width='29' height='20' transform='translate(0.356323)' fill='white' />
              <path
                d='M0.356323 0V6.61782V6.76437V13.2356V13.3822V20H29.3563V13.3822V13.2356V6.76437V6.61782V0H0.356323Z'
                fill='#BE1700'
              />
              <path
                d='M14.9997 4L16.6615 8.57278L22 8.58363L17.688 11.4206L19.3257 16L14.9997 13.1805L10.6736 16L12.312 11.4206L8 8.58363L13.3385 8.57278L14.9997 4Z'
                fill='#F1CC30'
              />
            </g>
            <defs>
              <clipPath id='clip0_2_14630'>
                <rect width='29' height='20' fill='white' transform='translate(0.356323)' />
              </clipPath>
            </defs>
          </svg>
        );
    }
  };

  const handleChangeLanguage = (code: string) => {
    localStorage.setItem('app_language', code)
    
    // Thêm đoạn code này để reload trang sau khi đổi ngôn ngữ
    // Cách này đảm bảo tất cả component sẽ được re-render với ngôn ngữ mới
    window.location.reload()
  }

  if (!isInitialized) return null;

  return (
    <div className='py-[22px] relative text-[#013879] font-medium cursor-pointer group flex items-center gap-x-1'>
      {/* Hiển thị cờ của ngôn ngữ hiện tại */}
      {getCurrentFlag()}

      {/* Arrow icon */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4 group-hover:rotate-180 transition-all duration-300'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
      </svg>

      {/* Dropdown menu */}
      <div
        style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
        className='px-5 font-normal text-[#222222] rounded pt-5 pb-3 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible top-full group-hover:top-[calc(100%-20px)] left-1/2 -translate-x-1/2 absolute bg-white z-50'
      >
        {/* Tiếng Việt */}
        <button
          onClick={() => handleChangeLanguage('vi')}
          className={`w-[149px] mb-3 flex items-center gap-x-2 ${currentLanguage === 'vi' ? 'text-blue-600' : ''}`}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='29' height='20' viewBox='0 0 30 20' fill='none'>
            <g clipPath='url(#clip0_2_14630)'>
              <rect width='29' height='20' transform='translate(0.356323)' fill='white' />
              <path
                d='M0.356323 0V6.61782V6.76437V13.2356V13.3822V20H29.3563V13.3822V13.2356V6.76437V6.61782V0H0.356323Z'
                fill='#BE1700'
              />
              <path
                d='M14.9997 4L16.6615 8.57278L22 8.58363L17.688 11.4206L19.3257 16L14.9997 13.1805L10.6736 16L12.312 11.4206L8 8.58363L13.3385 8.57278L14.9997 4Z'
                fill='#F1CC30'
              />
            </g>
          </svg>
          Tiếng Việt
        </button>

        {/* Tiếng Trung */}
        <button
          onClick={() => handleChangeLanguage('zh')}
          className={`w-[149px] mb-3 flex items-center gap-x-2 ${currentLanguage === 'zh' ? 'text-blue-600' : ''}`}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='29' height='20' viewBox='0 0 29 20' fill='none'>
            <g clipPath='url(#clip0_823_24241)'>
              <rect width='29' height='20' fill='white' />
              <path
                d='M0 0V6.61782V6.76437V13.2356V13.3822V20H29V13.3822V13.2356V6.76437V6.61782V0H0Z'
                fill='#BE1700'
              />
              <path
                d='M5.45488 3.57068L6.16008 5.74073L8.42403 5.74563L6.59536 7.09262L7.29003 9.26594L5.45488 7.92795L3.61972 9.26594L4.3152 7.09262L2.48572 5.74563L4.75048 5.74073L5.45488 3.57068Z'
                fill='#F1CC30'
              />
            </g>
          </svg>
          中文
        </button>

        {/* Tiếng Indonesia */}
        <button
          onClick={() => handleChangeLanguage('id')}
          className={`w-[149px] mb-3 flex items-center gap-x-2 ${currentLanguage === 'id' ? 'text-blue-600' : ''}`}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='29' height='20' viewBox='0 0 29 20' fill='none'>
            <g clipPath='url(#clip0_1_1631)'>
              <rect width='29' height='20' fill='white' />
              <path
                d='M0 0V10H29V0H0Z'
                fill='#FF0000'
              />
              <path
                d='M0 10V20H29V10H0Z'
                fill='white'
              />
            </g>
          </svg>
          Bahasa Indonesia
        </button>
      </div>
    </div>
  );
};

export default ChangeLanguage;
