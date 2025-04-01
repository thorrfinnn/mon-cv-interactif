"use client"

import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      skills: ["Java", "PHP", "JavaScript", "Python", "C", "C++", "VHDL"],
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Technologies du Front Office",
      skills: [
        "Vue.js",
        "ReactJS",
        "Responsive Design",
        "UI/UX",
        "React Native",
        "Bootstrap",
        "Tailwind",
        "JavaScript libraries",
        "ThreeJS",
        "Typescript",
        "Figma",
      ],
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Technologies Backend",
      skills: ["Laravel", "Symfony", "Node.js", "Spring Boot", "REST APIs", "MySQL", "MongoDB", "Django"],
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "Outils",
      skills: [
        "Git",
        "Bash",
        "Unix systems",
        "Docker",
        "Kubernetes",
        "Adobe Photoshop",
        "Blender",
        "CLO3D",
        "Illustrator",
      ],
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      title: "Langues parlées",
      skills: ["Français : Courant", "Anglais : Courant"],
      color: "bg-red-500/10 text-red-500",
    },
    {
      title: "Méthodes de modélisation",
      skills: ["UML", "Usecases", "Merise"],
      color: "bg-teal-500/10 text-teal-500",
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
        Compétences
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-secondary/30 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={`px-3 py-1 rounded-full text-sm ${category.color}`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

