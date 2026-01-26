const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    About Recipe Manager
                </h1>
                <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                    Welcome to Recipe Manager - your personal digital cookbook!
                    This application helps you organize, discover, and share your favorite recipes.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Features</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group hover:scale-105">
                        <span className="text-2xl text-red-400 group-hover:scale-125 transition-transform duration-300">✓</span>
                        <span className="text-base md:text-lg">Create and save unlimited recipes</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group hover:scale-105">
                        <span className="text-2xl text-red-400 group-hover:scale-125 transition-transform duration-300">✓</span>
                        <span className="text-base md:text-lg">Organize recipes by categories</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group hover:scale-105">
                        <span className="text-2xl text-red-400 group-hover:scale-125 transition-transform duration-300">✓</span>
                        <span className="text-base md:text-lg">Easy-to-use interface</span>
                    </li>
                    <li className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group hover:scale-105">
                        <span className="text-2xl text-red-400 group-hover:scale-125 transition-transform duration-300">✓</span>
                        <span className="text-base md:text-lg">Built with React & Tailwind CSS</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;