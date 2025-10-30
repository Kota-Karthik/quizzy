import { motion } from "motion/react";
import { Code, Palette, Globe, Trophy, BookOpen, Music } from "lucide-react";
import Card from "./ui/Card";

export default function CategorySelect() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center min-h-screen px-4">

            </motion.div>
    );
}
