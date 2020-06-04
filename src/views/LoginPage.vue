<template>
    <div class="mainDiv">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item>
                <div class="login-button" @click="submitForm('ruleForm')">登录</div>
                <div class="login-side"><router-link to="/register">立即注册</router-link>|<a href="javascript:void(0)">忘记密码？</a></div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: '', // 存储输入的账号
                    password: '', // 存储密码
                },
                rules: { // 定义验证表单的验证规则
                    username: [
                        { required: true, message: '账号不能为空', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) { // 提交表单
                this.$refs[formName].validate((valid) => {
                   if (valid) {
                        this.tools.requests(this.G.SERVER +"/api/v1/user/login" ,this.ruleForm,"post").then((res) => {
                            if(res.code === 0){
                                this.$message({
                                    showClose: true,
                                    message: res.msg,
                                    type: 'error'
                                });
                            }else { // 登录成功
                                this.setCookie('token',res.data.token, 1); // 设置cookie
                                this.setCookie('userID',res.data.id, 1); // 设置cookie
                                // console.log("后端的cookie", res.data)
                                // console.log("cookie", this.getCookie('token'))
                                this.$router.push({path: '/'}) // 跳转到主页
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
            },
            resetForm(formName) { // 重置表单
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .login-button {
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
    .el-main {
        width: 50%;
        margin: 1em auto;
        border: 1px solid #eee;
        border-radius: 2px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
        margin-left: 199px;
    }
</style>
