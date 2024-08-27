import { useRef } from 'react';
import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'HTM5 CSS3 Javascript',
        img: 'https://st.depositphotos.com/3900811/52219/v/1600/depositphotos_522196780-stock-illustration-html-css-and-javascript-suit.jpg',
        description: 'Skilled in HTML, CSS, and JavaScript, I excel in crafting responsive, visually appealing websites. With a strong foundation in front-end technologies, I am adept at building and styling interactive web applications to deliver seamless user experiences.',
    },
    {
        id: 2, // Updated id to be unique
        title: 'React.js Node.js',
        img: 'https://media.excellentwebworld.com/wp-content/uploads/2021/11/14055734/combination-of-node.js-with-react-js.webp',
        description: 'Proficient in React.js and Node.js, I specialize in developing dynamic, high-performance web applications. With deep expertise in building scalable front-end interfaces and robust server-side solutions, I deliver comprehensive full-stack solutions that drive exceptional user experiences.',
    },
    {
        id: 3, // Updated id to be unique
        title: 'Express.js MongoDB',
        img: 'https://miro.medium.com/v2/resize:fit:1400/1*oXezqIzZQbN_vP6DF7TEtw.jpeg',
        description: 'Skilled in Express.js and MongoDB, I excel at creating efficient and scalable server-side applications. With strong expertise in building RESTful APIs and managing complex data structures, I deliver robust backend solutions that enhance application performance and reliability.',
    },
    {
        id: 4, // Updated id to be unique
        title: 'tailwind bootstrap ', 
        img: 'https://blogs.purecode.ai/blogs/wp-content/uploads/2023/11/1xwAIUbfad95lsuGf2n9nnA.jpeg',
        description: 'Proficient in Tailwind CSS and Bootstrap, I design and implement responsive, visually appealing interfaces with ease. My expertise extends to Framer Motion for crafting dynamic animations and Firebase for scalable, real-time backend solutions, ensuring engaging and functional web applications.',
    },
    {
        id: 5, // Updated id to be unique
        title: ' framer-motion firebase', 
        img: 'https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frjdzd6dl83cdqxmvqpvr.png',
        description: 'Proficient in Tailwind CSS and Bootstrap, I design and implement responsive, visually appealing interfaces with ease. My expertise extends to Framer Motion for crafting dynamic animations and Firebase for scalable, real-time backend solutions, ensuring engaging and functional web applications.',
    }
];

const Single = ({ item }) => {
    const handleClick = () => {
        window.open('https://github.com/Shubhadeep03', '_blank');
    };
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
                    <button onClick={handleClick}>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <motion.h1 >Featured skills</motion.h1>
                <motion.div style={{ scaleX }} className="progressBar" />
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
