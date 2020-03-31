<template>
</template>
<script>
import User from '../../helpers/User'
export default {
    name: "Logout",
    created(){
        User.logout();
    }
}
</script>