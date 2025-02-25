'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import NavSidebar from './NavSidebar'
import { useSidebar } from './context/SidebarContext'

const modalVariants = {
  hidden: {
    x: '-100dvw',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 4,
      type: 'spring',
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    x: '-100dvw',
    opacity: 0,
  },
}

function SidebarModal({ isOpen, onClose }) {
  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-20 bg-[rgba(0,0,0,0.2)] opacity-50 "
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-accent-100 px-5 py-5 h-full w-[19rem] md:w-[26rem] shadow-lg overflow-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-end">
          <button className="button-icon" onClick={onClose}>
            <XMarkIcon />
          </button>
        </div>

        <NavSidebar />
      </motion.div>
    </motion.div>
  )
}

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <SidebarModal isOpen={isSidebarOpen} onClose={closeSidebar} />
      )}
    </AnimatePresence>
  )
}
