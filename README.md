# Quizzy

A fast, animated quiz app built with React and Vite. Choose a category, answer timed questions, and see your final score with smooth transitions and a clean UI.

**Live demo**: [quizzy-pearl-theta.vercel.app](https://quizzy-pearl-theta.vercel.app/)

## Features

-   Category selection with curated question sets
-   Per-question countdown timer and progress bar
-   Animated question transitions
-   Immediate correct/incorrect feedback
-   Final score screen
-   Light/Dark theme support

## Tech Stack

-   React + Vite
-   Motion (Framer Motion compatible) for animations
-   Lucide icons
-   Tailwind-style utility classes

## Getting Started

1. Install dependencies:
    ```bash
    npm install
    ```
2. Start the dev server:
    ```bash
    npm run dev
    ```
3. Build for production:
    ```bash
    npm run build
    ```

## Project Structure

-   `src/components/` UI components like `StartScreen.jsx`, `QuizScreen.jsx`, `ScoreScreen.jsx`
-   `src/data/questions.js` Question data grouped by category
-   `src/App.jsx` App state and screen routing

## License

MIT
