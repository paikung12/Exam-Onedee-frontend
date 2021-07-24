import { wrapFunctional } from './utils'

export { default as Froms } from '../../components/Froms.vue'
export { default as Inspire } from '../../components/Inspire.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Pokemon } from '../../components/Pokemon.vue'
export { default as PokemonList } from '../../components/PokemonList.vue'
export { default as Shop } from '../../components/Shop.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Test } from '../../components/test.vue'

export const LazyFroms = import('../../components/Froms.vue' /* webpackChunkName: "components/froms" */).then(c => wrapFunctional(c.default || c))
export const LazyInspire = import('../../components/Inspire.vue' /* webpackChunkName: "components/inspire" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPokemon = import('../../components/Pokemon.vue' /* webpackChunkName: "components/pokemon" */).then(c => wrapFunctional(c.default || c))
export const LazyPokemonList = import('../../components/PokemonList.vue' /* webpackChunkName: "components/pokemon-list" */).then(c => wrapFunctional(c.default || c))
export const LazyShop = import('../../components/Shop.vue' /* webpackChunkName: "components/shop" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyTest = import('../../components/test.vue' /* webpackChunkName: "components/test" */).then(c => wrapFunctional(c.default || c))
