<script>
import axios from 'axios';
import store from '../../store';
export default{
    name:'TypeList',
    data(){
        return{
            store,
            currentType:'',
            types:[]

        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiUrl}/types`)
                .then((response) => {
                    console.log(response);
                    this.types = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        changeType(){
            console.log(this.currentType);
            this.$router.push({name:'type', params:{id:this.currentType}});
        }
    },
    created(){
        this.getTypes();
    }
}
</script>
<template>
    <select class="form-select w-25" @change="changeType" v-model="currentType" v-if="types.length>0">
        <option :value="type.id" v-for="type in types">{{ type.type }}</option>
    </select>
</template>