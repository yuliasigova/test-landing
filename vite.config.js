import { defineConfig } from 'vite'
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig( {
    plugins: [
        ViteSvgSpriteWrapper({
            icons: 'src/img/svg/*.svg',
            outputDir: 'src/img'
        }),
        ViteImageOptimizer({
            png: {
                quality: 70,
            },
            jpg: {
                quality: 70,
            },
        }),
        {
            ...imagemin(['./src/img/**/*.{jpg,png,jpeg}'], {
                destination: './src/img',
                plugins: [
                    imageminWebp({ quality: 70 })
                ]
            }),
            // apply: 'serve',
        }
        ],

})
