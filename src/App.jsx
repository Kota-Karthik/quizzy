import { useState } from "react";
import { AnimatePresence } from "motion/react";
import ThemeToggle from "./components/ThemeToggle";
import StartScreen from "./components/StartScreen";
import CategorySelect from "./components/CategorySelect";
import QuizScreen from "./components/QuizScreen";
import { quizData } from "./data/questions";

function App() {
    const [currentScreen, setCurrentScreen] = useState("start");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [finalScore, setFinalScore] = useState(0);

    const handleStart = () => {
        setCurrentScreen("category");
    };

    const handleSelectCategory = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentScreen("quiz");
    };

    const handleQuizComplete = (score) => {
        setFinalScore(score);
        setCurrentScreen("score");
        
    };

    return (
        <div className="min-h-screen bg-linear-330 from-mint via-peach to-sky dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
            <ThemeToggle />
            <AnimatePresence mode="wait">
                {currentScreen === "start" && (
                    <StartScreen key="start" onStart={handleStart} />
                )}

                {currentScreen === "category" && (
                    <CategorySelect
                        key="category"
                        onSelectCategory={handleSelectCategory}
                    />
                )}

                {currentScreen === "quiz" && (
                    <QuizScreen
                        questions={quizData[selectedCategory]}
                        onComplete={handleQuizComplete}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
