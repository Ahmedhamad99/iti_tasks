<template>
    <div>
      <label v-for="option in options" :key="option">
        <input 
          type="checkbox" 
          class="ml-2"
          :value="option" 
          :checked="modelValue.includes(option)" 
          @change="updateSelection(option, $event)">
        {{ option }}
      </label>
    </div>
  </template>
  
<script>
export default {
    props: {
      modelValue: [],  
      options: []      
    },
    emits: ['update:modelValue'],
    methods: {
      updateSelection(option, event) {
        let newSelected = [...this.modelValue]; 
        if (event.target.checked) {
            newSelected.push(option); 
        } else {
            newSelected = newSelected.filter((item)=> item !== option); 
        }
        this.$emit('update:modelValue', newSelected); 
        }
    }
  };
</script>
  