<template>
<div class=" min-h-screen  flex items-center justify-center  bg-gradient-to-r from-purple-300 to-purple-200  items-center" >
    <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 shadow-2xl">
        <div class="text-center">
            <h2 class="mt-5 text-3xl font-bold text-gray-900">
                Form and validation
            </h2>
            <p class="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
        </div>
        <form @submit.prevent="saveData()">
            <from v-model="valid">
                <v-text-field v-model="form.firstname" label="First name" required :rules="firstnameRules"></v-text-field>
                <v-text-field v-model="form.lastname" label="Last name" required :rules="lastnameRules"></v-text-field>
                <v-text-field v-model="form.email" label="E-mail" required :rules="emailRules"></v-text-field>
                <v-text-field v-model="form.password" type="password" label="Password" required :rules="passwordRules"></v-text-field>
                <v-text-field v-model="form.verifypassword" type="password" label="Verify Password" required :rules="vertifypasswordRules"></v-text-field>
                <v-select v-model="form.gender" :items="gender" item-value="value" label="Gender" :rules="[v => !!v || 'Gender is required']"></v-select> <br>
                <button type="submit" class="w-full px-3 py-4 t bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                    <span class="text-white"> Submit</span>
                </button>
            </from>
        </form>
        <br>
        <div class="bg-gradient-to-r flex-auto  w-42 h-42  from-purple-200 to-purple-300    shadow-lg    rounded-lg">
            <div class="md:p-7 p-4">
                <h2 class="text-xl text-center text-white capitalize">Result</h2>
                <table class="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs text-white whitespace-nowrap p-4">Frist name</th>
                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs text-white whitespace-nowrap p-4">Last name</th>
                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs text-white whitespace-nowrap p-4">E-mail</th>
                            <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs text-white whitespace-nowrap p-4">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-gray-700 dark:text-gray-100" v-for="(items ,i) in showData " :key="i">
                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{items.firstname}}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{items.lastname}}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{items.email}} </td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{{items.gender}}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    validationMixin
} from 'vuelidate'
import {
    required,
    maxLength,
    email
} from 'vuelidate/lib/validators'
export default {
    data: () => {

        return ({
            form: {},
            gender: [
                'Male',
                'Female',
            ],
            showData: [{
                firstname: "",
                lastname: "",
                email: "",
                gender: "",
            }],
            firstnameRules: [
                v => !!v || 'Name is required',
            ],
            lastnameRules: [
                v => !!v || 'Name is required',
            ],
            passwordRules: [
                v => !!v || 'password is required',
            ],
            vertifypasswordRules: [
                v => !!v || 'vertify password is required',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        })

    },
    methods: {
        async saveData() {
            this.showData.push(this.form)
        }
    },
}
</script>
