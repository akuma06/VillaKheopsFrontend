import Vue from 'vue'
import Router from 'vue-router'
import BookCheck from '@/components/BookCheck'
import ContactUs from '@/components/ContactUs'
import Details from '@/components/Details'
import Dinner from '@/components/Dinner'
import Home from '@/components/Home'
import Payment from '@/components/Payment'
import Restauration from '@/components/Restauration'
import Rooms from '@/components/Rooms'
import Room from '@/components/Room'
import Summary from '@/components/Summary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms
    },
    {
      path: '/rooms/:room',
      name: 'Room',
      component: Room
    },
    {
      path: '/restaurant',
      name: 'Restauration',
      component: Restauration
    },
    {
      path: '/restaurant/dinner',
      name: 'Dinner',
      component: Dinner
    },
    {
      path: '/booking',
      name: 'BookingCheck',
      component: BookCheck
    },
    {
      path: '/booking/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/booking/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/booking/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactUs
    }
  ],
  mode: 'history'
})
