<template>
<div id="nav">
    <div id="wrap__nav">
        <router-link class="nav__log" to="/">MANAGEMENT S.A.S</router-link>
        <ul class="nav__list">
            <li><router-link to="/" class="nav__link">Products</router-link> </li>
            <li><router-link to="/user" class="nav__link">Users</router-link></li>
            <li><router-link to="/" class="nav__link">Tasks</router-link></li>
            <li><router-link to="/" class="nav__link">Categories</router-link></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
   #nav{
       width: 100%;
       border-bottom: 1px solid #ccc;
       box-shadow: 1px 0 2px #ccc;
   }
   #wrap__nav{
       width: 80%;
       height: 50px;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
   .nav__log{
       font-size: 20px;
       color: #333333;
       text-decoration: none;
   }
   .nav__list{
       display: flex;
       list-style: none;
   }
   .nav__link{
       text-decoration: none;
       font-size: 20px;
       margin-left: 10px;
       color: #333333;
       padding: 15px;
   }
   .nav__link:hover{
       background: #ccc;
       transition: all .8s;
   }
</style>