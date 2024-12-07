import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiSquareMore } from "react-icons/ci";

const EquipmentsTable = ({ equipment, idx }) => {
    const { photo, name, category, price, rating , _id} = equipment;

    return (
        <tbody className="border-2 border-cyan-800/80">
            <tr>
                <td>
                  <p className="font-bold">{idx + 1}.</p>
                </td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img className="w-[32px]"
                                    src={photo} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-cyan-800">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {category}
                </td>
                <td>{price}$</td>
                <td>
                    <div className="flex justify-center items-center">{rating}
                        <span className=" text-amber-300 text-lg"><IoMdStar /></span>
                    </div>
                </td>
                <th>
                    <Link to={`/details/${_id}`}><p className="text-lg text-cyan-800 font-bold"><CiSquareMore /></p></Link>
                </th>
            </tr>
        </tbody>
    );
};

EquipmentsTable.propTypes = {
    equipment: PropTypes.object,
    idx: PropTypes.number,
}

export default EquipmentsTable;