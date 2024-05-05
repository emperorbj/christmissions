
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    return (
        // navigation bar
        <nav className='bg-purple-400 w-full h-[70px]'>
            <div>
                Logo
            </div>
            <div>
                <Link to=''>
                    <button>Home</button>
                </Link>

                <Link to=''>
                    <button>About Us</button>
                </Link>

                <Link to=''>
                    <button>Contact Us</button>
                </Link>

                <Link to=''>
                    <button>Events</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavigationBar
