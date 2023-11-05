
import {Link} from 'react-router-dom'
const HeroSection = () => (
    <div className={'grid grid-cols-1 sm:grid-cols-2'}>
        <div>
            <img src={'/assets/herosection.png'} alt={'heroimage'} className='sm:w-[50vw]'/>
        </div>
        <div className={'bg-white sm:w-[95%] w-[100%] flex flex-col  rounded mb-6'}>
           <h1 className={'bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-[2.5rem]  lg:text-[4rem] p-10'}><span className='underline decoration-wavy decoration-cyan-500 '>TailwindCSS</span> Reusable <span className={'ring-4 ring-blue-500 rounded-2xl p-3'}>Components </span>Library  </h1>
            <Link to='/allcomponents' className={'bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl h-20  w-[90%]  flex justify-center ml-auto mr-auto items-center p-5 rounded  mb-7 text-white'}>View All Components</Link>
        </div>

    </div>
);

export default HeroSection;