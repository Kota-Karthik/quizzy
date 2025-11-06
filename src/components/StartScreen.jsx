import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import Card from "./ui/Card";

export default function StartScreen({ onStart }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center min-h-screen p-4">
            <Card className="max-w-lg w-full p-8 text-center space-y-6 shadow-xl">
                {/* Icon Section */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 150 }}>
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto text-white bg-linear-330 from-teal-500 to-orange-400 shadow-lg">
                        <Brain className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                </motion.div>

                {/* Title */}
                {/* Title Section */}
                <div className="space-y-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 to-orange-400 bg-clip-text text-transparent">
                        IDP Quiz
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center items-center space-x-1">
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">by</span>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">IDP Custom Plugin</span>
                    </motion.div>
                </div>
                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Test your knowledge across various IDP features. Challenge
                    yourself and see how well you score!
                </motion.p>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-28 h-10 sm:w-36 sm:h-12 mx-auto rounded-full text-sm sm:text-base text-white bg-linear-90 from-teal-500 to-orange-400 font-medium shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    aria-label="Start the quiz"
                    onClick={onStart}>
                    Start Quiz
                </motion.button>
            </Card>
        </motion.div>
    );
}
