<template>
  <div class="components_footer">
    <div class="a">
        <div>
            <span class="pointer" v-for='item in page.footerbar_nav'>{{ item.name }}</span>
        </div>
        <p>{{ page.footerbar_info }}</p>
        <p>{{ page.footerbar_info1 }}</p>
        <img src="@/assets/img/footer_logo.png" class="logo">
    </div>
  </div>
</template>
<script type="text/javascript">
import Home from '../api/home'
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    data(){
        return {
        
        }
    },
    computed:{
        ...mapState({
         page:'page'
       })
    },
    // async asyncData (context) {
    //     let platformPaging = await Home.platformPaging()
    //     return{
    //         platformPaging:platformPaging.data
    //     }
    // }
}    
</script>
