<template>
  <div id="courseInfo">
		<el-row class='searchBar'>
			<el-col :span="6">
				<el-input
				  placeholder="请输入关键字"
				  icon="search"
				  v-model="keywords">
				</el-input>
			</el-col>
			<el-col :span='18' style='text-align:right'>
				<el-button type="text" @click='handleSingleImport' >单个导入</el-button>
				<el-button type="text">批量导入</el-button>
			</el-col>
		</el-row>
    <el-row >
      <el-col :span="24" >
        <el-table  border :data="course" style="width: 100%;" class="tbale">
          <el-table-column  prop="name" label="课程名称" ></el-table-column>          
          <el-table-column  prop="credit" label="学分" ></el-table-column>          
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button size="small" >编辑</el-button>
              <el-button size="small" type="danger"  >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
		
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'courseInfo',
  data(){
      return {
          msg:"课程信息"
      }
  },
	created:function(){
  	this.findAllCourse();
  },
  computed:{
  	...mapGetters(['course'])
  },
  methods:{
  	handleSingleImport(){
  		this.dialogFormVisible = true;
  		this.title = '录入学生信息';
  	
  	},
  	...mapActions(['findAllCourse'])
  }
}
</script>