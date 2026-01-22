const About = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-lg shadow-xl p-8 border border-gray-700">
                <h1 className="text-4xl font-bold mb-6 text-red-400">About Recipe Manager</h1>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Welcome to Recipe Manager - your personal digital cookbook!
                    This application helps you organize, discover, and share your favorite recipes.
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-white">Features</h2>
                <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                        <span className="text-red-400">✓</span>
                        <span>Create and save unlimited recipes</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-400">✓</span>
                        <span>Organize recipes by categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-400">✓</span>
                        <span>Easy-to-use interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-400">✓</span>
                        <span>Built with React & Tailwind CSS</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;