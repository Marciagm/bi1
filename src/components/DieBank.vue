<template>
 <div class="die-bank">
    <img-nav :type="type" />
     <div class="content">
         <h2>The Largest Continues Source of Dies in Asia</h2>
         <h3>100% traceable, certified and guaranteed.</h3>
         <ul>
             <li>Over 13,000 part numbers in stock.</li>
             <li>Over 65,000 square feet of class 10,000 clean room.</li>
             <li>Devices in hermetically sealed cabinets for storage.</li>
         </ul>
         <el-button style="margin-top: 20px"  @click="dialogFormVisible = true">SIGN UP FOR DIE BANK INVENTORY UPDATES</el-button>
         <el-dialog title="Sign Up" :visible.sync="dialogFormVisible">
             <el-form ref="form" :model="form" :rules="rules">
                 <el-form-item label="Email Address" :label-width="formLabelWidth" prop="emailAddress">
                     <el-input v-model="form.emailAddress" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="FirstName" :label-width="formLabelWidth" prop="firstName">
                     <el-input v-model="form.firstName" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="LastName" :label-width="formLabelWidth" prop="lastName">
                     <el-input v-model="form.lastName" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="Position" :label-width="formLabelWidth">
                     <el-input v-model="form.position" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="CompanyName" :label-width="formLabelWidth">
                     <el-input v-model="form.companyName" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="CompanyWebsite" :label-width="formLabelWidth" prop="companyWebsite">
                     <el-input v-model="form.companyWebsite" autocomplete="off"></el-input>
                 </el-form-item>
             </el-form>
             <div slot="footer" class="dialog-footer">
                 <el-button @click="dialogFormVisible = false">取 消</el-button>
                 <el-button type="primary" @click="submit">确 定</el-button>
             </div>
         </el-dialog>
     </div>
 </div>
</template>

<style lang="scss">
.die-bank {
    color: $light-color;
    min-height: 600px;
}
</style>
<script>
import ImgNav from '@/components/ImgNav'
import { createClient } from '@/api'
export default {
    components: {
        ImgNav,
    },
    data () {
        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            formLabelWidth: '150px',
            form: {
                emailAddress: '',
                firstName: '',
                lastName: '',
                position: '',
                companyName: '',
                companyWebsite: ''
            },
            rules: {
                emailAddress: [
                    { required: true, message: 'EmailAddress is required', trigger: 'blur' },
                    { type: 'email', message: 'Email format is not coreect', trigger: ['blur', 'change'] }
                ],
                firstName: [
                    { required: true, message: 'FirstName is required', trigger: 'blur' },
                ],
                lastName: [
                    { required: true, message: 'LastName is required', trigger: 'blur' },
                ],
                companyWebsite: [
                    { required: true, message: 'CompanyWebsite is required', trigger: 'blur' },
                ]
            },
            type: 'dieBank'
        }
    },
    methods:{
        submit(){
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.dialogFormVisible = false;
                    createClient({
                        email_adress: this.form.emailAddress,
                        first_name: this.form.firstName,
                        last_name: this.form.lastName,
                        position: this.form.position,
                        company_name: this.companyName,
                        company_website: this.companyWebsite
                    }).then(res => {
                        console.log(res)

                        const { err } = res.data;
                        if (err) {
                            this.message.error(err);
                        } else {
                            this.$message({
                                message: 'Sign up success!',
                                type: 'success'
                            });
                        }

                    })

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>
<style scoped lang="scss">
    .die-bank>div.content{
        width: 530px;
        margin: auto;
        text-align: left;
        line-height: 30px;
        ul{
            margin: auto 10px;
            li{
                list-style: inside;
            }
        }
        h2{
            margin: 10px auto;
        }
        h3{
            margin-bottom: 10px;
        }
    }
</style>
