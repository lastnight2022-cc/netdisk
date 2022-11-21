import {createApp, nextTick} from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import Antd from 'ant-design-vue'
import storage from 'store'
import 'ant-design-vue/dist/antd.css'
import VueClipboard from "vue-clipboard2";

const app = createApp(App)
app.use(router)
app.use(storage)
app.use(Antd)
app.use(VueClipboard)

import moment from 'moment'

moment.locale('zh-cn')

const allowList = ['login', 'fileshared']
const loginRoutePath = '/filecloud/login'

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    const token = storage.get('Access-Token')
    if (token) {
        next()
    } else {
        if (allowList.includes(to.name)) {
            // 在免登录名单，直接进入
            next()
        } else {
            next({path: loginRoutePath, query: {redirect: to.fullPath}})
        }
    }
})

app.use(router)

app.mount('#app')
