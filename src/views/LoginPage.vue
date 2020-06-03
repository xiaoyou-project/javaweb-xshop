<template>
    <div class="mainDiv">
        <el-container>
            <el-header>
                <h1>登录界面</h1>
            </el-header>
            <el-main>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto" class="demo-ruleForm">
                    <el-form-item label="账号" prop="account">
                        <el-input type="text" v-model="ruleForm.account" autocomplete="off" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
                <el-link type="info"><router-link to="/register">注册账号</router-link></el-link>
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
            return {
                ruleForm: {
                    account: '', // 存储输入的账号
                    password: '', // 存储密码
                },
                rules: { // 定义验证表单的验证规则
                    account: [
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
                    console.log("提交表单", valid, this.ruleForm)
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
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
