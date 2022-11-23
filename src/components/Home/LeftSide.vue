<template>
    <section class="">
        <form @submit.prevent="onPostFile" class="left-side">
            <div class="center-y d-flex flex-column justify-content-center align-items-center w-100">
                <label for="inputTag">
                    Upload Voice
                </label>
                <input id="inputTag" type="file" :value="fileUP" @input="setName($event.target.value)">
                <p class="my-1 fw-bold" v-text="_fileName"></p>
                <div class="" v-if="$v.fileUP.$error">
                    <p class="m-0 fs-7 text-center error-text" v-if="!$v.fileUP.required">Your voice file is required.</p>
                </div>
                
                <button type="submit" class="btn rounded-pill mt-3 first-main-background">Upload</button>
                <p class="m-0 mt-2 fs-7 text-center susses-text" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                <p class="m-0 fs-7 text-center error-text" v-if="submitStatus === 'ERROR'">Please choose a voice file.</p>
                <p class="m-0 fs-7 text-center error-text" v-if="submitStatus === 'PENDING'">Sending...</p>

                <div class="w-100 text-center my-3">
                    <!-- <p class="pt-2 fw-bold susses-text">Voice is not fake</p>
                    <p class="pt-2 fw-bold error-text">Voice is fake</p> -->
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import PostData from '@/api/PostData.js';
import { required } from 'vuelidate/lib/validators';

export default {
    name: 'left-side',
    data() {
        return {
            fileUP: null,
            submitStatus: null,
            _fileName: null
        }
    },
    validations: {
        fileUP: {
            required,
        }
    },
    methods: {
        // To Reset Data 
        resetData() {
            this.fileUP = null
            this.submitStatus = null
        },
        setName(value) {
            this.fileUP = value
            console.log(this.fileUP)
            this.$v.fileUP.$touch()
        },
        // To Validate Form
        onPostFile() {
            var fileName = this.fileUP.replace(/^.*[\\\/]/, '');
            this._fileName = fileName
            const formData = new FormData();
            formData.append('path', this.fileUP);
            const headers = { 'Content-Type': 'multipart/form-data' };
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                PostData.postFile( formData, { headers }).then((res) => {
                    res.data.files; // binary representation of the file
                    res.status; // HTTP status
                    this.submitStatus = 'PENDING'
                    setTimeout(() => {
                        this.submitStatus = 'OK'
                    }, 1000)
                    setTimeout(() => {
                        this.submitStatus = null
                        this._fileName = null
                    }, 5000)
                })
            }
            this.$v.$reset();
            this.resetData();
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../sass/global/variables';
@import '../../sass/global/errors';
.left-side {
    background: #29abe226;
    border-radius: 16px;
    box-shadow: 0 4px 30px #0000001a;
    backdrop-filter: blur(3.4px);
    -webkit-backdrop-filter: blur(3.4px);
    border: 1px solid #29abe208;
    padding: 2.8rem 2.5rem;
    min-width: 16rem;
    min-height: 13rem;
    width: 100%;

    .center-y {

        label {
                position: relative;
                width: 200px;
                height: 50px;
                border-radius: 6rem;
                background: linear-gradient(40deg, $first-main-color, $second-main-color);
                box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-weight: bold;
                cursor: pointer;
                transition: transform .2s ease-out;
            }
            input {
                opacity: 0;
                    width: 0.1px;
                    height: 0.1px;
                    position: absolute;
            }
        button {
            color: $light-text-color;
            transition: $main-transition;
            font-size: 0.9rem;
            padding: 0.6rem 2rem;

            &:hover {
                background: darken($first-main-color, 7%);
            }
        }
    }
}
</style>