export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    // 关闭弹窗
    app.store.commit('CLOSE_AUTH')

    // 直播nav
    if(to.fullPath=='/zhibo?id=2'){
      app.router.push('/zhibo/first?id=2')
    }else if(to.fullPath=='/zhibo?id=3'){
      app.router.push('/zhibo/first?id=3')
    }

    // headersub 需要的状态
    if(to.name){
      let name = (to.name).split('-').shift()
      app.store.commit('SET_ACTIVE_HEADBAR',name)
    }
    // console.log(app.store.state.page.active)
    // 首页-->快报
    // console.log()
    if(from.name == 'index'&&app.store.state.page.active == 'kuaibao'&&to.query.id==1){
      app.router.push('kuaibao?typeId=6a2b89f8569c404eb07aa8ce118ee577')
      app.store.commit('SET_DETAIL_NAVBAR','6a2b89f8569c404eb07aa8ce118ee577')
    }
    
    // }else if(app.store.state.page.active == 'kuaibao'&&to.query.id==2){ 
    //   app.router.push('kuaibao?typeId=9a83d204d9944d6c878fc7ce1bffdbfb')
    //   app.store.commit('SET_DETAIL_NAVBAR','9a83d204d9944d6c878fc7ce1bffdbfb')
    // }else if(app.store.state.page.active == 'kuaibao'&&!to.query){
    //   app.store.commit('SET_DETAIL_NAVBAR','1dd0a9536f1748159501df1f6bcd99cd')
    // }


  	next()
  })
}