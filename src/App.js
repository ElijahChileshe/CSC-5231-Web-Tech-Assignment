import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  // Controls card visibility
  const [showDetails, setShowDetails] = useState(false);

  // Controls inner expanded content visibility
  const [showExtraDetails, setShowExtraDetails] = useState(false);

  // Toggle light/dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="title">Interactive Profile Card</h1>

      {/* Toggle buttons */}
      <div className="button-group">
        <motion.button
          className="toggle-card-btn"
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </motion.button>

        <motion.button
          className="toggle-card-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setShowDetails(!showDetails);
            setShowExtraDetails(false); // Reset extra details on card open/close
          }}
        >
          {showDetails ? "Hide Card" : "Click Me to Slide In"}
        </motion.button>
      </div>

      {/* Card Animation */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            key="profile"
            className="profile-card"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            <div className="profile-left">
              <motion.img
                src="Elijah.jpeg"
                alt="Elijah Chileshe"
                className="profile-img"
                whileHover={{ scale: 1.05 }}
              />
            </div>

            <div className="profile-right">
              <h2>Elijah Chileshe</h2>
              <p className="role">Software Developer | Open Source Advocate</p>
              <p>
                Building impactful systems in healthcare, agriculture, and
                research.
              </p>

              {/* Toggle extra details without hiding card */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="details-btn"
                onClick={() => setShowExtraDetails(!showExtraDetails)}
              >
                {showExtraDetails ? "Hide Details" : "View More Details"}
              </motion.button>

              {/* Extra details inside the card */}
              <AnimatePresence>
                {showExtraDetails && (
                  <motion.div
                    className="extra-details"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.8 }}
                  >
                    <ul>
                      <li>
                        Email:{" "}
                        <a href="mailto:elijah@cs.unza.zm">
                          elijah@cs.unza.zm
                        </a>
                      </li>
                      <li>Location: Lusaka, Zambia</li>
                      <li>Projects:</li>
                      <ul>
                        <li>📷 PACS System for UTH</li>
                        <li>🐐 StocKeeper livestock system</li>
                        <li>📚 JCTR digital archive</li>
                      </ul>
                      <li>Stack: React, Python, Bash, MongoDB</li>
                      <li>
                        Connect:
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://www.linkedin.com/in/elijah-chileshe-4277b3187"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              🔗 LinkedIn
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/elijahchileshe"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              💻 GitHub
                            </a>
                          </li>
                        </ul>
                      </li>
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
