import { useState } from "react";
import { AnimatePresence } from "motion/react";
import ThemeToggle from "./components/ThemeToggle";
import StartScreen from "./components/StartScreen";
import CategorySelect from "./components/CategorySelect";

function App() {
    const [currentScreen, setCurrentScreen] = useState("start");

    const handleStart = () => {
        setCurrentScreen("category");
    };

    return (
        <div className="min-h-screen bg-linear-330 from-mint via-peach to-sky dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
            <ThemeToggle />
            <AnimatePresence mode="wait">
                {currentScreen === "start" && (
                    <StartScreen key="start" onStart={handleStart} />
                )}

                {currentScreen === "category" && (
                    <CategorySelect key="category" />
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
