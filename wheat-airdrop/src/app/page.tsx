'use client'

import { motion } from 'framer-motion'
import { TextIcon as Telegram, Twitter, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <header className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <Image
            src="/wheatsol.jpg"
            alt="Wheat Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">Wheat-sol</span>
        </div>
        <nav className="flex gap-4">
          <Link
            href="https://t.me/swhit_tg"
            className="hover:text-blue-400 transition-colors"
            target="_blank"
          >
            <Telegram className="w-6 h-6" />
          </Link>
          <Link
            href="https://x.com/wheat_linea?t=Na_12nX85dGaKHyqzQZ1bA&s=09"
            className="hover:text-blue-400 transition-colors"
            target="_blank"
          >
            <Twitter className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/wheat-eco"
            className="hover:text-blue-400 transition-colors"
            target="_blank"
          >
            <Github className="w-6 h-6" />
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Image
            src="/wheatsol.jpg"
            alt="Wheat Large Logo"
            width={200}
            height={200}
            className="mx-auto mb-8 w-32 h-32 md:w-48 md:h-48"
          />
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          <Link
            href="/guide"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Full guide
          </Link>
          <button
            disabled
            className="px-6 py-3 bg-gray-800 rounded-lg opacity-75 cursor-not-allowed"
          >
            Whitepaper
            <span className="ml-2 text-xs bg-red-500 px-2 py-1 rounded">Coming soon</span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            UNLOCK AND EARN
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Complete Quests, Connect Your Wallet, and Join Our Community to Earn Wheat Tokens.
            Early Adopters Get Special Rewards!
          </p>
          <Link
            href="https://t.me/wheatsol_bot"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-xl font-bold hover:from-blue-600 hover:to-blue-800 transition-colors"
          >
            CLAIM NOW
          </Link>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-800/50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Connect Wallet</h3>
            <p className="text-gray-400">Link your wallet to start earning Wheat tokens</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Complete Tasks</h3>
            <p className="text-gray-400">Participate in community activities and complete quests</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Earn Rewards</h3>
            <p className="text-gray-400">Get rewarded with SWHIT tokens for your participation</p>
          </div>
        </div>
      </main>
    </div>
  )
}

