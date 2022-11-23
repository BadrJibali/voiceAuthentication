<template>
    <section class="w-auto">
        <img class="img-fluid" src="../../assets/background/a.png" alt="sound">
        <!-- <div class="robot">
            <p class="fw-bold animate">I can know deepfake voices</p>
        </div> -->
    </section>
</template>

<script>
export default {
    name: 'robot'
}
</script>

<style lang="scss" scoped>
@import '../../sass/global/variables';

.robot {
    background: $second-main-color;
    padding: 0.5rem;
    width: 13rem;
    border-radius: 1rem 1rem 3rem 3rem;
    text-align: center;
    font-size: 0.8rem;

    p {
        margin: 0;
    }
}
</style>