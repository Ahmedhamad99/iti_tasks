<template>
  <div class="container mt-4">
    <AppHeader />
    <div class="row">
      <AppLinks class="col-3 mt-3"/>
     <div class="col-8">
      <AppBody v-if="!showModal" :students="students" @removestudent="removestudent" @close="showModal=true"/>
      <AppModel v-else @addStudent="addStudent" @close="showModal=false" />
    </div>
    </div>
    
    
    <AppFooter/>
  </div>
 
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppBody from './components/AppBody.vue';
import AppModel from './components/AppModel.vue';
import AppLinks from './components/AppLinks.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppBody,
    AppModel,
    AppLinks
  },
  data:()=> ({
    students: [
                        { id: 100, name: 'Elshaar', city: 'Meet Ghamr' },
                        { id: 200, name: 'Ahmed', city: 'Cairo' },
                        { id: 300, name: 'Mohamed', city: 'Alex' },
                        { id: 400, name: 'Moustafa', city: 'Mahala' }
                    ],
                    showModal: false 
  }),
  methods:{
    addStudent(student)
    {
      this.students.push(student);
      this.showModal=false;
    },
    removestudent(index)
    {
      this.students.splice(index,1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
