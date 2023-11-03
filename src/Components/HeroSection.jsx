

const HeroSection = () => (
    <div className={'grid grid-cols-1 sm:grid-cols-2 place-content-center h-screen'}>
        <div className={''}>
            <img src={'/assets/herosection.png'} alt={'heroimage'}/>
        </div>
        <div className={'bg-white sm:w-[95%] w-[100%]  flex flex-col m-auto ring-1 ring-amber-300 rounded-3xl'}>
           <h1 className={'bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-[3rem] sm:text-[4rem] p-10'}><span className='underline decoration-wavy decoration-cyan-500 '>TailwindCSS</span> Reusable <span className={'ring-4 ring-blue-500 rounded-2xl'}>Components </span>Library  </h1>
            <button className={'bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl h-20 m-auto items-center p-3 rounded mb-3 text-white'}>View All Components</button>
        </div>

    </div>
);

export default HeroSection;