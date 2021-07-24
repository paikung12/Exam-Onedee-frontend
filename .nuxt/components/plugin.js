import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Froms: () => import('../../components/Froms.vue' /* webpackChunkName: "components/froms" */).then(c => wrapFunctional(c.default || c)),
  Inspire: () => import('../../components/Inspire.vue' /* webpackChunkName: "components/inspire" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  Pokemon: () => import('../../components/Pokemon.vue' /* webpackChunkName: "components/pokemon" */).then(c => wrapFunctional(c.default || c)),
  PokemonList: () => import('../../components/PokemonList.vue' /* webpackChunkName: "components/pokemon-list" */).then(c => wrapFunctional(c.default || c)),
  Shop: () => import('../../components/Shop.vue' /* webpackChunkName: "components/shop" */).then(c => wrapFunctional(c.default || c)),
  Tutorial: () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c)),
  Test: () => import('../../components/test.vue' /* webpackChunkName: "components/test" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
