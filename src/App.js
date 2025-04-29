import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="app-container">
      <h1 className="title">Interactive Profile Card</h1>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="toggle-card-btn"
        onClick={() => setShowCard(!showCard)}
      >
        {showCard ? "Hide Profile" : "Show Profile"}
      </motion.button>

      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100vw", opacity: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="profile-card"
          >
            <motion.img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="profile-pic"
              whileHover={{ scale: 1.1 }}
            />
            <h2>Elijah Chileshe</h2>
            <p>Software Developer | Open Source Enthusiast</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="details-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Details" : "View Details"}
            </motion.button>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  className="details-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p>Email: elijah@example.com</p>
                  <p>Location: Lusaka, Zambia</p>
                  <p>Projects: Orthanc, StocKeeper</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
