<template>
<div class="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-purple-300 to-purple-200 gap-2">
<div class="pt-5 pl-96 ">
    <div class="list">
        <article v-for="(pokemon, index) in pokemons" :key="'poke'+index" @click="setPokemonUrl(pokemon.url)">
            <img :src="imageUrl + pokemon.id + '.png'" width="96" height="96" alt="">
            <h3>{{ pokemon.name }}</h3>
        </article>
        <div ref="infinitescrolltrigger"></div>
    </div>
</div>
</div>
</template>

<script>
export default {
    props: {
        imageUrl: {
            default: 'pokemonUrl'
        },
        apiUrl: {
            default: 'apipekemon'
        }

    },
    data: () => {
        return {
            pokemons: [],
            nextUrl: '',
            currentUrl: ''
        }
    },
    methods: {
        async fetchData() {
            let req = await new Request(this.currentUrl);
            fetch(req)
                .then((resp) => {
                    if (resp.status === 200)
                        return resp.json();
                })
                .then((data) => {
                    this.nextUrl = data.next;
                    data.results.forEach(pokemon => {
                        pokemon.id = pokemon.url.split('/')
                            .filter(function (part) {
                                return !!part
                            }).pop();
                        this.pokemons.push(pokemon);
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0 && this.nextUrl) {
                        this.next();
                    }
                });
            });
            observer.observe(this.$refs.infinitescrolltrigger);
        },
        next() {
            this.currentUrl = this.nextUrl;
            this.fetchData();
        },
        setPokemonUrl(url) {
            this.$emit('setPokemonUrl', url);
        }
    },
    created() {
        this.currentUrl = this.apiUrl;
        this.fetchData();
    },
    mounted() {
        this.scrollTrigger();
    }
}
</script>

<style lang="scss" scoped>
.list {
    display: grid;
    grid-template-columns: repeat(6, minmax(150px, 8fr));
    grid-gap: 25px;
    width: 100%;
    max-width: 510px;

    article {
        height: 150px;
        background-color: #f5f7f8;
        text-align: center;
        text-transform: capitalize;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
            0 10px 10px rgba(0, 0, 0, .2);

        h3 {
            margin: 0;
        }
    }
}
</style>
