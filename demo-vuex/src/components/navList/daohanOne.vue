<template>
    <div>
        <div class="row-one">
            <h2 class="title">全国改性料通讯录</h2>
        </div>
        <div class="row-two">
            <label for="">名称：
                <el-input v-model="item.name" class="content" placeholder="请输入内容"></el-input>
            </label>
            <label for="">价格：
                <el-input v-model="item.price" class="content" placeholder="请输入内容"></el-input>
            </label>
            <el-button type="primary" class="addbtn" @click="invokePushItems(item)">加入收藏列</el-button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'daohanOne',
    data () {
        return {
            item:{
                id:'01',
                name: '苹果',
                price:'345'
            },
        }
    },
    computed:{
        // newItem(){
        //     var newItem = this.item;
        //     newItem.price = newItem.price+'元'
        //     return newItem;
        // },
    },
    watch: {
        item: {
            handler(newContent, oldContent) {
                console.log(newContent)
            },
            deep: true,
            immediate: true,
        }
    } ,
    mounted() {
        
    },
    methods:{
            ...mapActions('collection',[ 
                'invokePushItems'
            ])
        }
    }
</script>
<style scoped>
    .row-two{
        padding:20px 40px;
    }
    .row-two .content{
        width:160px;
        margin-right:40px;
    }
</style>



