import { useContext } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
    const { data } = useContext(recipecontext);

    const renderrecipes = data.map((recipe) => (
        <div
            key={recipe.id}
            className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
        >
            {/* Recipe Image */}
            <RecipeCard key={recipe.id} recipe={recipe} />

            {/* Recipe Content */}
            <div className="p-6 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {recipe.title}
                </h2>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm bg-red-500/20 text-red-400 px-4 py-2 rounded-full font-medium border border-red-500/30">
                        👨‍🍳 {recipe.chef || "Unknown Chef"}
                    </span>
                    <span className="text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full font-medium border border-gray-600">
                        {recipe.category || "Uncategorized"}
                    </span>
                </div>

                {recipe.description && (
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                        {recipe.description}
                    </p>
                )}

                <Link
                    to={`/recipes/details/${recipe.id}`}
                    className="block w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-3 rounded-xl transition-all duration-300 font-bold text-base shadow-md hover:shadow-lg group-hover:scale-105 text-center"
                >
                    View Recipe →
                </Link>
            </div>
        </div>
    ));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10">
            {data.length > 0 ? (
                renderrecipes
            ) : (
                <div className="col-span-full text-center py-20">
                    <p className="text-gray-400 text-xl">No recipes found! Create your first recipe.</p>
                </div>
            )}
        </div>
    );
};

export default Recipes;