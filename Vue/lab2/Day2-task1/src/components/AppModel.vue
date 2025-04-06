<template>
    
        <div class="container">
            
                <h4>Add Student</h4>
                <input v-model="newstudent.id" class="form-control mb-2" placeholder="ID">
                <input v-model="newstudent.name" class="form-control mb-2" placeholder="Name">
                <input v-model="newstudent.city" class="form-control mb-2" placeholder="City">
                <button class="btn btn-success" @click="submitstudent">OK</button>
                <button class="btn btn-secondary" @click="$emit('close')">Cancel</button>

        </div>
</template>


<script>
export default{
    name:'AppModel',
    data:()=>({
        newstudent:{id:'',name:'',city:''}
    }),
    methods:{
        submitstudent()
        {
            if(this.newstudent.id&&this.newstudent.name&&this.newstudent.city)
        {
            this.$emit('addStudent',{...this.newstudent});
            this.newstudent = {id:'',name:'',city:''}
        }
        }
    }
}
</script>