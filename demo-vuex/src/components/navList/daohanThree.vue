<template>
    <!-- <div>
        <img src="../../assets/car3.jpg" alt="">
        <div class="imgbox"></div>
    </div> -->
    <div>
        <div class="row-one">
            <h2 class="title">调查计划</h2>
        </div>
        <div class="row-two">
            <el-radio-group v-model="labelPosition" size="small">
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
            </el-radio-group>
            <div style="margin: 20px;"></div>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="row-three">
            <el-button type="primary" @click="created">立即创建</el-button>
            <el-button @click="reset">重置</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    computed:{
        
    },
    methods:{
        reset(){
            for (const key in this.formLabelAlign) {
                if (this.formLabelAlign.hasOwnProperty(key)) {
                    this.formLabelAlign[key] = ''; 
                }
            }
        },
        created(){
            console.log(this.formLabelAlign)
        }
    }
}
</script>
<style scoped>
    .row-two{
        padding:20px 40px;
    }
    .row-three{
        text-align: center;
    }
    /* .imgbox{
        height:300px;
        width:500px;
        background: url('../../assets/car4.jpg');
    } */
</style>
