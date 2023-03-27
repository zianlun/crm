<template>
    <div id="app">
        <el-form ref="form" :model="form" :rules="rules"  label-width="80px">
            <el-form-item label="活动名称" prop="name">
                <el-input placeholder="输入活动名称" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="所有者" prop="owner">
                <el-select v-model="form.owner" placeholder="请选择活动组织者">
                    <el-option v-for="(item) in users" :label="item.username" :value="item.userId" :key="item.userId"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11" style="margin-right: 20px;">
                    <el-date-picker prop="startDate" type="date" placeholder="选择开始时间" v-model="form.startDate"
                        style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col :span="11">
                    <el-date-picker prop="endDate" type="date" placeholder="选择结束时间" v-model="form.endDate"
                        style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="活动预算" prop="cost">
                <el-col :span="8">
                    <el-input placeholder="举行活动的开销" v-model.number="form.cost"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="活动描述" prop="description">
                <el-input  type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item class="butt">
                <el-button type="primary" @click.prevent="onSubmit">立即创建</el-button>
                <el-button @click="handleClose">取消创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
export default {
    data() {
      return {
        form: {
          name:'',
          owner:'',
          startDate:'',
          endDate:'',
          cost:'',
          description:'',
          createBy:''
        },
        users:[],
        rules:{
            name:[
                {required:true,message:"请输入活动名称",trigger:'blur'},
                { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' } 
            ],
            owner:[
                {required:true,message:'请选择活动负责人',trigger:'blur'},
                { min: 3, max: 7, message: '长度在 3 到 5 个字符', trigger: 'blur' } 
            ],
            cost:[
                {type:'number',message:'请输入一个数字',trigger:'blur'}
            ]
        }
      }
    },
    computed:{
        ...mapState('user',[
            'userInfo'
        ]),
    },
    mounted(){
        this.getAllUsers().then((response) => {
            this.users = response.users
        }).catch((error) => {
            console.log(error)
        })
        this.form.createBy = this.userInfo.userId
    },
    methods: {
        ...mapActions('market',[
            'getAllUsers',
            'createActivity'
        ]),
        async onSubmit() {
            this.$emit("handleSubmit",this.form)
        },
        handleClose(){
            this.dialogClose()
        }
    },
    props:{
        dialogClose: {
            type:Function
        },
        
    }
}
</script>

<style scoped lang="less">
#app {
    .el-form{
        .butt{
            display: flex;
            justify-content: space-between;
            .el-button{
                margin-left: 100px;
                margin-right: 100px;
            }
        }
    }
   
}
</style>