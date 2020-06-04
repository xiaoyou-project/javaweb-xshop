<template>
    <div class="mainDiv">
        <el-container>
            <el-main>
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
                        <el-button type="primary" size="medium" round @click="submitForm('ruleForm')" style="width: 15em;">注册</el-button>
                    </el-form-item>
                </el-form>
                <el-link type="info"><router-link to="/login">已有账号</router-link></el-link>
            </el-main>
            <el-footer>
                底部内容
            </el-footer>
        </el-container>
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
    .mainDiv {
        width: 50%;
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
</style>
