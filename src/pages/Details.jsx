import { useLoaderData } from "react-router-dom";
import { IoMdStar } from "react-icons/io";


const Details = () => {
    const equipment = useLoaderData();
    const { name, photo, price, rating, category, description, availability, customization, processTime } = equipment;
    
    return (
        <div className="mt-12 md:mt-24  md:w-10/12 mx-auto hero bg-cyan-800/80 text-base-100 md:rounded-3xl">
            <div className="hero-content flex-col lg:flex-row items-center">
                <img
                    src={photo}
                    className="max-w-sm rounded-lg shadow-2xl w-72" />
                <div>
                    <h1 className="text-3xl font-semibold">{name}</h1>
                    <p className="py-6">Price : {price}$</p>
                    <div className="mb-6">
                        <p className=""><span className="font-semibold">Availability : </span>{availability === "Available" ? "In stock" : "Out Of stock"}</p>
                        <p className="flex items-center"><span className="font-semibold">Rating : </span>{rating}<span className=" text-amber-300 text-lg"><IoMdStar /></span></p>
                        <p><span className="font-semibold">Category :</span> {category}</p>
                        <p><span className="font-semibold">Customization :</span> {customization}</p>
                        <p><span className="font-semibold">Delivery Time :</span> {processTime}</p>
                    </div>
                    <p className="w-11/12">Description : {description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;