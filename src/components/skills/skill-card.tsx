import { motion } from "framer-motion"

interface SkillCardProps {
  name: string
  level: number
  color: string
  category: "frontend" | "backend" | "tools" | "design"
  logo: string
  index: number
}

export function SkillCard({ name, level, color, category, logo, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800/70 backdrop-blur-sm hover:bg-gray-800 transition-all p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-transparent group-hover:to-teal-500/10 transition-all duration-500" />

        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-10 h-10 rounded-md overflow-hidden bg-white/10 p-1.5">
            <img
              src={logo || "/placeholder.svg"}
              alt={`${name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
        </div>

        <div className="relative h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>

        <div className="mt-2 flex justify-between items-center">
          <span className="text-xs text-gray-400">
            {category === "frontend" && "Frontend"}
            {category === "backend" && "Backend"}
            {category === "tools" && "Tools"}
            {category === "design" && "Design"}
          </span>
          <span className="text-sm font-medium text-white">{level}%</span>
        </div>
      </div>
    </motion.div>
  )
}