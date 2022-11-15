import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import Components from 'unplugin-vue-components/dist'
import {AntDesignVueResolver} from "unplugin-vue-components/dist/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            dts:true,
            resolvers:[AntDesignVueResolver()],
        }),
    ],
    resolve: {
        alias: [
            {find: '@', replacement: resolve(__dirname, 'src')}
        ],
        conditions: [],
        extensions: []
    },
    server: {
        port:4000, // 启动端口
        open:true,
        proxy: {

        },
        cors:true // 跨域调用
    }
})
