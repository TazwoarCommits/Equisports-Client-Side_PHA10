import PropTypes from "prop-types";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiSquareMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const HomeCard = ({ equipment }) => {

    const { photo, name, price, rating, availability, _id } = equipment;

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

                fetch(`http://localhost:5000/equipments/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div className="w-10/12 hover:w-full gap-4 space-y-2 mx-auto h-64 card lg:card-side bg-base-100 hover:shadow-xl border-2">
            <figure className="w-1/2">
                <img className="w-full h-full"
                    src={photo} />
            </figure>
            <div className="w-1/2 flex flex-col justify-around">
                <h2 className="card-title">{name}</h2>
                <div className="divider"></div>
                <div>
                    <p className="text-gray-500 text-sm">Price : {price}$</p>
                    <p className="text-gray-500 text-sm">Rating : {rating}</p>
                    <p className="text-gray-500 text-sm">Availability : {availability == "Available" ? "In Stock" : "Out of stock"}</p>
                </div>
                <div className="flex gap-2 mb-4">
                    <Link to={`/updateProduct/${_id}`}><p><CiEdit /></p></Link>
                    <p onClick={() => handleDelete(_id)}><MdDelete /></p>
                    <Link to={`/details/${_id}`}><p><CiSquareMore /></p></Link>
                </div>
            </div>
        </div>
    );
};
HomeCard.propTypes = {
    equipment: PropTypes.object
}

export default HomeCard;