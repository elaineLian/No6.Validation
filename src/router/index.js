import Vue from 'vue'
import Router from 'vue-router'
import CreateAccount from '@/components/CreateAccount'
import GeneralInfomation from '@/components/GeneralInfomation'
import ProfilePicture from '@/components/ProfilePicture'
import PaymentMethod from '@/components/PaymentMethod'
import Congratulations from '@/components/Congratulations'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/CreateAccount'
    },
    {
      path: '/CreateAccount',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path: '/GeneralInfomation',
      name: 'GeneralInfomation',
      component: GeneralInfomation
    },
    {
      path: '/ProfilePicture',
      name: 'ProfilePicture',
      component: ProfilePicture
    },
    {
      path: '/PaymentMethod',
      name: 'PaymentMethod',
      component: PaymentMethod
    },
    {
      path: '/Congratulations',
      name: 'Congratulations',
      component: Congratulations
    }
  ]
})
