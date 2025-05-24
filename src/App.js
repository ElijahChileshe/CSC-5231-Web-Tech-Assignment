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
        className="toggle-card-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowCard(!showCard)}
      >
        {showCard ? "Hide Card" : "Click Me"}
      </motion.button>

      <AnimatePresence>
        {showCard && (
          <motion.div
            className="profile-card"
            key="card"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <div className="profile-left">
              <motion.img
                src="Elijah.jpeg"
                alt="Elijah Chileshe"
                className="profile-img"
                whileHover={{ scale: 1.02 }}
              />
            </div>

            <div className="profile-right">
              <h2>Elijah Chileshe</h2>
              <p className="role">Software Developer | Open Source Advocate</p>
              <p>Building impactful systems in healthcare, agriculture, and research.</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="details-btn"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Hide Details" : "View More Details"}
              </motion.button>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    className="extra-details"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.5 }}
                  >
                    <ul>
                      <li>Email: elijah@datalab.unza.zm</li>
                      <li>Location: Lusaka, Zambia</li>
                      <li>Projects:</li>
                      <ul>
                        <li>📷 Orthanc for UTH</li>
                        <li>🐐 StocKeeper livestock system</li>
                        <li>📚 JCTR digital archive</li>
                      </ul>
                      <li>Stack: React, Python, Bash, Docker</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
