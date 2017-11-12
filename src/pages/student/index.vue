<template>
  <div id="student">
    {{msg}}
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'student',
  data(){
      return {
          msg:"学生管理"
      }
  }
}
</script>