import { useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import HomeLayout from '~/layouts/HomeLayout'
import Home from '~/pages/Home'

import News from '~/pages/News'
import TuyenDung from '~/pages/TuyenDung'
import Contact from '~/pages/Contact'
import Policy from '~/pages/Policy'
import PolicyDetail from '~/pages/PolicyDetail'
import DuLich from '~/pages/DuLich'

const useRouteElements = () => {
  const routeElements = useRoutes([

    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/tin-tuc',
      element: (
        <HomeLayout>
          <News />
        </HomeLayout>
      )
    },
    {
      path: '/tuyen-dung',
      element: (
        <HomeLayout>
          <TuyenDung />
        </HomeLayout>
      )
    },
    {
      path: '/lien-he',
      element: (
        <HomeLayout>
          <Contact />
        </HomeLayout>
      )
    },
    {
      path: '/chinh-sach-va-quy-dinh',
      element: (
        <HomeLayout>
          <Policy />
        </HomeLayout>
      )
    },
    {
      path: '/chinh-sach-va-quy-dinh/:slug',
      element: (
        <HomeLayout>
          <PolicyDetail />
        </HomeLayout>
      )
    },
    {
      path: '/tin-tuc/:slug',
      element: (
        <HomeLayout>
          <News />
        </HomeLayout>
      )
    },
    {
      path: '/du-lich/:slug',
      element: (
        <HomeLayout>
          <DuLich />
        </HomeLayout>
      )
    },
    {
      path: '/du-lich/:local/:slug',
      element: (
        <HomeLayout>
          <DuLich />
        </HomeLayout>
      )
    },
    {
      path: '/loai-tin-tuc/:type',
      element: (
        <HomeLayout>
          <News />
        </HomeLayout>
      )
    },


    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
