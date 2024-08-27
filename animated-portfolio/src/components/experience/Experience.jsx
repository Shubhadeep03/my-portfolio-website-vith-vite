import './Experience.scss';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'Brand Representative',
        img: 'https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg',
        description: 'SAs a former Brand Representative at SquadStack, I gained valuable experience in brand promotion, customer engagement, and marketing strategies. My experience is complemented by strong skills in communication, teamwork, and problem-solving, making me a well-rounded professional. I am eager to contribute my knowledge and continue growing in the industry.',
    },
    
];

const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref,
        // offset: ['start start', 'end start'] 
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300,300])
    return (
        <section >
            {/* <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} />
            <p>{item.description}</p> */}
            {/* {item.title} */}
            <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer"  style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.description}</p>
                    {/* <button onClick={handleClick}>See Demo</button> */}
                </motion.div>
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <motion.h1 >Experiences</motion.h1>
                <motion.div style={{ scaleX }} className="progressBar" />
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Experience;
