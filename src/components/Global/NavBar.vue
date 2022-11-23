<template>
    <nav class="navbar z navbar-expand-lg shadow-sm py-2 light-background">
        <div class="container">
            <a class="navbar-brand ms-2" href="#"><img class="width img-fluid" alt="Wakeb logo" src="../../assets/logo.png"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start light-background width-canvas" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                <div class="offcanvas-header shadow-sm">
                    <a class="navbar-brand d-lg-none d-xl-none d-xxl-none" href="#"><img class="width img-fluid" alt="Wakeb logo" src="../../assets/logo.png"></a>
                    <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body justify-content-end">
                    <ul class="navbar-nav d-flex gap-4 me-3 mb-2 mb-lg-0 align-items-center">
                        <li class="nav-item">
                            <router-link class="text-capitalize fw-semibold fs-6" :to="{ name: 'home' }">Home</router-link>
                        </li>
                        <li class="nav-item login ms-0 ms-lg-4">
                            <router-link class="text-capitalize fw-semibold fs-6" :to="{ name: 'login' }">Log in</router-link>
                        </li>
                        <li class="nav-item sign">
                            <router-link class="text-capitalize fw-semibold fs-6" :to="{ name: 'sign' }">Sign Up</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
@import '../../sass/global/variables';
.width {
    max-width: 8rem;
    @media (min-width: 576px) {
        max-width: 10rem;
    }
}
.z {
    z-index: 1000;
}
.width-canvas {
    width: 100%;
    @media (min-width: 576px) {
        width: 40%;
    }
}

.login {
    color: $first-main-color;
    padding: 0.3rem 1.1rem;
    border-radius: 3rem;
    border: 0.11rem solid $main-color;
    margin-left: 2rem;

    &:hover {
        border-color: $first-main-color;
        transition: $main-transition;
    }
}

.sign {
    background: $second-main-color;
    padding: 0.3rem 1.1rem;
    border-radius: 3rem;
    border: 0.11rem solid $second-main-color;

    &:hover {
        // border-color: $first-main-color;
        transition: $main-transition;
    }

}
</style>
