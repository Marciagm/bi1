import dieBankImg from '@/images/dieBank.jpeg'
import productsImg from '@/images/products.jpeg'
import servicesImg from '@/images/services.jpg'
import aboutUsImg from '@/images/aboutUs.jpg'

export const Products = [
    'Memory',
    'Linear',
    'Logic',
    'Opto',
    'Diodes/Transistors',
    'FPGA Replacements',
    'Programmable Logic',
    'Custom Interface'
];
export const tableInfo = {
    tableColumn: [
        {
            prop: 'HRPartNumber',
            label: 'HR Part Number',
            width: 160
        },
        {
            prop: 'Generic',
            label: 'Generic',
            width: 100
        },
        {
            prop: 'Size',
            label: 'Size',
            width: 100
        },
        {
            prop: 'Org',
            label: 'Org',

        },
        {
            prop: 'MemorySpeed',
            label: 'Memory Speed',
            width: 140
        },
        {
            prop: 'Description',
            label: 'Description',
            width: 130
        },
        {
            prop: 'AlternativePartNumber1',
            label: 'Alternative Part Number1',
            width: 130
        },
        {
            prop: 'AlternativePartNumber2',
            label: 'Alternative Part Number2',
            width: 130
        },
    ]
}
export const navNew = [
    {
        title: 'Die Bank',
        routePath: '/die-bank'
    },
    {
        title: 'Products',
        routePath: '/products',
        children: [
            {
                title: 'Memory',
                label: 'memory',
                routePath: '/products/memory',
                parent: 'Products',
                // children: [
                //     {
                //         title: 'Memory1',
                //         routePath: '/products',
                //         parent: 'Memory',
                //     },
                //     {
                //         title: 'Memory2',
                //         routePath: '/products',
                //         parent: 'Memory',
                //     },
                //     {
                //         title: 'Memory3',
                //         routePath: '/products',
                //         parent: 'Memory',
                //     }
                // ]
            },
            {
                title: 'Linear',
                label: 'linear',
                routePath: '/products/linear',
                parent: 'Products',
            },
            {
                title: 'Logic',
                label: 'logic',
                routePath: '/products/logic',
                parent: 'Products'
            },
            {
                title: 'OPTO',
                label: 'opto',
                routePath: '/products/opto',
                parent: 'Products'
            },
            {
                title: 'Diodes/Transistors',
                label: 'dt',
                routePath: '/products/dt',
                parent: 'Products'
            },
        ]
    },
    {
        title: 'Services',
        routePath: '/services',
        children: [
            {
                title: 'Solutions',
                routePath: '/services',
                parent: 'Services'
            },
            // {
            //     title: 'Logistics Services',
            //     routePath: '/services',
            //     parent: 'Services'
            // },
        ]
    },
    {
        title: 'About Us',
        routePath: '/about-us',
        children: [
            // {
            //     title: 'Career',
            //     routePath: '/about-us',
            //     parent: 'AboutUs'
            // },
            {
                title: 'Contact Us',
                routePath: '/about-us',
                parent: 'AboutUs'
            },
        ]
    }
];


export const imgNavInfo = {
    dieBank: {
        img: dieBankImg,
        text: '',
        h1Text: 'Die Bank',
        h2Text: 'The Largest Continuous Source of Semiconductor in Asia'
    },
    services: {
        img: servicesImg,
        text: '',
        h1Text: 'Solutions',
        h2Text: 'Focused on providing quality solutions'
    },
    products: {
        img: productsImg,
        text: '',
        h1Text: 'Products',
        h2Text: 'Largest Source of EOL Products in Asia'
    },
    aboutUs: {
        img: aboutUsImg,
        text: '',
        h1Text: '',
        h2Text: 'Your Semiconductor Solutions'
    }
}
export const content = {
    MEMORY: `Offers HiRel memory products in monolithic form 16K to 4Mb and MCMs or modules up to 64Gb in all package types (-55°C to +125°C) and special specifications to +175°C.
    The largest range of HiRel replacement SRAM, EEPROM, FLASH and UVEPROM memory in standard and custom packages. Manufactured under MIL-PRF-53835 and tested in accordance with MIL-STD-883, M5004 with optional B, C, D, group testing. `,

    LINEAR: `Extensive range of Linear Products: Op-Amps, Comparators, Amplifiers, Comparators, References and more. Utilizing OEM Die/Wafers inventory and housed in controlled storage units. Custom manufactured in ceramic and metal can. Guaranteed to meet original OEM or custom  specification.  Mil-prf-38535. Environment and Functionality tested (-55°C to +125°C) in accordance with Mil-Std-883 M5004. Group B,C,D testing and SnPb or Pb free options are available.`,


    LOGIC: `A comprehensive range of Logic gates in various technologies including: HC, HCT, FCT etc. Utilizing Die/Wafers inventory from different OEM’s we can manufacture and test devices to original data sheets in most package types and to most temperature and screening levels, whether they are simple gates or complex drivers. Specific custom circuits can also designed and packaged using: Modules, MCM’s or Structured ASIC’s. Packages include Hermetic, Ceramic (-55°C to +125°C). All products can be tested in accordance with Mil-Std-883 with Group testing to B,C,D optional. `,

    OPTO:  `BI offers comprehensive range of OPTO parts including photo diodes, photo transistors, optocouplers and many more. Utilizing Die/Wafers inventory combined with die purchased from official OEM sources, BI can manufacture with the highest level of quality you would expect from the OEM. Offering a 100% guarantee to meet the original specification, and we work closely with the customer to solve OPTO obsolescence issue. `,

    // DIODES-and-TRANSISTORS: `Force Technologies can provide virtually any diode or transistor for your HiRel application, critical testing and design support. Equivalents which conform to JAN, JANTX or JANTXV screening are possible.

    // A large range of products for obsolete Diodes applications is available, including: varactor diodes, TVS diodes, Tuning diodes, abrupt diodes, hyper abrupt diodes, Microwave, Zener diodes and rectifier diodes. We manufacture in glass, ceramic and surface mount SOT, SOD and MELF packages. Custom specifications are available。

    // Available transistors include small signal transistors, Darlington transistors, high voltage transistors and high-power transistors (to 300 Watts). Screening options include PIND, B.I. (up to 100A) and environmental testing. We offer standard and custom packaging for obsolete parts. Devices manufactured and tested to the highest specifications. Group A/B/C/D testing is available.`,

    // About-Us: `Headquartered in Singapore. BI Components strives to be a world leading independent distributor specialist, offering comprehensive wafer and bare die inventory for hybrid IC and multi-chip module manufacturers in global marketplace. BI's extensive product line of hi-reliability bare die components, has made the company one the top and largest bare die supplier of choice for Aerospace, Defense, Space, Medical, and Industrial markets in Asia and worldwide.
    // The corporate facility is equipped with ESD protected class 10,000 cleanrooms, nitrogen-filled and hermetically sealed stored inventory. Combined with strict ISO9100 quality systems, our extensive inventory ensures quick delivery without compromise to quality. All dies are visually inspected to MIL-STD-833 methods and 100% probed. Aerospace-grade products are 100% screened and aging-tested.
    // Our services have grown more extensive and has been dedicated to multi-chip module (MCM), hybrid integrated circuit (HIC), chip-on-board (COB) and single-chip integrated circuit packaging solutions. With broadest offering of bare die products and value-added processing in the industry, BI Components became recognized as a leading bare die add value provider in Asian and global marketplace.`


}
