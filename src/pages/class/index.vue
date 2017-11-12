<template>
  <div id="clazz">
    {{msg}}
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'clazz',
  data(){
      return {
          msg:"班级管理"
      }
  }
}
</script>