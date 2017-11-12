<template>
  <div id="course">
    {{msg}}
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'course',
  data(){
      return {
           msg:"课程管理"
      }
  }
}
</script>