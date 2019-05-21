<template>
    <div class="main">
        <h1 class="title">{{title}}</h1>
        <div class="content">
            <div>
                <el-button type="primary" @click="add">+</el-button>
                <router-link to="vuex"><el-button type="primary">GO</el-button></router-link>
            </div>
            <div>{{this.$store.state.changableNum}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'vueX-A',
        }
    },
    mounted(){
        
    },
    methods:{
        add(){
            //  this.$store.commit('newNum',1)
            this.$store.dispatch('getNewNum',1)
        }
    }
}
</script>
<style lang="less" scoped>
    .title{
        font-size:30px;
        text-align: center;
    }
    .content{
        text-align: center;
    }
    .inputone{
        width: 200px;
    }
</style>


