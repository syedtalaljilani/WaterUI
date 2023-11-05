import { Link } from "react-router-dom";


const Header = () => (
    <div className='p-7'>
        <Link to='/' className={'text-center font-bold text-white text-4xl underline decoration-wavy decoration-white'}>WaterUI</Link>
    </div>
);

export default Header;