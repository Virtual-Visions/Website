"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectSectionProps {
  title: string
  items: {
    title: string
    description: string
    imageSrc: string
  }[]
}

export default function ProjectSection({ title, items }: ProjectSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light tracking-wider mb-12 text-center">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
