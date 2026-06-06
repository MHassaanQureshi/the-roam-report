import { motion } from "framer-motion"
import Hero from "../Components/Home-Components/Hero"
import AboutHero from "../Components/About-Components/AboutHero"
import HomeFooter from "../Components/Home-Components/HomeFooter"

export default function AboutPage(){
    return(
        <>
       <div>
          {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.div>
       </div>
       <div >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AboutHero />
        </motion.div>
       </div>
       <div>
        <motion.div
                    className="w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <HomeFooter />
                  </motion.div>
       </div>
       
        </>
    )
}