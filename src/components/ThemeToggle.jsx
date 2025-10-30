import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { th } from "motion/react-client";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(theme);
            document.documentElement.className = savedTheme;
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
        document.documentElement.classList = newTheme;
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="fixed top-6 right-6 p-3 rounded-full shadow-lg backdrop-blur-sm z-50 border transition-all"
            style={{
                backgroundColor:
                    theme === "dark"
                        ? "rgb(30, 41, 59)"
                        : "rgba(255, 255, 255, 0.9)",
                borderColor:
                    theme === "dark"
                        ? "oklch(37.2% 0.044 257.287)"
                        : "oklch(92.9% 0.013 255.508)",
            }}
            aria-label="Toggle theme">
            <motion.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: theme === "dark" ? 180 : 0, scale: 1 }}
                transition={{ duration: 0.3 }}>
                {theme === "dark" ? (
                    <Sun
                        className="w-5 h-5"
                        style={{ color: "rgb(20, 184, 166)" }}
                    />
                ) : (
                    <Moon
                        className="w-5 h-5"
                        style={{ color: "rgb(20, 184, 166)" }}
                    />
                )}
            </motion.div>
        </motion.button>
    );
}
