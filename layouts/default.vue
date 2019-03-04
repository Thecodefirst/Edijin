<template>
  <div>
    <nuxt v-if="isRouterAlive"/>
    <log v-show='active.show_auth'></log>
    <modal v-show='active.show_modal'></modal>
    <citySelect v-show='active.show_citySelect'></citySelect>  
  </div>
</template>
<script type="text/javascript">
import log from '~/components/toast/log.vue'
import modal from '~/components/toast/modal.vue'
import forget from '~/components/toast/forget.vue'
import citySelect from '~/components/city.vue'
import {mapState,mapActions,mapMutations} from "vuex"	
export default {
  provide(){
    return {
      reload:this.reload
    }
  },
	data(){
		return {
      isRouterAlive:true,
		}
	},
	components:{
		log,
		modal,
    forget,
    citySelect,
	},
	computed:{
    ...mapState({
      active:'active'
    })
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>