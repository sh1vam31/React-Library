import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
    const { data } = useContext(recipecontext);

    const renderrecipes = data.map((recipe) => (
        <div
            key={recipe.id}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-red-400 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300"
        >
            {/* Recipe Image */}
            <div className="h-48 bg-gray-800 overflow-hidden">
                {recipe.image ? (
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600 text-6xl">
                        🍽️
                    </div>
                )}
            </div>

            {/* Recipe Content */}
            <div className="p-5">
                <h2 className="text-2xl font-bold text-white mb-2">{recipe.title}</h2>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
                        👨‍🍳 {recipe.chef || "Unknown Chef"}
                    </span>
                    <span className="text-sm bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
                        {recipe.category || "Uncategorized"}
                    </span>
                </div>

                {recipe.description && (
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {recipe.description}
                    </p>
                )}

                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors font-medium">
                    View Recipe
                </button>
            </div>
        </div>
    ));

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 text-center text-red-400">
                📚 All Recipes
            </h1>

            {data.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-gray-400 text-xl mb-4">No recipes yet!</p>
                    <a href="/create-recipe" className="text-red-400 hover:text-red-300 underline">
                        Create your first recipe
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderrecipes}
                </div>
            )}
        </div>
    );
};

export default Recipes;