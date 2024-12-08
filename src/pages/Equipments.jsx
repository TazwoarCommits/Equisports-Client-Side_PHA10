import { useLoaderData } from "react-router-dom";
import EquipmentsTable from "../components/EquipmentsTable/EquipmentsTable";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Equipments = () => {
    const { loading } = useContext(AuthContext);
    const allLoadedEquipments = useLoaderData();
    const [allEquipments, setAllEquipments] = useState(allLoadedEquipments)

    const handleSortL2h = () => {
        const sortedByPrice = [...allEquipments].sort((e1, e2) => e1.price - e2.price);
        setAllEquipments(sortedByPrice);
    }
    const handleSortH2l = () => {
        const sortedByPrice = [...allEquipments].sort((e1, e2) => e2.price - e1.price);
        setAllEquipments(sortedByPrice);
    }

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
                <div className="dropdown mb-12 ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-cyan-800 hover:bg-cyan-900 text-base-100">Sort by Price</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={handleSortL2h}><button className="btn bg-cyan-800/80 hover:bg-cyan-900/80 text-base-100">low to high</button></li>
                        <li onClick={handleSortH2l}><button className="btn bg-cyan-800/80 hover:bg-cyan-900/80 text-base-100">high to Low</button></li>
                    </ul>
                </div>
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