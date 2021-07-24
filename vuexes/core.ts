import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from "@/plugins/axios"
import _ from "lodash"

@Module
class CoreModule extends VuexModule{
    //state
    async getHttp(url:string):Promise<any>{
        return await axios.get(url).then((r)=>{return r.data}).catch((e)=>{return e.response.data})
    }

    async postHttp(url:string,form:object):Promise<any>{
        return await axios.post(url,form).then((r)=>{return r.data}).catch((e)=>{
            console.log(e)
            return e.response.data
        })
    }

    async putHttp(url:string,form:object):Promise<any>{
        return  await axios.put(url,form).then((r)=>{return r.data}).catch((e)=>{
            return e.response.data
        })
    }
    
    async deleteHttp(url:string):Promise<any>{
        return await axios.delete(url).then((r)=> {return r.data}).catch((e)=>{
            return e.response.data
        })
    }
}

import store from "~/vuexes"
export const Core = new CoreModule({store, name: "Core"})