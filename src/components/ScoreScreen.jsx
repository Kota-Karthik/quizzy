import { motion } from "motion/react";
import { Trophy, RotateCcw, Home } from "lucide-react";
import Card from "./ui/Card";

export default function ScoreScreen({
    score,
    totalQuestions,
    onRestart,
    onHome,
}) {
    // Calculate score percentage
    const percentage = (score / totalQuestions) * 100;

    // Determine the message based on percentage
    const getMessage = () => {
        if (percentage === 100) return "Perfect Score! 🎉";
        if (percentage >= 80) return "Excellent! 🌟";
        if (percentage >= 60) return "Great Job! 👏";
        if (percentage >= 40) return "Good Effort! 💪";
        return "Keep Practicing! 📚";
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center justify-center min-h-screen p-4">
            <Card className="max-w-lg p-8 text-center space-y-6">
                {/* Trophy Icon Animation */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                    }}>
                    <div
                        className={`flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto text-white shadow-lg ${
                            percentage >= 40 ? "bg-green-500" : "bg-orange-400"
                        }`}>
                        <Trophy className="w-9 h-9 sm:w-12 sm:h-12" />
                    </div>
                </motion.div>

                {/* Score Message */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="text-lg font-medium">
                    {getMessage()}
                </motion.h2>

                {/* Score Display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}>
                    <div className="w-48 mx-auto p-8 space-y-2 bg-slate-200 dark:bg-slate-700 rounded-2xl transition-colors duration-300">
                        <div className="text-center text-lg font-medium">
                            <span
                                className={`${
                                    percentage >= 40
                                        ? "text-green-500"
                                        : "text-orange-400"
                                }`}>
                                {score}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 transition-colors duration-500">
                                {" "}
                                / {totalQuestions}
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 transition-colors duration-500">
                            Correct Answers
                        </p>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3">
                    {/* Restart Quiz Button */}
                    <button
                        className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-linear-90 from-teal-500 to-orange-400 text-white cursor-pointer"
                        onClick={onRestart}>
                        <RotateCcw size={20} />
                        Try Another Category
                    </button>
                    {/* Go Back Home Button */}
                    <button
                        className="flex items-center justify-center gap-2 w-full h-12 rounded-xl border-2 border-slate-200 dark:border-slate-700 transition-colors duration-300 cursor-pointer"
                        onClick={onHome}>
                        <Home size={20} />
                        Back to Home
                    </button>
                </motion.div>
            </Card>
        </motion.div>
    );
}
