<template>
    <section class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <LoginForm/>
            </div>
        </div>
    </section>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue';

    export default {
        name: 'login',
        components: {
            LoginForm
        },
    }
</script>

<style lang="scss" scoped>

</style>