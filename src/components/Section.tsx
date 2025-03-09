import React from 'react'
import Container from './Container'

const Section = ({
  children,
  bg,
  className,
  title,
  classNameTitle
}: {
  children: React.ReactNode
  bg?: string
  className?: string
  title?: string
  classNameTitle?: string
}) => {
  return (
    <section className={`pt-10 pb-20 ${bg}`}>
      <Container className={className}>
        <h2 className={`text-[28px] md:text-[40px] font-bold text-[#013879] text-center ${classNameTitle}`}>{title}</h2>
        {children}
      </Container>
    </section>
  )
}

export default Section
