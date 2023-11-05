import React from 'react'
import Header from '../Components/Header'
import ComponentBox from '../Components/ComponentBox'

const AllComponentPage = () => {
  return (
    <div className={'bg-gradient-to-r from-cyan-500 to-blue-500  w-[100%] font-Montserrat2'}>
       <Header/>
       <h1 className='text-center text-3xl '>Reusable Components</h1>
       <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-7'>
       <ComponentBox name={'Pricing Section'} path={'/pricingsection'}/>
       <ComponentBox name={'Table'}/>
       <ComponentBox name={'Footer'}/>
       <ComponentBox name={'Hero Section'}/>
       <ComponentBox name={'Testimonials'}/>
       <ComponentBox name={'Login Form'}/>
       <ComponentBox name={'Registration Form'}/>

       </div>
     </div>
  )
}

export default AllComponentPage