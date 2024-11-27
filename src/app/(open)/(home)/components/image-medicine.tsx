import Image from 'next/image'
import { motion } from 'motion/react'

export default function ImageMedicine() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden w-[486px] h-[515px] rounded-lg rounded-tl-[110px] absolute right-10 -z-10"
    >
      <Image
        src="/comprimidos-amarelo.jpg"
        width={776}
        height={515}
        alt=""
        priority
        className="aspect-0944/1 object-cover w-auto !max-w-none max-h-full"
      />
    </motion.div>
  )
}
