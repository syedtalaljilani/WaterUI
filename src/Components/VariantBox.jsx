import {useState} from 'react'

const VariantBox = ({previewcomp,codecomp,variantnumber}) => {
    const [showCode, setShowCode] = useState(false);

    const toggleView = () => {
      setShowCode(!showCode);
    };
  
    return (
      <>
      
      <div className='grid grid-cols-1 place-content-center ring-2 ring-black m-7 bg-white'>
      <h1 className='m-3 text-2xl font-Montserrat2'>Varient {variantnumber}</h1>
        <button onClick={toggleView} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-xl w-[50%] sm:w-[30%] md:w-[20%] flex justify-center ml-auto mr-auto items-center  p-2 rounded  mb-7 mt-4 text-white'>
          {showCode ? 'Preview' : 'View Code'}
        </button>
        {showCode ? codecomp : previewcomp}
      </div>
      </>
      
    );
}

export default VariantBox