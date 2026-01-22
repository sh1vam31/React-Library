import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
    const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        setdata([...data, recipe]);
        reset();
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-lg shadow-xl p-8 border border-gray-700">
                <h1 className="text-3xl font-bold mb-6 text-red-400">🍽️ Create New Recipe</h1>

                <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-6">
                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">Recipe Image URL</label>
                        <input
                            className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all"
                            {...register("image")}
                            type="url"
                            placeholder="https://example.com/image.jpg"
                        />
                        <small className="text-red-400 text-xs mt-1 block">
                            Enter a valid image URL
                        </small>
                    </div>

                    {/* Recipe Title */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">Recipe Title</label>
                        <input
                            className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all"
                            {...register("title")}
                            type="text"
                            placeholder="e.g., Classic Margherita Pizza"
                        />
                    </div>

                    {/* Chef Name */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">Chef Name</label>
                        <input
                            className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all"
                            {...register("chef")}
                            type="text"
                            placeholder="Chef's name"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">Description</label>
                        <textarea
                            className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all resize-none"
                            {...register("description")}
                            rows="3"
                            placeholder="Brief description of your recipe..."
                        ></textarea>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">Ingredients</label>
                        <textarea
                            className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all resize-none"
                            {...register("ingredients")}
                            rows="4"
                            placeholder="flour, sugar, eggs, butter (separate by comma)"
                        ></textarea>
                    </div>

                    {/* Instructions */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">Instructions</label>
                        <textarea
                            className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all resize-none"
                            {...register("instructions")}
                            rows="5"
                            placeholder="Step 1: ..., Step 2: ..., Step 3: ... (separate by comma)"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-medium">Category</label>
                        <select
                            className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all cursor-pointer"
                            {...register("category")}
                        >
                            <option value="cat-1">Breakfast</option>
                            <option value="cat-2">Lunch</option>
                            <option value="cat-3">Dinner</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                    >
                        💾 Save Recipe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;