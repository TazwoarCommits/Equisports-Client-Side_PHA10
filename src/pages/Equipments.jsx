import { useLoaderData } from "react-router-dom";
import EquipmentsTable from "../components/EquipmentsTable/EquipmentsTable";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Equipments = () => {
    const { loading } = useContext(AuthContext);
    const allEquipments = useLoaderData();

    if (loading) {
        return (
                <div className="flex justify-center items-center my-16">
                    <span className="loading loading-bars loading-lg"></span>
                    <span className="loading loading-bars loading-lg"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>           
        )
    }
    return (
        <div>
            <div className="my-6">
                <h2 className="text-3xl text-cyan-800 font-semibold text-center">List of All Equipments </h2>
            </div>
            <div className="md:w-10/12 overflow-x-auto mx-auto">
                <table className="table border-2 border-cyan-800/80">
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