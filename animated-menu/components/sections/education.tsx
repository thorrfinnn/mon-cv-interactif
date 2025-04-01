"use client"

import { motion } from "framer-motion"

export function Education() {
  const educationItems = [
    {
      institution: "ESEO Paris-Vélizy",
      degree: "Étudiant en cycle d'ingénieur",
      period: "Septembre 2024 – Juillet 2027",
    },
    {
      institution: "École marocaine des sciences d'ingénieur",
      degree: "Étudiant en classes préparatoires",
      period: "Septembre 2022 – Juillet 2024",
    },
  ]

  return (
    <div className="space-y-6">
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Éducation
      </motion.h2>

      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-secondary/30 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-xl font-semibold">{item.institution}</h3>
                <p className="text-muted-foreground">{item.degree}</p>
              </div>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                {item.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

