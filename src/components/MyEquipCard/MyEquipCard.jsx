import PropTypes from "prop-types";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiSquareMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import Swal from 'sweetalert2'

const MyEquipCard = ({ equipment, equipments, setEquipments }) => {

    const { photo, name, price, rating, availability, _id, customization } = equipment;

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //  

                fetch(`https://equisports-server-side.vercel.app/equipments/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The product has been deleted.",
                                icon: "success"
                            });

                            const remaining = equipments.filter(equipment => equipment._id !== id);
                            setEquipments(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div className="font-poppins card card-compact bg-base-100 w-80 lg:w-96 mx-auto shadow-xl">
            <figure>
                <img className="w-11/12 mx-auto rounded-2xl h-80"
                    src={photo} />
            </figure>
            <div className="card-body w-11/12">
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
                        <Link to={`/updateProduct/${_id}`}><p className="text-2xl font-bold"><CiEdit /></p></Link>
                        <p onClick={() => handleDelete(_id)} className="text-2xl font-bold"><MdDelete /></p>
                        <Link to={`/details/${_id}`}><p className="text-2xl font-bold"><CiSquareMore /></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyEquipCard.propTypes = {
    equipment: PropTypes.object,
    equipments : PropTypes.object ,
    setEquipments : PropTypes.func
}

export default MyEquipCard;