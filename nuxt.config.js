const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    script: [
      { src: '/js/jquery-3.1.1.min.js' },
      { src: '/js/jquery.cookie.js' },
      { src: '/js/transit.js' },
      { src: '/js/paging.js' },
      { src: '/js/moment.min.js' },
      { src: '/js/jquery.share.min.js' },
      { src: '/js/wangEditor.min.js' },
      { src: "https://cdn.bootcss.com/Clamp.js/0.5.1/clamp.js" }
      
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#cda550' },
  // transition: {
  //   name: 'page',
  //   mode: 'out-in',
  // },

  css: [
    '@/assets/css/style.css',
    '@/assets/css/share.min.css',
    '@/assets/css/transition.css',
    'swiper/dist/css/swiper.css'

  ],

  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/iview', ssr: true},
    { src: '~/plugins/router' },
    { src: '~/plugins/swiper.js', ssr: false },
  ], 

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],

  // router: {
  //   middleware: ['setPage']
  // },

  axios: {
    proxy: true
  },
  proxy: {
    '/api': { target: 'http://ht.edijin.com/dj/home', pathRewrite: {'^/api/': '/'} }
    // '/api': { target: 'http://192.168.51.101:9999/dj/home', pathRewrite: {'^/api/': '/'} }
  },
  // router: {
  //   scrollBehavior: function (to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  //   }
  // },
  build: {

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
