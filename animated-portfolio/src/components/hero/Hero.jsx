import './Hero.scss';
import { motion } from 'framer-motion'
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
            // delay:0.5,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: 'infinity',
        }
    }
};
const SliderVarients = {
    initial: {
        x: 0,

    },
    animate: {
        x: "-220%",

        transition: {
            duration: 20,
            repeatType: 'mirror',
            repeat: 'infinity',
        },
    },
};
const Hero = () => {
    return (
        <motion.div className='hero'>
            <motion.div className="wrapper">
                <motion.div className="textContainer" variants={textVariants}>
                    <motion.h2 variants={textVariants} initial="initial" animate="animate">SHUBHADEEP NANDI</motion.h2>
                    <motion.h1 variants={textVariants} initial="initial" animate="animate">
                        Full Stack Developer With MERN
                    </motion.h1>
                    <motion.div className="buttons" variants={textVariants} initial="initial" animate="animate">
                        <motion.button variants={textVariants} initial="initial" animate="animate" whileHover={{color:"orange",scale:0.9}}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants} initial="initial" animate="animate" whileHover={{color:"orange",scale:0.9}}>
                            Contact Me
                        </motion.button>

                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="scroll icon" />
                </motion.div>
            </motion.div>
            <motion.div className="slidingTextContainer" variants={SliderVarients} initial="initial" animate="animate">
                Web Developer | Software Engineer
            </motion.div>
            {/* <motion.div variants={textVariants} className="imageContainer">
                <motion.img src="./my.png" alt="hero image" />

            </motion.div> */}

        </motion.div>
    )
}

export default Hero
