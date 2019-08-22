<template>
 <div class="die-bank">
    <img-nav :type="type" />
     <div class="content">
         <h2>Your Semiconductor Solutions.</h2>
         <h3>The largest continuous source of semiconductors in Asia.</h3>
         <ul class="diebank-fe">
             <li>Over 13,000 part numbers in stock</li>
             <li>Over 65,000 square feet of class 10,000 clean rooms</li>
             <li>Over 200 million die in stock</li>
             <li>Die in hermetically sealed cabinets for storage</li>
         </ul>
         <div>
             <ul class="diebank-item">
                 <li v-for="(item, index) in lists" :key="index">{{item}}</li>
             </ul>
         </div>
         <el-button class="signup-btn" @click="dialogFormVisible = true">SIGN UP FOR DIE BANK INVENTORY UPDATES</el-button>
         <el-dialog custom-class="form-dialog" title="Sign Up" :visible.sync="dialogFormVisible">
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
                 <el-button class="signup-btn" @click="submit">SIGN UP</el-button>
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
    .diebank-item {
        li {
            display: block;
        }
    }
    .form-dialog {
        padding: 10px 60px 10px 10px;
        border-radius: 5px;
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
            lists: [
                'Wafer Thinning',
                'Back Metallization',
                'Wafer Probing',
                'Wafer Sawing',
                'Visual Inspection',
                'Die Sorting',
            ],
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
    .diebank-item {
        li {
            font-size: 20px;
            color: #4e2d66;
            line-height: 55px;
            font-weight: bold;
            position: relative;
            padding-left: 10px;
            // &:before{
            //     content: '';
            //     height: 5px;
            //     width: 5px;
            //     background: #4e2d66;
            //     position: absolute;
            //     left: 0px;
            //     top: 25px
            // }
        }
    }
    .die-bank>div.content{
        width: 906px;
        margin: auto;
        text-align: left;
        line-height: 30px;
        .diebank-fe {
            margin: auto;
            height: 60px;
            li {
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
            font-size: 24px;
            margin: 15px 0 10px 0;
            font-size: $ftn-big-size;
            color: $txt-s1-color;
        }
        .signup-btn {
            margin: 20px 0 20px 0;
            color: #fefefe;
            //text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.2);
            font-weight: bold;
            background-color: $btn-bg-light;
        }
    }
    .signup-btn:focus, .signup-btn:hover {
        background-color: $btn-bg-dark !important;
    }
    label{
        font-size: 24px;
        color: #4e2d66;
        line-height: 95px;
        font-weight: bold;
    }
</style>
