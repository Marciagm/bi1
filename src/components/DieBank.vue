<template>
 <div class="die-bank">
    <img-nav :type="type" />
     <div class="content">
         <h2>Your Semiconductor Solutions.</h2>
         <h3>The largest continuous source of semiconductors in Asia.</h3>
         <ul>
             <li>Over 13,000 part numbers in stock</li>
             <li>Over 65,000 square feet of class 10,000 clean rooms</li>
             <li>Over 200 million die in stock</li>
             <li>Die in hermetically sealed cabinets for storage</li>
         </ul>
         <div style="display: flex;justify-content: center;align-items: center;margin: 15px auto;">
             <div>
                 <label>
                     Wafer Thinning
                 </label>
                 <label>
                     Back Metallization
                 </label>
                 <label>
                     Wafer Probing
                 </label>
             </div>
             <!-- <img src="../images/dieBank.jpeg"> -->
             <div>
                 <label>
                     Wafer Sawing
                 </label>
                 <label>
                     Visual Inspection
                 </label>
                 <label>
                     Die Sorting
                 </label>
             </div>
         </div>
         <el-button style="margin-top: 20px"  @click="dialogFormVisible = true">SIGN UP FOR DIE BANK INVENTORY UPDATES</el-button>
         <el-dialog title="Sign Up" :visible.sync="dialogFormVisible">
             <el-form ref="form" :model="form" :rules="rules">
                 <el-form-item label="Email Address" :label-width="formLabelWidth" prop="emailAddress">
                     <el-input v-model="form.emailAddress" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="First Name" :label-width="formLabelWidth" prop="firstName">
                     <el-input v-model="form.firstName" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="Last Name" :label-width="formLabelWidth" prop="lastName">
                     <el-input v-model="form.lastName" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="Position" :label-width="formLabelWidth">
                     <el-input v-model="form.position" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="Company Name" :label-width="formLabelWidth">
                     <el-input v-model="form.companyName" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="Company Website" :label-width="formLabelWidth" prop="companyWebsite">
                     <el-input v-model="form.companyWebsite" autocomplete="off"></el-input>
                 </el-form-item>
             </el-form>
             <div slot="footer" class="dialog-footer">
                 <el-button @click="dialogFormVisible = false" style="display: none">取 消</el-button>
                 <el-button @click="submit">SIGN UP</el-button>
             </div>
         </el-dialog>
     </div>
 </div>
</template>

<style lang="scss">
.die-bank {
    color: $light-color;
    min-height: 800px;
    h2 {
        margin-bottom: 10px;
    }
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
                        email_address: this.form.emailAddress,
                        first_name: this.form.firstName,
                        last_name: this.form.lastName,
                        position: this.form.position,
                        company_name: this.form.companyName,
                        company_website: this.form.companyWebsite
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
        width: 906px;
        margin: auto;
        text-align: left;
        line-height: 30px;
        ul{
            margin: auto;
            height: 60px;
            li{
                list-style: none;
                color: #8e8a8a;
                width: 453px;
                display: inline-block;
                line-height: 30px;
                position: relative;
                padding-left: 10px;
                box-sizing: border-box;
                &:before{
                    content: '';
                    height: 5px;
                    width: 5px;
                    background: #4e2d66;
                    position: absolute;
                    left: 0;
                    top:12px
                }
            }
        }
        h2{
            margin: 10px auto;
            color: #8e8a8a;
            font-size: 26px;
            &:after{
                content: '';
                height: 10px;
                width: 95px;
                border-bottom: 2px solid #4e2d66;
                display: block;
            }
        }
        h3{
            margin-bottom: 10px;
            color: black;
            font-size: 24px;
        }
    }
    .el-button:focus, .el-button:hover {
        color: #fefefe;
        border-color: #4e2d66;
        background-color: #4e2d66;
    }
    label{
        font-size: 24px;
        color: #4e2d66;
        line-height: 95px;
        font-weight: bold;
    }
</style>
