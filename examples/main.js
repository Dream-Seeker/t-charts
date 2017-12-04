import App from './App'
import Vue from 'vue'
import router from './router'
import iView from 'iview'
import CodeSection from './components/code-section'
import 'iview/dist/styles//iview.css'
import 'normalize.css'

Vue.use(iView)
Vue.component(CodeSection.name, CodeSection)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
