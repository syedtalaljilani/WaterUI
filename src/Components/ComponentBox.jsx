import {Link} from 'react-router-dom'

const ComponentBox = ({name,path}) => {
  return (
    <Link to={path} className='bg-white w-[60%] rounded grid h-[120px] ring-2 ring-black place-self-center place-items-center text-center m-10'>
      <p>{name}</p>
    </Link>
  )
}

export default ComponentBox