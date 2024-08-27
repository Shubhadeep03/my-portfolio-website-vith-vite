import './Services.scss';
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const varients = {
    initial: {
        x: -300,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const Services = () => {

    const handleClick = () => {
        window.open('https://github.com/Shubhadeep03', '_blank');
    };

    const ref = useRef();
    const isInview = useInView(ref, { margin: '-100px' })

    return (
        <motion.div className='services' variants={varients} initial="initial" ref={ref} animate={isInview && "animate"}>
            <motion.div className="textContainer" variants={varients}>
                <p>I focus on helping your Conmpany <br />and Move Forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={varients}>
                <div className="title" >
                    <img src="./people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>
                            Beautiful
                        </motion.b> Projects
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>
                          did by
                        </motion.b> Myself.
                    </h1>
                    <button onClick={handleClick}>What I Do?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer">
                <motion.div className=" box box1" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>E-Commerce</h2>
                    <p>This modern E-commerce platform, crafted with the MERN stack (MongoDB, Express.js, React.js, Node.js), delivers an intuitive shopping experience. It boasts secure JWT-based authentication, dynamic product catalogs with search and filters, a fully functional shopping cart, and a smooth checkout process. An admin dashboard for managing products and orders highlights its full-stack capabilities and scalable design, showcasing a commitment to building real-world, robust applications.</p>
                    <button onClick={handleClick}>See...</button>
                </motion.div>
                <motion.div className="  box box2" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>StreamIT</h2>
                    <p>Streamit is a cutting-edge movie streaming platform built with React, designed to offer an immersive and smooth user experience. Featuring an intuitive interface, responsive design, and a robust backend, it ensures effortless navigation and dynamic content discovery. This project highlights my expertise in creating visually captivating and high-performance applications that deliver both style and functionality.</p>
                    <button onClick={handleClick} >See...</button>
                </motion.div>
                <motion.div className="  box box3" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>HungaryCo.</h2>
                    <p>Hungary Co." is a sleek and user-friendly food delivery platform that streamlines the ordering experience. Designed for ease and efficiency, this project features a responsive interface, real-time updates, and intuitive navigation. With a modern aesthetic and robust functionality, "Hungary Co." demonstrates my expertise in developing polished, high-performance applications that effectively meet user needs and enhance engagement.</p>
                    <button onClick={handleClick}>See...</button>
                </motion.div>
                <motion.div className="  box box4" whileHover={{ background: "lightgray", color: "black", }}>
                    <h2>Mera India</h2>
                    <p>Mera India is a dynamic travel platform that transforms trip planning into an effortless adventure. With its sleek design, real-time booking features, and personalized recommendations, the site delivers a seamless user experience. This project showcases my ability to create visually engaging and highly functional applications that simplify travel and enhance user satisfaction.
</p>
                    <button onClick={handleClick}>See...</button>
                </motion.div>
            </motion.div>

        </motion.div>

    )
}

export default Services
