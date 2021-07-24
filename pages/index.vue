<template>
<div>
    <v-card class="bg-gradient-to-r from-purple-300 to-purple-200 " >
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 basil--text">
                <v-img max-height="150" max-width="250" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"></v-img>
            </h1>
        </v-card-title>
        <v-tabs centered background-color="transparent">
            <v-tab>Froms</v-tab>
            <v-tab>Pokemon's</v-tab>
            <v-tab>Function</v-tab>
            <v-tab-item>
                <Froms />
            </v-tab-item>
            <v-tab-item>
                <Pokemon />
            </v-tab-item>
            <v-tab-item>
                <Shop />
            </v-tab-item>
        </v-tabs>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
        }
    },
}
</script>

<style>
/* Helper classes */
.basil {
    background-color: #FFFBE6 !important;
}

.basil--text {
    color: #356859 !important;
}
</style>
