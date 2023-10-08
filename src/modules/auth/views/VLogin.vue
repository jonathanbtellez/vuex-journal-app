<template >
    <span class="login100-form-title p-b-41">
        Login
    </span>
    <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="onSubmit">

        <div class="wrap-input100 validate-input" data-validate="Enter username">
            <input v-model="userForm.email" class="input100" type="text" placeholder="Email" required>
            <span class="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input class="input100" v-model="userForm.password" type="password" placeholder="Password" required>
            <span class="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div class="container-login100-form-btn m-t-32">
            <button type="submit"  class="login100-form-btn">
                Login
            </button>

        </div>

        <div class="container-login100-form-btn m-t-32">
            <router-link :to="{ name: 'register' }">¿Don't you have an account?</router-link>
        </div>
    </form>
</template>
<script>
import { useRouter } from 'vue-router';
import useAuth from '../composables/useAuth';
import Swal from 'sweetalert2';
import { ref } from 'vue';

export default {
    setup() {
        const router = useRouter()

        const { signInUser } = useAuth()

        const userForm = ref({
            email: 'correo@correo.com',
            password: '123456',
        })

        return {
            userForm,
            onSubmit: async () => {
                const { status, message } = await signInUser(userForm.value)
                if (!status) return Swal.fire('Error', message, 'error')
                router.push({name: 'no-entry'})
            }
        }
    }

}
</script>
