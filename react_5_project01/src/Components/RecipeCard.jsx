import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const { id, image, title, desc, chef } = props.recipe;
    return (
        <Link
            to={`/recipes/details/${id}`}
            className="relative block group overflow-hidden"
        >
            <div className="relative overflow-hidden h-56 md:h-64">
                <img
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    src={image}
                    alt={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </Link>
    );
};

export default RecipeCard;