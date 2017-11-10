<template>
<div class="login">
    <div class="login_content">
        <div class="login_form">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
            <div class="row">
              <el-form-item label="用户名" prop="pass">
                <el-input type="text" placeholder="请输入用户名" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="密码" prop="checkPass">
              <el-input type="password" placeholder="请输入密码" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <div class="row">
              <el-col :span="18">
                <el-form-item label="验证码" prop="age">
                  <el-input v-model.number="ruleForm2.age">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <div class="yanzhengma">
                  <img src="xxx" alt="">
                </div>
              </el-col>
            </div>
              <el-button type="primary" @click="submitForm('ruleForm2')" class="loginbtn">登陆</el-button>
          </el-form>
        </div>
    </div>
    <div class="login_foot"></div>
</div>
</template>

<script>
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang='scss' scoped>
.login {
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  padding-bottom: 100px;
  top: 0;
  left: 0;
  min-height: 700px;
  .login_content {
    width: 100%;
    height: 100%;
    position: relative;
    background: #f5f5f5;
    .login_form {
      width: 600px;
      height: 600px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -300px;
      margin-left: -300px;
      padding: 30px;
      padding-right: 100px;
      .row {
        margin-bottom: 30px;
        overflow: hidden;
      }
      .el-form-item {
        // margin-bottom: 50px;
        margin-left: 0;
      }
      .loginbtn {
        width: 100%;
      }
      .yanzhengma {
        float:right;
        width: 90%;
        height: 50px;
        // background: black;
        position: relative;
        top: 40px;
        border: 1px solid #d8dce5;
        img {
          width: 100px;
          height: 100px;
          background: black;
        }
      }
    }
  }
  .login_foot {
    height: 100px;
    width: 100%;
    background: black;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
