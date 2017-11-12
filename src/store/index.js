// vue为小写  否则会出现$store未定义
import Vue from 'vue'
import Vuex from 'vuex'
import studentStore from './studentStore'
import clazzStore from './clazzStore'
import courseStore from './courseStore'
// 必须在创建store之前调用use函数
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        studentStore,
        clazzStore,
        courseStore,
    }
})