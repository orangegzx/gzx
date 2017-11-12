import axios from 'axios'

export default {
	state:{
		course:[]
	},
	getters:{
		course:state=>state.course
	},
	mutations:{
		alterCourse:(state,data)=>{
			state.course = data;
		}
	},
	actions:{
		findAllCourse:(context)=>{
			axios.get('http://47.95.7.13:3000/course/findAll').then(function({data}){
				context.commit('alterCourse',data)
			})
		}
	}
}