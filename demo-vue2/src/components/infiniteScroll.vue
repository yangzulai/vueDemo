<template>
    <div id="infiniteScroll">
        <!-- 下拉加载 -->
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[1,2,3,4,5,6,7,8],
            loading:false,
        }
    },
    mounted(){
        
    },
    methods:{
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
        }
    }
}
</script>
<style lang="less" scoped>
    #infiniteScroll{
        font-size:12px;
    }
</style>




