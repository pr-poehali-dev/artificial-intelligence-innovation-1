import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      ref={containerRef}
      className="relative bg-secondary px-6 py-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div
          className="flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          style={{ y }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://cdn.poehali.dev/projects/827bce57-2eb5-42c3-a483-5a3d2fbae521/bucket/2082c0b3-a249-4a73-94a7-a8f88e4b4aad.jpg"
            alt="Виктория Боброва"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Стилист</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Виктория <em className="italic">Боброва</em>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-md">
            Помогаю людям выглядеть так, как они хотят себя чувствовать. Работаю с образами для жизни, бизнеса и съёмок — онлайн и офлайн.
          </p>
          <div className="flex gap-10 mt-8">
            <div>
              <span className="text-3xl font-serif text-foreground">7+</span>
              <p className="text-muted-foreground text-sm mt-1">лет опыта</p>
            </div>
            <div>
              <span className="text-3xl font-serif text-foreground">300+</span>
              <p className="text-muted-foreground text-sm mt-1">клиентов</p>
            </div>
            <div>
              <span className="text-3xl font-serif text-foreground">50+</span>
              <p className="text-muted-foreground text-sm mt-1">съёмок</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}