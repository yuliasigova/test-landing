import { defineConfig } from 'vite'
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

export default defineConfig( {
    base: '',
    plugins: [
        ViteSvgSpriteWrapper({
            icons: 'src/img/svg/*.svg',
            outputDir: 'src/img'
        }),
        {
            ...imagemin(['./src/img/**/*.{jpg,jpeg}'], {
                destination: './src/img',
                plugins: [
                    imageminWebp({ quality: 70 }),
                ]
            }),
            apply: 'serve',
        },

        ],

})
