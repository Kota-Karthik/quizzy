import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Clock, CheckCircle2, XCircle } from "lucide-react";
import Card from "./ui/Card";

export default function QuizScreen({ questions, onComplete }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    // Countdown timer effect
    useEffect(() => {
        if (timeLeft <= 0) {
            handleNext();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // Handle answer selection
    const handleSelectAnswer = (index) => {
        if (showFeedback) return;
        setSelectedAnswer(index);
    };

    // Move to next question or finish quiz
    const handleNext = () => {
        // Update score if answer is correct
        if (
            selectedAnswer !== null &&
            currentQuestion.options[selectedAnswer] === currentQuestion.answer
        ) {
            setScore((prev) => prev + 1);
        }

        // Check if there are more questions
        if (currentQuestionIndex < questions.length - 1) {
            setShowFeedback(true);
            setTimeout(() => {
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedAnswer(null);
                setTimeLeft(15);
                setShowFeedback(false);
            }, 1000);
        } else {
            // Final question: calculate final score
            const isCurrentCorrect =
                selectedAnswer !== null &&
                currentQuestion.options[selectedAnswer] ===
                    currentQuestion.answer;
            const finalScore = isCurrentCorrect ? score + 1 : score;
            onComplete(finalScore);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center min-h-screen p-4">
            <Card className="max-w-3xl p-8">
                {/* Top section: Timer and Question Counter */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Clock size={20} className="text-teal-500" />
                        <span
                            className={`${
                                timeLeft <= 10 ? "text-orange-400" : ""
                            }`}>
                            {timeLeft}s
                        </span>
                    </div>

                    <span className="text-slate-500 dark:text-slate-400 transition-colors duration-300">
                        Question {currentQuestionIndex + 1} of{" "}
                        {questions.length}
                    </span>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                    <div
                        className={`h-full bg-linear-90 from-teal-500 to-orange-400`}
                        style={{ width: `${progress}%` }}></div>
                </div>

                {/* Animate presence for smooth question transitions */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestionIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 space-y-6">
                        <h3 className="font-medium">
                            {currentQuestion.question}
                        </h3>

                        {/* Options */}
                        <div className="space-y-3">
                            {currentQuestion.options.map((opt, index) => {
                                const isSelected = selectedAnswer === index;
                                const isCorrect =
                                    opt === currentQuestion.answer;
                                const showCorrect = showFeedback && isCorrect;
                                const showInCorrect =
                                    showFeedback && isSelected && !isCorrect;

                                // Determine button styling based on feedback & selection
                                const getButtonStyle = () => {
                                    if (showCorrect) {
                                        return "text-white bg-green-500 border-green-500";
                                    }
                                    if (showInCorrect) {
                                        return "text-white bg-orange-500 border-orange-500";
                                    }
                                    if (isSelected) {
                                        return "text-slate-900 dark:text-slate-100 bg-slate-200 dark:bg-slate-700 border-teal-500";
                                    }
                                    return "text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700";
                                };

                                return (
                                    <motion.button
                                        key={index}
                                        whileHover={{
                                            scale: showFeedback ? 1 : 1.02,
                                        }}
                                        whileTap={{
                                            scale: showFeedback ? 1 : 0.98,
                                        }}
                                        onClick={() =>
                                            handleSelectAnswer(index)
                                        }
                                        className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${getButtonStyle()} cursor-pointer`}
                                        disabled={showFeedback}>
                                        <div className="flex items-center justify-between">
                                            {opt}
                                            {showCorrect && (
                                                <CheckCircle2
                                                    className="w-5 h-5"
                                                    style={{ color: "#FFFFFF" }}
                                                />
                                            )}
                                            {showInCorrect && (
                                                <XCircle
                                                    className="w-5 h-5"
                                                    style={{ color: "#FFFFFF" }}
                                                />
                                            )}
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Next / Finish button */}
                        <button
                            className="w-full h-12 rounded-xl bg-linear-90 from-teal-500 to-orange-400 disabled:opacity-50 text-white font-medium text-sm transition-opacity duration-150 cursor-pointer"
                            onClick={handleNext}
                            disabled={selectedAnswer === null}>
                            {currentQuestionIndex < questions.length - 1
                                ? "Next Question"
                                : "Finish Quiz"}
                        </button>
                        <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4 pr-2">
                            Made with ❤️ by IDP knowledge assistant
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Card>
        </motion.div>
    );
}
