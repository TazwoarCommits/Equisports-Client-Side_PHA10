import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";

const EquipmentsTable = ({ equipment, idx }) => {
    const { photo, name, category, price, rating } = equipment;

    return (
        <tbody className="border-2">
            <tr>
                <td>
                    {idx + 1}
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
                            <div className="font-bold">{name}</div>
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
                    <button className="btn btn-ghost btn-xs">details</button>
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