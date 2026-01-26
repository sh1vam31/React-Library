import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        setdata([...data, recipe]);
        toast.success("New recipe created!");
        reset();
        navigate("/recipes");
    };

    return (
        <div className="max-w-3xl mx-auto px-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700/50">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Create New Recipe
                </h1>

                <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-6">
                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-semibold text-lg">Recipe Image URL</label>
                        <input
                            className="w-full bg-gray-800/80 border-2 border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-300 hover:border-gray-500"
                            {...register("image")}
                            type="url"
                            placeholder="https://example.com/image.jpg"
                        />
                        <small className="text-red-400/80 text-xs mt-2 block font-medium">
                            Enter a valid image URL
                        </small>
                    </div>

                    {/* Recipe Title */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-semibold text-lg">Recipe Title</label>
                        <input
                            className="w-full bg-gray-800/80 border-2 border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-300 hover:border-gray-500"
                            {...register("title")}
                            type="text"
                            placeholder="e.g., Classic Margherita Pizza"
                        />
                    </div>

                    {/* Chef Name */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-semibold text-lg">Chef Name</label>
                        <input
                            className="w-full bg-gray-800/80 border-2 border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-300 hover:border-gray-500"
                            {...register("chef")}
                            type="text"
                            placeholder="Chef's name"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-semibold text-lg">Description</label>
                        <textarea
                            className="w-full bg-gray-800/80 border-2 border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-300 hover:border-gray-500 resize-none"
                            {...register("desc")}
                            rows="3"
                            placeholder="Brief description of your recipe..."
                        ></textarea>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-semibold text-lg">Ingredients</label>
                        <textarea
                            className="w-full bg-gray-800/80 border-2 border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-300 hover:border-gray-500 resize-none"
                            {...register("ingr")}
                            rows="4"
                            placeholder="flour, sugar, eggs, butter (separate by comma)"
                        ></textarea>
                    </div>

                    {/* Instructions */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-semibold text-lg">Instructions</label>
                        <textarea
                            className="w-full bg-gray-800/80 border-2 border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-300 hover:border-gray-500 resize-none"
                            {...register("inst")}
                            rows="5"
                            placeholder="Step 1: ..., Step 2: ..., Step 3: ... (separate by comma)"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-semibold text-lg">Category</label>
                        <select
                            className="w-full bg-gray-800/80 border-2 border-gray-600 rounded-xl p-4 text-white focus:outline-none focus:border-red-400 focus:ring-4 focus:ring-red-400/20 transition-all duration-300 hover:border-gray-500 cursor-pointer"
                            {...register("category")}
                        >
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="supper">Supper</option>
                            <option value="dinner">Dinner</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-1 mt-8"
                    >
                        Save Recipe ✨
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;