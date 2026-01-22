const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                🍳 Recipe Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Discover, create, and manage your favorite recipes all in one place.
                Start your culinary journey today!
            </p>
            <div className="flex gap-4">
                <a href="/recipes" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                    Browse Recipes
                </a>
                <a href="/create-recipe" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                    Create Recipe
                </a>
            </div>
        </div>
    );
};

export default Home;
// we have to add fav functionality at last