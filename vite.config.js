import { resolve } from 'node:path'

export default {
    server: {
        port: "2222",
    },
    css: {
        devSourcemap: true,
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                remeras: resolve('pages/remeras.html'),
                pantalones: resolve('pages/pantalones.html'),
                index: resolve('index.html'),
                terminos: resolve('pages/terminos-condiciones.html'),
                politicas: resolve('pages/politicas-cambio.html'),
                buzos: resolve('pages/buzos.html'),
                carrito: resolve('pages/carrito.html'),
                compraDos: resolve('pages/compra-dos.html'),
                compraFinalizar: resolve('pages/compra-finalizar.html'),
                compra: resolve('pages/compra.html'),
            }
        }
    }
}