<template>
    <input
      class="form-control mb-2"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </template>
  
<script>
export default {
   data:()=>({}),
    props: ['modelValue', 'placeholder'],
    emits: ['update:modelValue']
   
  };
  </script>
  