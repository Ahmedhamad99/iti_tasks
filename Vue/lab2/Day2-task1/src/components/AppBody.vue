<template>
   <div>
    <button class="btn btn-primary mb-3" @click="$emit('close')">Add Student</button>
    <table class="table table-bordered">
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>city</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(student,index) in students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.city }}</td>
                <td><button class="btn btn-danger" @click="$emit('removestudent',index)">Remove</button></td>
            </tr>
        </tbody>
    </table>
    <p><strong>Total Number of Students: </strong>{{ students.length }}</p>

   </div>
</template>

<style>
</style>
<script>
export default{
    name: 'AppBody',
    props:['students']
  
}
</script>