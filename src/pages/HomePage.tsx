import Article from "../Components/Home-Components/Article"
import Card from "../Components/Home-Components/Card"
import Hero from "../Components/Home-Components/Hero"
import HomeFooter from "../Components/Home-Components/HomeFooter"
import ShowsCard from "../Components/Home-Components/ShowsCard"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col mb-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.div>

        {/* Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Article />
        </motion.div>

        <div className="flex flex-col gap-4 justify-center w-full items-center mt-10">

          {/* Heading */}
          <motion.h1
            className="font-extrabold text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Latest travel stories
          </motion.h1>

          {/* Cards with stagger animation */}
          <motion.div
            className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2 md:m-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[ 
              { image:"/images/Image-1.png", data:"October 10,2025", details:"Finding Stillness in the Hills of San Cristóbal" },
              { image:"/images/Image-2.png", data:"Oct 2, 2025", details:"Wandering Through the Streets of Rome" },
              { image:"/images/Image-3.png", data:"September 17,2025", details:"Driving Across Monument Valley" },
              { image:"/images/Image-4.png", data:"Sep 2, 2025", details:"Walking the Terraces of Northern Vietnam" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                <Card {...item} />
              </motion.div>
            ))}
          </motion.div>

          {/* View all */}
          <motion.h1
            className="font-bold text-2xl mt-10 underline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            View all articles
          </motion.h1>

          {/* Shows */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ShowsCard />
          </motion.div>

          {/* Footer */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <HomeFooter />
          </motion.div>

        </div>
      </div>
    </>
  )
}