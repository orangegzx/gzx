import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 导入学生页面和信息页面
import student from '@/pages/student/index'
import studentInfo from '@/pages/student/info'
// 导入班级页面和信息页面
import  clazz    from '@/pages/class/index'
import classInfo from '@/pages/class/info'
// 导入课程页面和信息页面
import course from '@/pages/course/index'
import courseInfo from '@/pages/course/info'
import 'element-ui/lib/theme-chalk/index.css'
// 使用前必须use router
Vue.use(Router)
export default new Router({
  routes: [
    {//学生组件模块
      path: '/student',
      component: student,
      children:[{
      	path: 'info',
      	component: studentInfo,
      }]
    },
    {//班级组件模块
      path: '/class',
      component: clazz,
      children:[{
      	path: 'info',
      	component: classInfo,
      }]
    },
    {//课程组件模块
      path: '/course',
      component: course,
      children:[{
      	path: 'info',
      	component: courseInfo,
      }]
    }
  ]
})