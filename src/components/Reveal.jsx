import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ 
    children, 
    width = "fit-content", 
    delay = 0.25, 
    staggerChildren = 0,
    direction = "up" // "up", "down", "left", "right"
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        hidden: { 
            opacity: 0, 
            y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
            x: direction === "left" ? 75 : direction === "right" ? -75 : 0
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeOut",
                staggerChildren: staggerChildren
            }
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
