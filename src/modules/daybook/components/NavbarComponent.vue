<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png" height="24" alt="vue logo" class="d-inline-block align-text-top mx-2">
            {{ userName }}
        </a>
        <div class="d-flex">
            <button class="btn btn-outline-info mx-2" @click="onLogOut">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>
<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router';
export default {
    setup() {

        const router = useRouter()
        const { userName, logOut } = useAuth();

        return {
            userName,
            onLogOut: () => {
                logOut()
                router.push({ name: 'login' })
            }
        }
    }
}
</script>