import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 rounded-lg shadow-lg mb-10 border border-gray-700">
            <div className="flex items-center justify-center gap-x-2 md:gap-x-8 py-4 px-4">
                <NavLink
                    className={(e) => (
                        e.isActive
                            ? "text-red-400 font-semibold pb-1 border-b-2 border-red-400"
                            : "text-gray-300 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-gray-600"
                    )}
                    to="/"
                >
                    🏠 Home
                </NavLink>
                <NavLink
                    className={(e) => (
                        e.isActive
                            ? "text-red-400 font-semibold pb-1 border-b-2 border-red-400"
                            : "text-gray-300 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-gray-600"
                    )}
                    to="/recipes"
                >
                    📚 Recipes
                </NavLink>
                <NavLink
                    className={(e) => (
                        e.isActive
                            ? "text-red-400 font-semibold pb-1 border-b-2 border-red-400"
                            : "text-gray-300 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-gray-600"
                    )}
                    to="/about"
                >
                    ℹ️ About
                </NavLink>
                <NavLink
                    className={(e) => (
                        e.isActive
                            ? "text-red-400 font-semibold pb-1 border-b-2 border-red-400"
                            : "text-gray-300 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-gray-600"
                    )}
                    to="/create-recipe"
                >
                    ➕ Create
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;