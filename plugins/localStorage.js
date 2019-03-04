import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
    reducer: state => ({
      auth: state.auth,
      page: state.page
    })
  })(store)
}