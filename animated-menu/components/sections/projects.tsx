"use client"

import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Gestion des projets avec la reconnaissance faciale",
      description: [
        "Application en python pour la gestion des employés avec inscription, connexion sécurisée et reconnaissance faciale",
        "Utilisation de TKINTER pour l'interface, et des bibliothèques comme NUMPY et PANDAS",
      ],
    },
    {
      title: "Gestion de produits électroniques",
      description: [
        "Emploi du diagramme de flux de données pour représenter les échanges d'information dans un système.",
        "Développement de l'interface en utilisant le langage Typescript.",
        "Création des services backend en utilisant Node.JS, le SGBD MySQL.",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <motion.div
        className="flex flex-col md:flex-row md:justify-between md:items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Projets</h2>
        <div className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
          Disponibilité : 1 septembre 2025 / Rythme : 2 semaines à l'entreprise
        </div>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-secondary/30 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.description.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

