import React from 'react'
import Layout from '../../component/layout/layout'
import Section1 from '../../component/section-1/section'
import Section2 from '../../component/section-2/section'
import Section4 from '../../component/section-4/section'
import Section5 from '../../component/section-5/section'
import Section6 from '../../component/section-6/section'
import Section7 from '../../component/section-7/section'
import Section8 from '../../component/section-8/section8'

import '../../asserts/style/responsive.css';
export default ()=>{

    return(
<>
<Layout>
<Section1/>
<Section2/>
{/* <Section3/> */}
<Section4/>
<Section5/>
<Section6/>
<Section7/>
<Section8/>
</Layout>
</>
    );
}