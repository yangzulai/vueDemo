<template>
    <div class="footerbar">
        <ul class="ul clearfix">
            <router-link to="daohanOne"><li>导航1</li></router-link>
            <router-link to="daohanTwo"><li>导航2</li></router-link>
            <router-link to="daohanThree"><li>导航3</li></router-link>
            <router-link to="daohanFour"><li>导航4</li></router-link>
            <router-link to="daohanFive"><li>导航5</li></router-link>
        </ul>     
    </div>
</template>

<script>
    export default{}
</script>

<style scoped>
    .footerbar{
        width: 100%;
        position: fixed;
        bottom: 0px;
        left:0px;
        background: #58bc58;
    }
    li{
        width: 20%;
        height: 80px;
        text-align: center;
        float: left;
        line-height: 80px;
        color:#fff;
    }
</style>

