<template>
    <div class="mainDiv">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto" class="demo-ruleForm">
            <el-form-item label="昵称" prop="nickname">
                <el-input type="text" v-model="ruleForm.nickname" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="register-button" @click="submitForm('ruleForm')">注册</div>
                <div class="login-side"><router-link to="/login">已有账号</router-link>|<router-link to="/">回到主页</router-link></div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

    export default {
        data() {
            var checkPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    nickname: '', // 存储昵称
                    username: '', // 存储输入的账号
                    password: '', // 存储密码
                },
                rules: { // 定义验证表单的验证规则
                    nickname: [
                        { required: true, message: '昵称不能为空', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    checkPass: [
                        { required: true, validator: checkPass, message: '两次密码不相同', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) { // 提交表单
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.tools.requests(this.G.SERVER +"/api/v1/user/register" ,this.ruleForm,"post").then((res) => {
                            if(res.code == 0){
                                this.$message({
                                    showClose: true,
                                    message: res.msg,
                                    type: 'error'
                                });
                            }else {
                                this.$alert('注册成功！！！', '提示', {
                                    confirmButtonText: '确定',
                                    callback: () => {
                                        this.$router.push({path: '/login'})
                                    }
                                });
                            }
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: '提交失败！',
                            type: 'error'
                        });
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .register-button {
        background-color: #ff6700;
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: block;
        margin-bottom: 14px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
    }
    .mainDiv {
        width: 400px;
        margin: 3em auto;
        padding: 1em;
    }
    .login-side a {
        color: #999;
        padding: 0 5px;
    }
    .login-side a:hover{
        color: #FF6700;
    }
    .login-side {
        color: #999;
        margin-top: -15px;
        margin-left: 184px;
    }
</style>
