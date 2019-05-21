<template>
    <div id="lazyLoad">
        <h1>lazyLoad</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        console.log(this.$store.state.changableNum)
    }
}
</script>
<style lang="less" scoped>
    #lazyLoad{
        font-size:12px;
    }
</style>
