<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height:100%;
    }
    body,h1,h2,h3,h4,h5,p,a,input,img,ul,li,ol,dl,dt,dd,div{
        padding:0;
        margin:0;
    }
    html,body{
        height: 100%;
        width: 100%;
    }
    ul,ol{
        list-style:none;
    }
    img{
        display:block;
        border:0;
    }
    input,button,select{
        /*去掉高亮*/
        outline:none;
    }
    header,footer,section,main,nav{
        display:block;
    }
    a{
        text-decoration:none;
        color:#0dc441;
    }
    i{
        font-style:normal;
    }
    *{
        box-sizing:border-box;
    }
    .clearfix:after{
        content:"";
        display: block;
        height: 0;
        clear:both;
        overflow:hidden;
        visibility:hidden;
        /*兼容ie*/
        zoom:1;
    }
    a:hover{
        text-decoration: none;
    }
</style>
