<template>
    <div>
        <div class="row-one">
            <h2 class="title">产品列表</h2>
        </div>
        <div class="row-two">
            <el-table :data="arrList" style="width: 100%">
                <el-table-column prop="name" label="名称"  width="180">
                </el-table-column>
                <el-table-column prop="price" label="价格" width="180">
                </el-table-column>
                <el-table-column prop="id" label="ID">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
 export default {
    name: 'daohanTwo',
    data() {
        return {

        }
    },
    computed:{
        // ...mapState({  //用mapState来获取collection.js里面的state的属性值
        //    arrList:state=>state.collection.collects
        // }),
        ...mapGetters('collection',{ //用mapGetters来获取collection.js里面的getters
            arrList:'renderCollects'
        }),
    }
}
</script>
<style scoped>
    .row-two{
        padding:20px 40px;
    }
</style>
