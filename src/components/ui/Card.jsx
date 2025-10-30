export default function Card({ className = "", children }) {
    return (
        <div
            className={`w-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl transition-colors duration-300 ${className}`}>
            {children}
        </div>
    );
}
