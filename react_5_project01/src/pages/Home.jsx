const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <div className="space-y-6 max-w-4xl animate-in fade-in duration-700">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                    🍳 Recipe Manager
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                    Discover, create, and manage your favorite recipes all in one place.
                    Start your culinary journey today!
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <a
                        href="/recipes"
                        className="group relative bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/50 hover:-translate-y-1 w-full sm:w-auto text-center"
                    >
                        <span className="relative z-10">Browse Recipes</span>
                    </a>
                    <a
                        href="/create-recipe"
                        className="group relative bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-700/50 hover:-translate-y-1 w-full sm:w-auto text-center"
                    >
                        <span className="relative z-10">Create Recipe</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;