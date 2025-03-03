import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'
import { LayoutPropsInterface } from '~/types/base.type'

const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return <div>
    <Header></Header>
    <div className='pt-[67px]'>
      {children}
    </div>
    <Footer />
  </div>

}

export default HomeLayout
