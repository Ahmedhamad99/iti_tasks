<template>
  <div class="container border border-info">

    <h2>Post Title</h2>

    <div class="container container-boreder w-50" v-if="!submited">
      <label for="" class="ml-0" style="margin-left: 0;">Title</label>
    <AppTextInput  v-model="post.title" placeholder="Title"/>
    <label for="">Category</label>
    <AppDropdownSelect v-model="post.category" :options="categories" placeholder="Category"/>
    <label for="inputPassword5" class="form-label">Series</label>

    <AppDropdownSelect v-model="post.edition" :options="series" placeholder="Series"/>
    <label for="">Media Options</label>
    <AppCheckbox v-model="post.networks" :options="['facebook','x','youtube']"/>
    <button class="btn btn-primary mt-2 mb-2" @click="submitpost">Submit</button>
    </div>
    <div v-else class="container border-info">
      <h4>Submited</h4>
      <fieldset disabled>

      <p class="text-dark">Title:<input type="text" :value="post.title " class="form-control"></p>
      <p class="text-dark">Category:<input type="text" :value=" post.category" class="form-control"></p>
      <p class="text-dark">Edition:<input type="text" :value="post.edition" class="form-control"></p>
      <p class="text-dark">Networks:<input type="text" :value="post.networks.join(',')" class="form-control"></p>
      </fieldset>
      <button class="btn btn-secondary mb-2" @click="submited=false">Back</button>
    </div>
  </div>
</template>

<script>

import AppTextInput from './components/AppTextInput.vue';
import AppDropdownSelect from './components/AppDropdownSelect.vue';
import AppCheckbox from './components/AppCheckbox.vue';


export default {
  name: 'App',
  components: {
   AppCheckbox,
   AppDropdownSelect,
   AppTextInput
  },
  data:()=>({
    categories:['Design','Network','Database','Development'],
    series:['First','second','Third'],
    post:{title:'',category:'',edition:'',networks:[]},
    submited:false
  }),
  methods:{
    submitpost(){
      this.submited = true;
    }
  }
}
</script>

<style>
#app 
{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
