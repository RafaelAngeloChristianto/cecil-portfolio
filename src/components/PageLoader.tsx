import { motion } from "framer-motion";
import portrait from "/me.jpeg";

export const PageLoader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onAnimationComplete={onLoadComplete}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${portrait})`,
          filter: 'blur(8px) brightness(0.7)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#B91C1C]/30 to-black/60" />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center text-white"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Cecillia Tan Handoko
        </motion.h1>
        <motion.div
          className="w-16 h-1 bg-white mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};
