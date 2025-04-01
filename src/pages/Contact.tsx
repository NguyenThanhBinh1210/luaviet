/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import Container from '~/components/Container'
import Section from '~/components/Section'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div>
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
          <Link to='/lien-he' className='text-[13px]'>
            {t('contact.title')}
          </Link>
        </div>
      </Container>
      <Section>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5'>
          <div>
            <p className=' font-bold text-[28px] md:text-[40px] text-[#013879] md:pr-10'>{t('contact.title')}</p>

            <div className='text-[#222222] mt-4'>
              {t('contact.description')}
            </div>
            <div className='text-[#222222] font-bold text-xl md:text-[24px] my-8 border-l-4 border-red-500 pl-5'>
              {t('contact.mainOffice')}
            </div>
            <div className='text-[#222222] space-y-2 ml-4'>
              <p className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                  />
                </svg>
                {t('contact.mainOfficeAddress')}
              </p>

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
                +84 968272768
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
                gm.hunganhtravel@gmail.com              </div>
            </div>

          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9301.16933088598!2d106.67296956301738!3d10.757117630936738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f10dd8155b1%3A0x5c5208c7def9a688!2zQ8O0bmcgdHkgVE5ISCBEdSBM4buLY2ggTOG7rWEgVmnhu4d0!5e0!3m2!1svi!2s!4v1684728750200!5m2!1svi!2s'
            loading='lazy'
            className='mt-6 md:mt-0 max-w-[600px] w-full h-[450px] md:h-[500px] rounded-lg'
          ></iframe>
        </div>
      </Section>
      <Section title={t('contact.form.title')} bg='bg-[#F6F8FA]'>
        <form className='mt-[30px] md:mt-[100px] max-w-[815px] mx-auto space-y-6'>
          <div className='md:flex md:items-center'>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='name'>
              {t('contact.form.fullName')} <span className='text-[#FF0000]'>*</span>
            </label>
            <input
              className='p-[18px] bg-white w-full mt-1.5 md:mt-0'
              type='text'
              id='name'
              placeholder={t('contact.form.enterFullName')}
            />
          </div>
          <div className='md:flex md:items-center'>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='address'>
              {t('contact.form.address')} <span className='text-[#FF0000]'>*</span>
            </label>
            <input
              className='p-[18px] bg-white w-full mt-1.5 md:mt-0'
              type='text'
              id='address'
              placeholder={t('contact.form.enterAddress')}
            />
          </div>
          <div className='md:flex md:items-center'>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='email'>
              {t('contact.form.email')} <span className='text-[#FF0000]'>*</span>
            </label>
            <input
              className='p-[18px] bg-white w-full mt-1.5 md:mt-0'
              type='email'
              id='email'
              placeholder={t('contact.form.enterEmail')}
            />
          </div>
          <div className='md:flex md:items-center'>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='phone'>
              {t('contact.form.phone')} <span className='text-[#FF0000]'>*</span>
            </label>
            <input
              className='p-[18px] bg-white w-full mt-1.5 md:mt-0'
              type='text'
              id='phone'
              placeholder={t('contact.form.enterPhone')}
            />
          </div>
          <div className='md:flex '>
            <label className='text-sm md:text-lg font-bold text-[#222222]  md:w-[210px]' htmlFor='content'>
              {t('contact.form.content')} <span className='text-[#FF0000]'>*</span>
            </label>
            <textarea rows={5} className='p-[18px] bg-white w-full mt-1.5 md:mt-0' id='content' placeholder='' />
          </div>
          <Button className='py-4 mx-auto mt-10'>{t('contact.form.submit')}</Button>
        </form>
      </Section>
    </div>
  )
}

export default Contact
