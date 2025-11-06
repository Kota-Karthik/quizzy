import { motion } from "motion/react";
import { Code, Palette, Globe, Trophy, BookOpen, Music } from "lucide-react";
import Card from "./ui/Card";

// Define all categories for the quiz
const categories = [
    {
        id: "Environment_management",
        name: "Environment management",
        icon: <Code className="w-8 h-8" />,
        gradientClass: "bg-linear-330 from-cyan-500 to-teal-500",
    },
    {
        id: "CD_auto_discovery",
        name: "CD auto-discovery",
        icon: <Palette className="w-8 h-8" />,
        gradientClass: "bg-linear-330 from-purple-400 to-pink-400",
    },
    {
        id: "Customisable_Catalog_table",
        name: "Customisable Catalog table",
        icon: <Globe className="w-8 h-8" />,
        gradientClass: "bg-linear-330 from-green-500 to-green-400",
    },
    {
        id: "Workflow_execution_enhancements",
        name: "Workflow execution enhancements",
        icon: <Trophy className="w-8 h-8" />,
        gradientClass: "bg-linear-330 from-orange-400 to-orange-500",
    },
    {
        id: "Scorecard_Advanced_checks",
        name: "Scorecard & Advanced checks",
        icon: <BookOpen className="w-8 h-8" />,
        gradientClass: "bg-linear-330 from-yellow-400 to-yellow-300",
    },
    {
        id: "IDP_AI_powered_Knowledge_Agent",
        name: "IDP AI powered Knowledge Agent",
        icon: <Music className="w-8 h-8" />,
        gradientClass: "bg-linear-330 from-indigo-400 to-purple-400",
    },
];

export default function CategorySelect({ onSelectCategory }) {
    return (
        // Outer container with fade-in animation
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center min-h-screen p-4">
            {/* Card container */}
            <Card className="max-w-4xl p-8 text-center">
                {/* Heading with slight animation */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4 text-lg font-medium transition-colors duration-300">
                    Choose Your Category
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    Select a topic to begin your quiz
                </motion.p>

                {/* Grid of categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.1 * index,
                                type: "spring",
                                stiffness: 100,
                            }}>
                            {/* Category button */}
                            <button
                                className={`
                                    flex flex-col items-center justify-center gap-1 w-full h-28 px-3 py-2 text-white 
                                    rounded-xl hover:shadow-xl transition-shadow duration-200 
                                    ${category.gradientClass} cursor-pointer
                                `}
                                onClick={() => onSelectCategory(category.id)}>
                                {category.icon}
                                <span className="sm:text-lg font-medium">
                                    {category.name}
                                </span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </Card>
        </motion.div>
    );
}
