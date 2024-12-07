import { useLoaderData } from "react-router-dom";
import EquipmentsTable from "../components/EquipmentsTable/EquipmentsTable";

const Equipments = () => {
    const allEquipments = useLoaderData();
    return (
        <div>
            <div className="my-6">
                <h2 className="text-3xl text-cyan-800 font-semibold text-center">List of All Equipments </h2>
            </div>
            <div className="md:w-10/12 overflow-x-auto mx-auto">
                <table className="table border-2">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl:</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        allEquipments.map((equipment, idx) => <EquipmentsTable key={equipment._id} idx={idx} equipment={equipment}></EquipmentsTable>)
                    }
                </table>
            </div>
        </div>
    );

};

export default Equipments;