import { AnimatePresence, motion } from 'framer-motion'

export default function MainContent() {
  return (
    <AnimatePresence>
      <main>
        <header className="contentContainer">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="..//harsh.jpg"
              aria-label="Profile Picture"
              className="profilePicture"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="username">@harshv5094</h3>
          </motion.div>
        </header>

        <motion.ul
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <li>
            <a href="https://www.twitter.com/harshv5094">
              <img src="/twitter.svg" alt="Twitter" width="20" />
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/harshv5094">
              <img src="/instagram.svg" alt="Instagram" width="20" />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/harshv5094">
              <img src="/github.svg" alt="GitHub" width="20" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/harshv5094">
              <img src="/linkedin.svg" alt="Linkedin" width="20" />
              LinkedIn
            </a>
          </li>
        </motion.ul>
      </main>
    </AnimatePresence>
  )
}
