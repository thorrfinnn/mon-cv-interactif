"use client"

import { useState } from "react"
import { AnimatedMenu } from "@/components/animated-menu"
import { Education } from "@/components/sections/education"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Profile } from "@/components/sections/profile"
import { motion } from "framer-motion"

type Section = "profile" | "education" | "skills" | "experience" | "projects"

export function CVLayout() {
  const [activeSection, setActiveSection] = useState<Section>("profile")

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 sticky top-4 h-fit">
          <AnimatedMenu activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        <div className="w-full md:w-3/4">
          <motion.div
            className="bg-card rounded-2xl p-6 shadow-lg border border-border/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === "profile" && <Profile />}
            {activeSection === "education" && <Education />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "projects" && <Projects />}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

