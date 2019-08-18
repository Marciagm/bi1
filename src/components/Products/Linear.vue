<template>
    <div>
        <div>
            Extensive range of Linear Products: Op-Amps, Comparators, Amplifiers, Comparators, References and more. Utilizing OEM Die/Wafers inventory and housed in controlled storage units. Custom manufactured in ceramic and metal can. Guaranteed to meet original OEM or custom  specification.  Mil-prf-38535. Environment and Functionality tested (-55°C to +125°C) in accordance with Mil-Std-883 M5004. Group B,C,D testing and SnPb or Pb free options are available.
        </div>
        <div class="tabContent">
            <pro-table :tableData="tableData" :tableColumn="tableColumn"/>
        </div>
    </div>
</template>
<script>
import ProTable from './ProTable'

export default {
    props: ['tableData', 'tableColumn', 'type'],
    components: {
        ProTable
    },
    data () {
        return {

        }
    },
    mounted () {
        const data = {
            memory: ``,

            linear: `Extensive range of Linear Products: Op-Amps, Comparators, Amplifiers, Comparators, References and more. Utilizing OEM Die/Wafers inventory and housed in controlled storage units. Custom manufactured in ceramic and metal can. Guaranteed to meet original OEM or custom  specification.  Mil-prf-38535. Environment and Functionality tested (-55°C to +125°C) in accordance with Mil-Std-883 M5004. Group B,C,D testing and SnPb or Pb free options are available.
            `,

            logic: `A comprehensive range of Logic gates in various technologies including: HC, HCT, FCT etc. Utilizing Die/Wafers inventory from different OEM’s we can manufacture and test devices to original data sheets in most package types and to most temperature and screening levels, whether they are simple gates or complex drivers. Specific custom circuits can also designed and packaged using: Modules, MCM’s or Structured ASIC’s. Packages include Hermetic, Ceramic (-55°C to +125°C). All products can be tested in accordance with Mil-Std-883 with Group testing to B,C,D optional. 
            `,

            opto: `BI offers comprehensive range of OPTO parts including photo diodes, photo transistors, optocouplers and many more. Utilizing Die/Wafers inventory combined with die purchased from official OEM sources, BI can manufacture with the highest level of quality you would expect from the OEM. Offering a 100% guarantee to meet the original specification, and we work closely with the customer to solve OPTO obsolescence issue. `,
            
            dt: `Force Technologies can provide virtually any diode or transistor for your HiRel application, critical testing and design support. Equivalents which conform to JAN, JANTX or JANTXV screening are possible.

            A large range of products for obsolete Diodes applications is available, including: varactor diodes, TVS diodes, Tuning diodes, abrupt diodes, hyper abrupt diodes, Microwave, Zener diodes and rectifier diodes. We manufacture in glass, ceramic and surface mount SOT, SOD and MELF packages. Custom specifications are available。

            Available transistors include small signal transistors, Darlington transistors, high voltage transistors and high-power transistors (to 300 Watts). Screening options include PIND, B.I. (up to 100A) and environmental testing. We offer standard and custom packaging for obsolete parts. Devices manufactured and tested to the highest specifications. Group A/B/C/D testing is available.`
        }
        this.content = data[this.type];
    }
}
</script>