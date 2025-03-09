/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
  onlyIcon?: boolean
  to?: string
  [key: string]: any // This allows for any additional props
}

const Button = ({ children, className, icon, onlyIcon, to, ...props }: ButtonProps) => {
  return (
    <Link to={to || '#'}>
      <button
        {...props}
        className={`bg-[#ED1B35]  hover:bg-[#0394D9] ${
          onlyIcon ? 'w-10 h-10' : 'w-[209px] px-4 py-2'
        } transition-all duration-300  justify-center text-white  flex items-center gap-2 text-lg font-medium ${className}`}
      >
        {icon}
        {!onlyIcon && children}
      </button>
    </Link>
  )
}

export default Button
