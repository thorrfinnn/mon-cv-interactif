"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Palette, MapPin, Phone } from "lucide-react"

export function Profile() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tight">SAAD JDOUA</h1>

        <div className="flex flex-wrap justify-center gap-3 text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Paris, France</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>saadjdoua11@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>+33 7 59 29 03 52</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/saad-jdoua"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>in/saad-jdoua</span>
          </a>
          <a
            href="https://github.com/thorrfinnn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>github.com/thorrfinnn</span>
          </a>
          <a
            href="https://behance.com/saadjdoua"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-500 hover:text-purple-600 transition-colors"
          >
            <Palette className="h-4 w-4" />
            <span>behance.com/saadjdoua</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 bg-secondary/30 p-6 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-4">À propos</h2>
        <p className="text-muted-foreground">
          Étudiant en ingénierie avec une passion pour le développement web et le design. Compétent en technologies
          front-end et back-end, avec une expérience en graphisme 3D. Disponible pour un stage à partir du 1er septembre
          2025.
        </p>
      </motion.div>
    </div>
  )
}

