import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 sticky top-4 z-50 transition-all duration-300 hover:shadow-red-500/10">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 md:gap-x-8 py-5 px-4 md:px-6">
                <NavLink
                    className={(e) => (
                        e.isActive
                            ? "relative text-red-400 font-bold pb-2 border-b-2 border-red-400 px-3 md:px-4 text-base md:text-lg transition-all duration-300 hover:scale-105 hover:text-red-300"
                            : "relative text-gray-300 hover:text-white transition-all duration-300 pb-2 border-b-2 border-transparent hover:border-gray-500 px-3 md:px-4 text-base md:text-lg hover:scale-105"
                    )}
                    to="/"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-xl md:text-2xl">🏠</span>
                        <span className="hidden sm:inline">Home</span>
                    </span>
                </NavLink>
                <NavLink
                    className={(e) => (
                        e.isActive
                            ? "relative text-red-400 font-bold pb-2 border-b-2 border-red-400 px-3 md:px-4 text-base md:text-lg transition-all duration-300 hover:scale-105 hover:text-red-300"
                            : "relative text-gray-300 hover:text-white transition-all duration-300 pb-2 border-b-2 border-transparent hover:border-gray-500 px-3 md:px-4 text-base md:text-lg hover:scale-105"
                    )}
                    to="/recipes"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-xl md:text-2xl">📚</span>
                        <span className="hidden sm:inline">Recipes</span>
                    </span>
                </NavLink>
                <NavLink
                    className={(e) => (
                        e.isActive
                            ? "relative text-red-400 font-bold pb-2 border-b-2 border-red-400 px-3 md:px-4 text-base md:text-lg transition-all duration-300 hover:scale-105 hover:text-red-300"
                            : "relative text-gray-300 hover:text-white transition-all duration-300 pb-2 border-b-2 border-transparent hover:border-gray-500 px-3 md:px-4 text-base md:text-lg hover:scale-105"
                    )}
                    to="/about"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-xl md:text-2xl">ℹ️</span>
                        <span className="hidden sm:inline">About</span>
                    </span>
                </NavLink>
                <NavLink
                    className={(e) => (
                        e.isActive
                            ? "relative bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-2.5 px-5 md:px-6 rounded-full shadow-lg hover:shadow-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105"
                            : "relative bg-gradient-to-r from-gray-700 to-gray-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold py-2.5 px-5 md:px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    )}
                    to="/create-recipe"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-lg md:text-xl">➕</span>
                        <span>Create</span>
                    </span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;