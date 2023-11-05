import VariantBox from '../Components/VariantBox'
import Header from '../Components/Header'
import PricingSection1Preview from '../Components/LibraryComponentPreview/PricingSection1Preview'
import PricingSection1Code from '../Components/LibraryComponentCode/PricingSection1Code'
const PricingSection = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 grid grid-cols-1 gap-10'>
        <Header/>
        <h1 className='text-3xl font-Montserrat2 text-center font-bold text-white'>Pricing Section</h1>
        <VariantBox previewcomp={<PricingSection1Preview/>} codecomp={<PricingSection1Code/>}variantnumber={'1'}/>
        
    </div>
  )
}

export default PricingSection