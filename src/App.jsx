import { useState } from "react";
import { AnimatePresence } from "motion/react";
import ThemeToggle from "./components/ThemeToggle";
import StartScreen from "./components/StartScreen";
import CategorySelect from "./components/CategorySelect";
import QuizScreen from "./components/QuizScreen";
import ScoreScreen from "./components/ScoreScreen";
import { quizData } from "./data/questions";

function App() {
    const [currentScreen, setCurrentScreen] = useState("start");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [finalScore, setFinalScore] = useState(0);

    // Start button handler -> move to category selection screen
    const handleStart = () => {
        setCurrentScreen("category");
    };

    // Category selection handler -> set selected category and move to quiz
    const handleSelectCategory = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentScreen("quiz");
    };

    // Quiz completion handler -> set final score and move to score screen
    const handleQuizComplete = (score) => {
        setFinalScore(score);
        setCurrentScreen("score");
    };

    // Restart quiz handler -> go back to category selection
    const handleRestart = () => {
        setCurrentScreen("category");
    };

    // Go to home screen handler -> reset state
    const handleHome = () => {
        setSelectedCategory("");
        setFinalScore(0);
        setCurrentScreen("start");
    };

    return (
        <div className="min-h-screen bg-linear-330 from-mint via-peach to-sky dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
            {/* Theme toggle button */}
            <ThemeToggle />

            {/* AnimatePresence handles screen transition animations */}
            <AnimatePresence mode="wait">
                {/* Start Screen */}
                {currentScreen === "start" && (
                    <StartScreen key="start" onStart={handleStart} />
                )}

                {/* Category Selection Screen */}
                {currentScreen === "category" && (
                    <CategorySelect
                        key="category"
                        onSelectCategory={handleSelectCategory}
                    />
                )}

                {/* Quiz Screen */}
                {currentScreen === "quiz" && (
                    <QuizScreen
                        key="quiz"
                        questions={quizData[selectedCategory]}
                        onComplete={handleQuizComplete}
                    />
                )}

                {/* Score Screen */}
                {currentScreen === "score" && (
                    <ScoreScreen
                        key="score"
                        score={finalScore}
                        totalQuestions={quizData[selectedCategory].length}
                        onRestart={handleRestart}
                        onHome={handleHome}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
