import Landing from "./Landing/Landing";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial="hidden" animate="visible">
      <br />
      <br />
      <Landing />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <br />
    </motion.div>
  );
};

export default Home;
