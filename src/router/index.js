import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import TotalTrafficChart from '@/components/TotalTrafficChart'
import PcSearchChart from '@/components/PcSearchChart'
import MbSearchChart from '@/components/MbSearchChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/TotalTrafficChart',
      name: 'TotalTrafficChart',
      component: TotalTrafficChart,
      props: true
    },
    {
      path: '/PcSearchChart',
      name: 'PcSearchChart',
      component: PcSearchChart,
      props: true
    },
    {
      path: '/MbSearchChart',
      name: 'MbSearchChart',
      component: MbSearchChart,
      props: true
    }
  ]
})
