import PropTypes from "prop-types";
import { CiSquareMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";


const HomeCard = ({ equipment }) => {

    const { photo, name, price, rating, availability, _id , customization } = equipment;

  

    return (
        <div className="font-poppins card card-compact bg-base-100 w-80 lg:w-96 mx-auto shadow-xl">
            <figure>
                <img className="w-11/12 mx-auto rounded-2xl h-80"
                    src={photo} />
            </figure>
            <div className="card-body">
                <div className="h-20">
                    <h2 className="text-xl text-cyan-800 font-semibold">{name}</h2>
                </div>
                <hr className="border-cyan-800/80" />
                <div className="flex justify-between items-center">
                    <p><span className="font-semibold">Price :</span> {price}$</p>
                    <p className="flex items-center"><span className="font-semibold">Rating :  </span> {rating} <span className="text-amber-400"><IoMdStar /></span></p>
                </div>
                <p><span className="font-semibold">Availability :</span> {availability}</p>
                <p><span className="font-semibold">Customization : </span> {customization}</p>
                <div className="card-actions mt-2">
                    <div className="flex gap-8 mb-4">
                        <Link to={`/details/${_id}`}><p className="text-2xl font-bold"><CiSquareMore /></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

HomeCard.propTypes = {
    equipment: PropTypes.object,
    equipments : PropTypes.object ,
    setEquipments : PropTypes.func
}

export default HomeCard;