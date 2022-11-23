<template>
    <Section class="head_form">
        <h3 class="mt-5 text-center fw-bold">Login with your voice</h3>
        <form @submit.prevent="onPost" class="d-flex flex-column justify-content-center align-items-center m-4">
            <div class="mb-3 w-100">
                <label for="exampleInput" class="form-label">Your ID</label>
                <input :class="{ error: $v.userID.$error }" v-model="userID" type="text"
                    class="form-control rounded-pill fs-6 shadow-sm" placeholder="Enter Your ID"
                    @blur="$v.userID.$touch()">
                <div class="" v-if="$v.userID.$error">
                    <p class="m-0 fs-7 text-center error-text" v-if="!$v.userID.required">ID is required.</p>
                    <p class="m-0 fs-7 text-center error-text" v-if="!$v.userID.minLength">Your ID is to short, it must be
                        {{ $v.userID.$params.minLength.min }} letters.</p>
                </div>
            </div>
            <!-- <div class="mb-3 w-100">
                <label for="exampleInputPassword1" class="form-label">Your Password</label>
                <input type="password" class="form-control rounded-pill fs-6 shadow-sm" placeholder="Enter Your Password" id="exampleInputPassword1">
            </div> -->
            <div class="d-flex flex-column justify-content-center align-items-center mt-3 w-100">
                <vue-record-audio @result="onResult" mode="press" />
            </div>
            <button type="submit" class="btn rounded-pill mt-4 first-main-background">Submit</button>

            <p class="m-0 mt-2 fs-7 text-center susses-text" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
            <p class="m-0 fs-7 text-center error-text" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p class="m-0 fs-7 text-center error-text" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
    </Section>
</template>

<script>
import PostData from '@/api/PostData.js';
import { required, minLength } from 'vuelidate/lib/validators';
import axios from 'axios'

export default {
    name: 'login-form',
    data() {
        return {
            userID: null,
            submitStatus: null,
            url: []
        }
    },
    validations: {
        userID: {
            required,
            minLength: minLength(3)
        }
    },
    methods: {
        // To Reset Data 
        resetData() {
            this.userID = null
        },
        // To Get Audio File URL
        onResult(data) {
            console.log('The blob data:', data);
            console.log('Downloadable audio', window.URL.createObjectURL(data))
            var audio_url = window.URL.createObjectURL(data)
            var audio = new Audio(audio_url)
            audio.play()
            this.url.push(audio_url)
            // console.log(this.url)

            // To Download Audio File 
            axios({
                url: audio_url,
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');
                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'file.wav');
                document.body.appendChild(fileLink);
                fileLink.style = "display: none";
                fileLink.click();
                // document.body.removeChild(fileLink);
            });
        },

        // To Validate Form
        onPost() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                PostData.postData({ userID: this.userID, path: this.url[0] })
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    this.submitStatus = 'OK'
                }, 1000)
                setTimeout(() => {
                    this.submitStatus = null
                }, 5000)
            }
            this.$v.$reset();
            this.resetData();
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/global/variables';
@import '../../sass/global/errors';

form {
    background: #29abe226;
    border-radius: 16px;
    box-shadow: 0 4px 30px #0000001a;
    backdrop-filter: blur(3.4px);
    -webkit-backdrop-filter: blur(3.4px);
    border: 1px solid #29abe208;
    padding: 1rem 0.8rem 2rem 0.8rem;
    // min-width: fit-content;
    min-height: 19rem;
    height: 100%;
    margin: 0;

    @media (min-width: 768px) {
        min-width: 14rem;
    }
    @media (min-width: 576px) {
        padding: 2rem 1.5rem 3rem 1.5rem;
    }

    h3 {
        color: $main-color;
    }

    label {
        font-size: 0.9rem;
        font-weight: 500;
        margin-left: 0.4rem;
        color: $main-color;
    }

    input {
        padding: 0.75rem 1.3rem;
        font-size: 1rem;

        &::placeholder {
            color: #e2e2e2;
        }
    }

    button {
        padding: 0.6rem 1.3rem;
        color: #ffffff;
        width: 10rem;

        &:hover,
        &:active {
            background: darken($first-main-color, 5%);
            color: #ffffff;
        }
    }
}
</style>