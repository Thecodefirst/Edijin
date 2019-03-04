<template>
	<div class="center_public">
		<!-- 大宗 -->
		<div class="select">
			<span><i style="color:red">*</i>版块分类</span>
			<Select @on-change="clear" v-model="type" style="width:300px">
				<Option v-for="item in projectlist1" :value="item.id">{{ item.name }}</Option>
			</Select>
		</div>
		<div class="select" v-if="dataLoaded&&type==1">
			<span><i style="color:red">*</i>项目求购</span>
			<Select v-model="post.transfers" style="width:300px">
				<Option v-for="item in FilterData.transfers" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>
		<div class="select" v-if="dataLoaded&&type==1">
			<span><i style="color:red">*</i>城市规格</span>
			<Select v-model="lines" multiple style="width:300px">
				<Option v-for="item in FilterData.lines" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>
		<div class="select" v-if="dataLoaded&&type==1">
			<span><i style="color:red">*</i>交易金额</span>
			<Select v-model="post.amounts" style="width:300px">
				<Option v-for="item in FilterData.amounts" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>

		<!-- 拿地 -->

		<div class="select" v-if="dataLoaded&&type==2">
			<span><i style="color:red">*</i>拿地方式</span>
			<Select multiple v-model="land" style="width:300px">
				<Option v-for="item in FilterData.lands" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>
		<div class="select" v-if="dataLoaded&&type==2">
			<span><i style="color:red">*</i>城市规格</span>
			<Select multiple v-model="lines" style="width:300px">
				<Option v-for="item in FilterData.lines" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>


		<!-- 找钱 -->
		<div class="select" v-if="dataLoaded&&type==3">
			<span><i style="color:red">*</i>资金主体</span>
			<Select  v-model="post.funding" style="width:300px">
				<Option v-for="item in FilterData.fundings" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>
		<div class="select" v-if="dataLoaded&&type==3">
			<span><i style="color:red">*</i>城市规格</span>
			<Select multiple v-model="lines" style="width:300px">
				<Option v-for="item in FilterData.lines" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>
		<div class="select" v-if="dataLoaded&&type==3">
			<span><i style="color:red">*</i>业务方式</span>
			<Select multiple v-model="way" style="width:300px">
				<Option v-for="item in FilterData.ways" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>
		<div class="select" v-if="dataLoaded&&type==3">
			<span><i style="color:red">*</i>资金规模</span>
			<Select  v-model="post.amounts" style="width:300px">
				<Option v-for="item in FilterData.amounts" :value="item.name">{{ item.name }}</Option>
			</Select>
		</div>


		<div class="select" v-if="dataLoaded">
			<span><i style="color:red">*</i>选择区域</span>
			<Select @on-change="setOption" :label-in-value="true" style='width: 150px' placeholder='省份' v-model="model11" filterable>
                <Option v-for="item in provinceList" :value="item.value">{{ item.label }}</Option>
            </Select>
            <Select v-model="model12" placeholder='城市' filterable multiple>
                <Option style='width: 300px' v-for="item in cityList" :value="item.name">{{ item.name }}</Option>
            </Select>
		</div>
		<div class="border"></div>
		<div class="center_public_second">
			<div class="inp">
				<label><em>*</em>发布者</label>
				<input type="text" v-model="post.name">
			</div>	
			<div class="inp">
				<label><em>*</em>标题</label>
				<input type="text" v-model="post.title" class="title">
			</div>
			<span class="p_span"><em></em>相关图片</span>
			<div class="show_back">
				<p v-for="(item,index) in img_back">
					<span @click="remove(index)"><img src="@/assets/img/quit.png" alt=""></span>
					<img :src="item" class="pointer">
				</p>
			</div>
			<div class="upload_btn">
				<Upload action="//ht.edijin.com/dj/home/updateUserImg" 
					:format="['jpg','png','bmp']" 
					:max-size="10240" 
					:show-upload-list="false"
					:on-success="v=>{ handleSuccess(v,'2')}"
					>
						<Button icon="ios-cloud-upload-outline">Upload files</Button>
				</Upload>
				<img src="@/assets/img/upload.png" class="pointer">
			</div>	
			<p class="mb">至少上传一张图片，最多可上传五张</p>
			<span class="p_span"><em>*</em>项目描述</span>
			<div id="editor" style="width: 96%;">
				<p></p>
			</div>
			<span class="p_span_second">补充资料</span>
			<p class="pub_p">
				<Upload action="//ht.edijin.com/dj/home/updateUserImg" 
					:format="['jpg','png','bmp']" 
					:max-size="51200" 
					:show-upload-list="false"
					:on-success="(v,file)=>{ handleSuccess1(v,file)}"
					>
						<Button icon="ios-cloud-upload-outline">Upload files</Button>
				</Upload>
				<span>上传附件</span>(最多可上传三个附件，每个附件大小不超过5M)
			</p>
			<div class="fujian_back">
				<p v-for="(item,index) in fujian_back">{{ item.name }}<span @click="removeItem(index)"><img style="margin-top: 15px;" src="@/assets/img/quit.png" alt=""></span></p>
				<!-- <p>asdfasdfasdfsdfasda<span><img style="margin-top: 15px;" src="@/assets/img/quit.png" alt=""></span></p>
				<p>asdfasdfasdfsdfasda<span><img style="margin-top: 15px;" src="@/assets/img/quit.png" alt=""></span></p> -->
			</div>
			<!-- <p 	class="select_one"><span>是否可见</span><input type="radio" name="show"><b>项目对所有人可见&nbsp&nbsp&nbsp&nbsp</b><input type="radio" name="show"><b>仅对推荐对象可见</b></p>
			<p 	class="select_one"><span>是否申请严选</span><input type="radio" name="yanxuan"><b>是&nbsp&nbsp&nbsp&nbsp</b><input type="radio" name="yanxuan"><b>否</b></p> -->
			<button @click="submit">提交</button>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import P from '../../../api/personal'
export default {
	data(){
		return {
			projectlist:[
				{name:'大宗-项目交易',id:'1'},
				{name:'拿地-供土地',id:'2'},
				{name:'找钱-项目融资',id:'3'},
			],
			projectlist1:[
				{name:'大宗-金主求购',id:'1'},
				{name:'拿地-求土地',id:'2'},
				{name:'找钱-优选资金',id:'3'},
			],
			dataLoaded: false,
			FilterData:null,
			type:'1',
			post:{
				transfers:'',
				amounts:'',
				name:'',
				title:'',
				province:'',
				attributes:'',
				describe:'',
				strictSelection:'',
				orVisible:'',
				fileSize:'',
				funding:'',
			},
			lines:'',
			land:'',
			way:'',
			provinceList: [
                    {
                    	id:'11',
                        value: 'beijing',
                        label: '北京'
                    },
                    {
                    	id:'31',
                        value: 'shanghai',
                        label: '上海'
                    },
                    {
                    	id:'13',
                        value: 'hebei',
                        label: '河北'
                    },
				],
				cityList:[],


                model11: '',
				model12: [],
				img_back:[],
				fujian_back:[],
				
		}
	},
	components:{
	},
	computed:{
	  ...mapState([
		  'page'
	  ]),
	  ...mapGetters([
		  'auth'
	  ]),
	  c_line:function(){
		  if(this.lines){
			  return this.lines.join(',')
		  }
	  },
	  c_city:function(){
		  if(this.model12){
			  return this.model12.join(',')
		  }
	  },
	  c_img:function(){
		  if(this.img_back){
			  return this.img_back.join(',')
		  }
	  },
	  c_land:function(){
		  if(this.land){
			  return this.land.join(',')
		  }
	  },
	  c_way:function(){
		  if(this.way){
			  return this.way.join(',')
		  }
	  },
	  checka:function(){
		  return (this.type&&this.c_line&&this.c_city&&this.post.transfers&&this.post.amounts&&this.post.name&&this.post.title&&this.post.describe&&this.post.province)
	  },
	  checkb:function(){
		  return (this.type&&this.c_line&&this.c_city&&this.c_land&&this.post.province&&this.post.title&&this.post.describe)
	  },
	  checkc:function(){
		  return (this.type&&this.c_line&&this.c_city&&this.post.province&&this.post.title&&this.post.describe&&this.post.amounts&&this.c_way&&this.post.funding)
	  },
	  fileOne:function(){
		  return (this.fujian_back[0]?this.fujian_back[0].url:"")
	  },
	  fileTwo:function(){
		  return (this.fujian_back[1]?this.fujian_back[1].url:"")
	  },
	  fileThree:function(){
		  return (this.fujian_back[2]?this.fujian_back[2].url:"")
	  },
	},
	watch:{
		type:{
			async handler(newValue,oldValue){
				this.lines = ''
				this.land = ''
				this.model12 = ''
				this.model11 = ''
				this.post.name = ''
				this.post.title = ''
				this.post.amounts = ''
				this.post.province = ''
				this.post.transfers = ''
				this.post.describe = ''
				this.img_back = []
				this.fujian_back = []
				let res = await P.FilterData({"type":this.type})
					this.dataLoaded = true;
					this.FilterData = res.data
			},
			immediate: true,
			// deep:true,
		},
	},
	methods:{
		async setOption(v){
			// console.log(v)
			if(!v){return false}
			let el = this.provinceList.filter(c => c.label === v.label && c.value === v.value)[0]
			let res = await P.FindCity({"pid":el.id+""})
			this.cityList = []
			this.$nextTick(function(){
				this.cityList = res.data.area
			})
			
		},
		slide(e){
			if($('.select ul').height()>0){
				$('.select .ivu-icon').transition({rotate: '-180deg'})
        		$('.select ul').transition({height:'0px'},'snap')
			}else{
				$('.select .ivu-icon').transition({rotate: '180deg'})
	        	$('.select ul').transition({height:'auto'},'snap')
			}
		},
		handleSuccess (v,type){
			if(this.img_back.length>=5){
				alert('多了')
			}else{
				this.img_back.push(v.data.src)
			}
		},
		remove(i){
			this.img_back.splice(i,1)
		},
		handleSuccess1(v,f){
			if(this.fujian_back.length>=3){
				alert('多了')
			}else{
				this.fujian_back.push({name:f.name,url:v.data.src})
			}
		},
		removeItem(i){
			this.fujian_back.splice(i,1)
		},
		clear(){
			document.querySelector('.w-e-text').innerHTML = ''
		},
		async submit(){
			let text = document.querySelector('.w-e-text')
			if(text.innerText.length>1){
				this.post.describe = text.innerHTML
			}
			let arr = []
			this.FindProCity.list.forEach((e,i) => {
				e.list.forEach((el,i)=>{
					if(this.model12.includes(el.name)){
						arr.push(e.name) 
					}
				})
			});

			this.post.province = Array.from(new Set(arr)).join(',')
			if(this.type==1&&this.checka){
				let res = await P.OwnerProject(JSON.stringify({
					"uid":this.auth.uid+'',
					"lines":this.c_line+'',
					"city":this.c_city+'',
					"picture":this.c_img+'',
					"type":this.type+"",
					"fileOne":this.fileOne+'',     
					"fileTwo":this.fileTwo+'',
					"fileThree":this.fileThree+'',
					...(this.post)
				}))
			}else if(this.type==2&&this.checkb){
				 let res = await P.OwnerProject(JSON.stringify({
					"uid":this.auth.uid+'',
					"lines":this.c_line+'',
					"city":this.c_city+'',
					"picture":this.c_img+'',
					"type":this.type+"",
					"fileOne":this.fileOne+'',     
					"fileTwo":this.fileTwo+'',
					"fileThree":this.fileThree+'',
					...(this.post)
				}))
			}else if(this.type==3&&this.checkc){
				let res = await P.OwnerProject(JSON.stringify({
					"uid":this.auth.uid+'',
					"lines":this.c_line+'',
					"city":this.c_city+'',
					"way":this.c_way+'',
					"picture":this.c_img+'',
					"type":this.type+"",
					"fileOne":this.fileOne+'',     
					"fileTwo":this.fileTwo+'',
					"fileThree":this.fileThree+'',
					...(this.post)
				}))
			}
		},
	},
	// beforeRouteUpdate(to, from, next) {
    //   next()
    // },
	mounted(){
		setTimeout(function(){
			var E = window.wangEditor
			var editor = new E('#editor')
			editor.customConfig.menus = [
				'head',  // 标题
				'bold',  // 粗体
				'fontSize',  // 字号
				'fontName',  // 字体
				'italic',  // 斜体
				'underline',  // 下划线
				'strikeThrough',  // 删除线
				'foreColor',  // 文字颜色
				'backColor',  // 背景颜色
				// 'link',  // 插入链接
				'list',  // 列表
				'justify',  // 对齐方式
				// 'quote',  // 引用
				'emoticon',  // 表情
				// 'image',  // 插入图片
				'table',  // 表格
				// 'video',  // 插入视频
				// 'code',  // 插入代码
				// 'undo',  // 撤销
				// 'redo'  // 重复
			]
			editor.create();        
		},0)
	},
	async asyncData(ctx){
		let [
			FindProCity
		]
		= await Promise.all([
			P.FindProCity()
		])
		return {
			FindProCity: FindProCity.data
		}
	},
	created(){

	}
}	
</script>
<style>
	@import '@/assets/css/iview.css';
	div.select{
		margin-bottom: 30px;
	}
	div.select{
		font-size:16px;
		color: #666;
	}
	div.select span {
		width: 100px;
    	display: inline-block;
	},
	div.select span i{ 
		color: red;
	}
	.ivu-select-single .ivu-select-selection .ivu-select-selected-value{
		width: 100%;
	}
	.ivu-tag-text{
		width: auto!important;
	}
	.ivu-dropdown{
		display: inline-block;
		margin-right: 30px;
		width: 90px;
		margin-bottom: 20px;
	}
	.ivu-dropdown-menu {
		min-width: 80px;
	}
	.ivu-checkbox-checked .ivu-checkbox-inner {
		border-color: #2d8cf0;
		background-color: #2d8cf0;
		width: 14px!important;
	}
	.ivu-checkbox-inner{
		width: 14px!important;
	}
	.ivu-checkbox{
		width: 20px!important;
	}
	.ivu-select{
		width: 300px;
	}
	div.upload_btn{
		position: relative;
		width: 290px;
		height: 161px;
	}
	div.ivu-upload{
		position: absolute;
		left: 0;
		top: 0;
		width: 218px;
		height: 122px;
		opacity: 0;
	}
	.upload_btn img{
		width: 218px;
		height: 122px;
	}
	div.show_back{
		margin-bottom: 30px;
	}
	div.show_back p img{
		width: 218px;
		height: 122px;
		margin-right: 20px;
    	margin-bottom: 20px;
	}
	div.show_back p{
		display: inline-block;
	}
	div.show_back p span{
		position: absolute;
		right: 13px;
   		top: 4px;
		width: 20px!important;
		height: 20px;
		background: #fff;
		opacity: 0.5;
		border-radius: 10px;
	}
	div.show_back p span img{
		width: 12px;
    	height: 12px;
		margin: 4px;
	}
	.pub_p .ivu-upload{
		width: 84px!important;
		height: 32px!important;
	}
</style>