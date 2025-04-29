import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const name = "Elijah Chileshe".split("");

function App() {
  const [isBroken, setIsBroken] = useState(false);

  return (
    <div className="app-container">
      <h1 className="title">CSC 5231 Advanced Web Technologies 2025</h1>

      <div className="name-container">
        <AnimatePresence>
          {!isBroken &&
            name.map((letter, index) => (
              <motion.span
                key={letter + index}
                initial={{
                  opacity: 0,
                  y: -40,
                  rotate: -15,
                }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 8, 0], // subtle float
                  x: [0, 5, -9, 0],
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 100,
                  scale: 0,
                  rotate: 360,
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: index * 0.2,
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.1,
                    type: "tween",
                  },
                  x: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.1,
                    type: "tween",
                  },
                }}
                className="letter fancy-letter"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
        </AnimatePresence>
      </div>

      {!isBroken && (
        <motion.button
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9, rotate: 2 }}
          className="break-button"
          onClick={() => setIsBroken(true)}
        >
          Delete Name
        </motion.button>
      )}
    </div>
  );
}

export default App;
