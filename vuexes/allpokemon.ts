import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from "@/plugins/axios"
import {Core} from './core'
import _ from "lodash"

@Module
class AllpokemonModule extends VuexModule{

    public async getallpokemon(){
        return await Core.getHttp('/pokemon/1')
    }

}


import store from "~/vuexes"
export const Allpokemon = new AllpokemonModule({store, name: "Allpokemon"})