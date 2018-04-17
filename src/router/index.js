import Vue from 'vue'
import Router from 'vue-router'
import SignatureGenerator from '@/components/Signature-Generator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignatureGenerator',
      component: SignatureGenerator
    }
  ]
})
