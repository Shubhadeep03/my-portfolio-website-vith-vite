import './Navbar.scss';
import { motion } from 'framer-motion'
import Sidebar from './sidebar/Sidebar';
const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span>Shubhadeep Nandi</motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/itz.subh.5/" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="facebook logo" />
                    </a>
                    <a href="https://www.instagram.com/shubhadeep.nandi/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="facebook logo" />
                    </a>
                    <a href="https://github.com/Shubhadeep03" target="_blank" rel="noopener noreferrer">
                        <img src="/github.png" alt="github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/shubhadeepnandi/" target="_blank" rel="noopener noreferrer" >
                        <img src="/linkdin.png"  alt="linkdin logo" />
                    </a>
                </div>
            </div>

        </div>
    )
} 

export default Navbar
