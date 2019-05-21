<template>
    <div class="outebox">
        <div class="start-content">
            <div class="content-outbox">
                <router-view/>
            </div>
        </div>
        <footerBar v-if="isShow" class="footer-bar"/>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
import footerBar from '@/components/common/footerBar';
export default {
    name: 'start',
    components:{
        footerBar:footerBar
    },
    data(){
        return {
            msg:'',
        }
    },
    computed:{
        //...mapState({  
            //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
            //注意这些与上面的区别就是state.footerStatus,
            //里面定义的showFooter是指footerStatus.js里state的showFooter
            //isShow:state=>state.footerStatus.showFooter 
        //}),
        //你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
        ...mapGetters('footerStatus',{ 
            //footerStatus指的是modules文件夹下的footerStatus.js模块
            //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
            //第二个isShow是对应的footerStatus.js里的getters里的isShow
            isShow:'isShow' 
        })
    },
    watch:{
        // $route(to,from){
        //     if(to.name=='daohanFive'){
        //         this.$store.dispatch('footerStatus/hideFooter') 
        //     }else{
        //         this.$store.dispatch('footerStatus/showFooter') 
        //     }
        // }
    }
}
</script>
<style>
    .outebox{
        height:100%;
    }
    .title{
        text-align: center;
        line-height:60px;
    }
    .start-content{
        padding-bottom: 80px;
        height:100%;
    }
    .content-outbox{
        height:100%;
        overflow: auto;
    }
    .footer-bar{
        z-index: 9999;
    }
</style>
