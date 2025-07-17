import { motion } from "framer-motion";
import jkuat from "/uploads/JKUAT.png"
import jhub from "/uploads/JHUB.png"

const partners = [
  {
    name: "Jomo Kenyatta University of Agriculture and Technology",
    imgSrc: jkuat,
    url: "https://www.jkuat.ac.ke/",
    alt: "JKUAT Logo"
  },
  {
    name: "JHUB Africa",
    imgSrc: jhub,
    url: "https://jhubafrica.com/",
    alt: "JHUB Africa Logo"
  }
];

const PartnersSection = () => (
  <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
    <div className="max-w-4xl mx-auto text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Partners</h2>
      <p className="text-primary text-lg">We proudly collaborate with leading institutions to drive innovation and inclusivity.</p>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-12">
      {partners.map((partner, idx) => (
        <motion.a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="block"
          title={partner.name}
        >
          <img
            src={partner.imgSrc}
            alt={partner.alt}
            className="h-24 md:h-28 object-contain mx-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ background: "bg-cyan-700", borderRadius: 12, padding: 8 }}
          />
        </motion.a>
      ))}
    </div>
  </section>
);

export default PartnersSection; 