<template>
<div class="user">
    <ul>
        <li v-for="(user, index) in users" :key="index">
           {{user.name}}
        </li>
    </ul>
</div>
</template>

<script>
import UserService from "../services/user.service.js";

export default {
    name: "User",
    data(){
        return {
            users: []
        }
    },
    created(){
        UserService.getUsers()
        .then(data => {
            this.users = data;
        });
    }
}
</script>

<style>

</style>