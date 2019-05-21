<template>
    <div id="index">
        <h1 class="title">{{titile}}</h1>
        <ul>
            <li v-for="value in data" :key="value.key" @click="goto(value.name)">
                {{value.label}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            titile: "List",
            data:[
                {
                    label:'infinite scroll',
                    name:'infiniteScroll',
                    key:1,
                },
                {
                    label:'lazy load',
                    name:'lazyLoad',
                    key:2,
                },
                {
                    label:'vueX',
                    name:'vuex',
                    key:3,
                }
            ],
        }
    },
    methods: {
        goto(name) {
            this.$router.push(name);
        },
    }
};
</script>
<style lang="less" scoped>
    #index{
        font-size:14px;
        .title{
            text-align: center;
        }
    }
</style>




