<template>
<div class="user">
    <span class="plus"  @click="showModal"><i class="fas fa-plus"></i></span>
    <div class="table">
    <table class="table__data"> 
        <thead class="table__header">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>IDENTIFICATION</th>
                <th>PHONE</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody class="table__body">
            <tr v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.identification}}</td>
                <td>{{user.phone}}</td>
                <td>
                    <!--<button class="btn btn--register" @click="showModal"><i class="fas fa-save"></i></button>-->
                    <button class="btn btn--edit"><i class="fas fa-marker"></i></button>
                    <button class="btn btn--delete"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <div class="form__container" :class="{show_modal__container: showContainer}">
    <form @submit.prevent="register" class="user__register" :class="{show__modal: showForm}">
        <div class="title">
            <h1>User Register</h1>
        </div>
        <div class="inputs">
            <input type="text" placeholder="Name" v-model="user.name">
            <input type="text" placeholder="Email" v-model="user.email">
            <input type="text" placeholder="Identification" v-model="user.identification">
            <input type="text" placeholder="Phone" v-model="user.phone">
        </div>
        <div class="wrap-btn__save">
            <button class="btn-form btn--save">Register</button>
            <button class="btn-form btn--cancel" @click="deleteModal">Cancel</button>
        </div>
    </form>
    </div>
</div>
</template>

<script>
import UserService from "../services/user.service.js";
import User from "../models/user.js";
import userService from '../services/user.service.js';

export default {
    name: "User",
    data(){
        return {
            users: [],
            user: new User({}),
            showForm: "",
            showContainer: ""
        }
    },
    created(){
        UserService.getUsers()
        .then(data => {
            this.users = data;
        });
    },
    methods:{
        register(){
            UserService.create(this.user);
            console.log(userService.create);
        },
        showModal(){
            this.showContainer = "show_modal__container"
            this.showForm = "show__modal"
        },
        deleteModal(){
            this.showForm = ""
            setTimeout(()=>{
                this.showContainer = ""
            },400)
        }
    }
}
</script>

<style scoped>
    .plus{
        position: relative;
        top: 15px;
        right: -82.8%;
        padding: 7px 9px;
        background: #198754;
        border-radius: 2px;
        color: #fff;
        cursor: pointer;
        font-size: 19px;
    }
    /* start of table data styles*/
    .table{
        width: 70%;
        margin: 0 auto;
        margin-top: 30px;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 3px;
    }
    .table__data{
        width: 100%;
        border-collapse: collapse;
    }
    .table__header{
        border-bottom: 2px solid #333333;
    }
    .table__header tr th{
        padding: 10px;
        text-align: justify;
    }
    .table__body tr td{
        padding: 10px;
        text-align: justify;
    }
    .btn{
        margin-right: 5px;
        padding: 7px 7px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 2px;
        color: #fff;
    }
    .btn--edit{
        background: #0d6efd;
    }
    .btn--delete{
        background: #dc3545;
    }
    /*end of table styles*/
    /*start of register form styles*/
    .form__container{
        opacity: 0;
        visibility: hidden;
        position: fixed;
        top: 0;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .8s;
    }
    .user__register{
        width: 20%;
        margin: 0 auto;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 4px;
        transition: .8s;
        transform: translateY(-210%);
    }
    .show__modal{
        transform: translateY(0%);
    }
    .show_modal__container{
        opacity: 1;
        visibility: visible
    }
    .title{
       padding: 5px;
       color: black;
       border-bottom: 2px solid #ccc;
       margin-bottom: 8px;
    }
    .title h1{
        text-align: center;
        font-weight: 100;
    }
    .inputs{
        padding: 5px;
    }
    .inputs input{
        width: 100%;
        margin-bottom: 8px;
        padding: 5px;
        outline: none;
        border: 2px solid #ccc;
        border-radius: 3px;
        color: #333333;
    }
    /*end of register form styles */
    .open-close__form-container{
        opacity: 1;
        visibility: "visible";
    }
    .wrap-btn__save{
        border-top: 1px solid #ccc;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    }
    .btn-form{
        padding: 8px 5px;
        width: 100%;
        border: none;
        cursor: pointer;
        border-radius: 3px;
        outline: none;
        transition: .4s ;
    }
    .btn--save{
        width: 49%;
        background: #198754;
        margin-bottom: 3px;
    }
    .btn--save:hover{
        color: #fff;
    }
    .btn--cancel{
        background:  #cd3545;
        width: 49%;
        margin-bottom: 3px;
    }
    .btn--cancel:hover{
        color: #fff;
    }
</style>