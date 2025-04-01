"use client"

import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      company: "Tasmim web",
      position: "Stagiaire en développement web",
      location: "Casablanca, Maroc",
      period: "Juin 2024 – Juillet 2024",
      description:
        "Développement d'une interface web optimisée pour la présentation des différents services que l'agence propose et faciliter l'interaction avec ses clients.",
    },
    {
      company: "Championnat d'Arabie Saoudite",
      position: "Graphiste 3D",
      location: "Arabie Saoudite, Ryadh",
      period: "Aout 2024 – Septembre 2024",
      description:
        "Réalisation d'une animation 3D professionnelle pour le lancement du ballon du championnat saoudien, combinant la créativité et précision technique, vu par +800k personnes.",
    },
    {
      company: "Al-Qadsiah Football Club",
      position: "Graphiste 3D",
      location: "Arabie Saoudite, Khobar",
      period: "Novembre 2024 – Décembre 2024",
      description:
        "J'ai conçu la présentation 3d du roster overwatch d'Al-qadsiah esports, créant des modèles et animations alignés avec leur identité visuelle. Ce projet a renforcé leur image de marque et l'engagement de leur communauté.",
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
        Expérience professionnelle
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-secondary/30 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-primary font-medium">{exp.position}</p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
              </div>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-muted-foreground">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

