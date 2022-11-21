import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import alias from "@rollup/plugin-alias"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        alias()
    ],
    resolve: {
        alias: [
            {find: '@', replacement: resolve(__dirname, 'src/')}
        ],
        conditions: [],
        extensions: ['.vue']
    },
    server: {
        port:4000, // 启动端口
        open:true,
        proxy: {

        },
        cors:true // 跨域调用
    },
})
