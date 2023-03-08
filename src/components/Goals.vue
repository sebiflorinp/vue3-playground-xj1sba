<template>
  <form @submit.prevent="add_new_goal">
    <div>
      <label for="goal">New Goal: </label>
      <input type="text" id="goal" v-model="new_goal">
      <button>Add</button>
    </div>
  </form>
  <hr>
  <ul>
    <li v-for="(item,idx) in goals" :key="idx">{{item}} <button @click="remove(idx)">X</button></li>
  </ul>
</template>

<script>
  import {ref} from 'vue';

  export default {
    props:{
      capacity:Number
    },
    setup(props){
      const goals = ref([]);
      let new_goal = ref('')
      console.log(props)

      function can_add_more_goals(capacity){
        return goals.value.length< capacity;
      }

      function add_new_goal(){
        if ( can_add_more_goals(props.capacity||3)){
          goals.value.push(new_goal.value);
          new_goal.value='';
        }        
      }
      
      function remove(index){
        if(goals.value.length>0 && index<goals.value.length){
          goals.value.splice(index,1)
        }
      }
      return{
        new_goal,
        goals,
        add_new_goal,
        remove
      }
    }
  }
</script>