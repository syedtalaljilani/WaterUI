import React from 'react'
import CodeEditor from '../CodeEditor'
var code = `<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 grid-cols-1 place-items-center m-5">
<div className="ring-4 ring-black w-[300px] h-[350px] rounded-lg">
  <h1 className="text-center text-3xl">Basic</h1>
  <ol className="list-['¬'] flex m-3 gap-5 flex-col">
    <li className="m-2"><span></span>Option1</li>
    <li className="m-2"><span></span>Option2</li>
    <li className="m-2"><span></span>Option3</li>
    <li className="m-2"><span></span>Option4</li>
  </ol>
  <button className="ring-4 ring-black bg-black w-56 flex m-auto h-[50px] items-center  rounded-xl">
    <div className="grid grid-cols-2 gap-5">
      <div>
        <p className="text-white m-3 font-bold">BUY NOW</p>
      </div>
      <div className="bg-white flex justify-center items-center rounded-lg w-26">
        <p className="text-2xl">30$</p>
      </div>
    </div>
  </button>
</div>
<div className="ring-8 ring-black w-[300px] h-[500px] rounded-lg">
  <h1 className="text-center text-3xl">Premium</h1>
  <ol className="list-['¬'] flex m-2 flex-col gap-7">
    <li className="m-2"><span></span>Option1</li>
    <li className="m-2"><span></span>Option2</li>
    <li className="m-2"><span></span>Option3</li>
    <li className="m-2"><span></span>Option4</li>
    <li className="m-2"><span></span>Option5</li>
    <li className="m-2"><span></span>Option6</li>
  </ol>
  <button className="ring-4 ring-black bg-black w-56 flex m-auto h-[50px] items-center  rounded-xl">
    <div className="grid grid-cols-2 gap-5">
      <div>
        <p className="text-white m-3 font-bold">BUY NOW</p>
      </div>
      <div className="bg-white flex justify-center items-center rounded-lg w-26">
        <p className="text-2xl">90$</p>
      </div>
    </div>
  </button>
</div>
<div className="ring-4 ring-black w-[300px] h-[350px] rounded-lg">
  <h1 className="text-center text-3xl">Gold</h1>
  <ol className="list-['¬'] flex m-2 flex-col gap-5">
    <li className="m-2"><span></span>Option1</li>
    <li className="m-2"><span></span>Option2</li>
    <li className="m-2"><span></span>Option3</li>
    <li className="m-2"><span></span>Option4</li>
  </ol>
  <button className="ring-4 ring-black bg-black w-56 flex m-auto h-[50px] items-center  rounded-xl">
    <div className="grid grid-cols-2 gap-5">
      <div>
        <p className="text-white m-3 font-bold">BUY NOW</p>
      </div>
      <div className="bg-white flex justify-center items-center rounded-lg w-26">
        <p className="text-2xl">90$</p>
      </div>
    </div>
  </button>
</div>

</div>`;
const PricingSection1Code = () => {
  
    return <CodeEditor code={code}/>
  
}

export default PricingSection1Code