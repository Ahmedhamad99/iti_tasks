<template>
    <select class="form-control mb-2" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </template>
  
<script>
export default {
    data:()=>({}),
    
        props: ['modelValue', 'options'],
        emits: ['update:modelValue']
  
  };
  </script>
  