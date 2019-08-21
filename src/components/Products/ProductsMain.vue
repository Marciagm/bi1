<template>
     <div style="padding-left: 20px;border-left: 1px solid #e4e7ed; min-height: 800px;">
        <h2>Your Semiconductor Solutions.</h2>
        <p class="content">
            HiRel products (HR) in all package types to temperature range of -40°C/-55°C to +125°C and special specifications to +175°C. Manufactured under MIL-PRF-53835 and tested in accordance with MIL-STD-883, M5004 with optional B, C, D, group testing.
        </p>
        <el-row style="padding: 0">
            <el-col :span=12>
                <ul class="contentUl">
                    <li>Memory(SRAM, EEPROM, FLASH and UVEPROM)</li>

                    <li>Linear(Op-Amps, Comparators, Amplifiers, Comparators, References and more)</li>
                </ul>
            </el-col>
            <el-col :span=12>
                <ul class="contentUl">
                    <li>Logic(HC, HCT, FCT and more)</li>
                    <li>OPTO(photo diodes, photo transistors, optocouplers and more)</li>
                    <li>Diodes & Transistor</li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss" scoped>
    h2 {
        margin: 10px auto;
        color: #8e8a8a;
        font-size: 26px;
        text-align: left;
        &:after{
            content: '';
            height: 10px;
            width: 95px;
            border-bottom: 2px solid #4e2d66;
            display: block;
        }
    }
    .content{
        font-size: 21px;
        text-align: justify;
        font-weight: bold;
        margin: 15px auto;

    }
    .contentUl li{
        list-style: none;
        color: #8e8a8a;
        line-height: 30px;
        position: relative;
        padding-left: 10px;
        box-sizing: border-box;
        text-align:left;
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
</style>