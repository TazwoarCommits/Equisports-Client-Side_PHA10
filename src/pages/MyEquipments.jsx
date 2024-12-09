import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import MyEquipCard from "../components/MyEquipCard/MyEquipCard";

const MyEquipments = () => {
    const {user} = useContext(AuthContext)
    const allEquipments = useLoaderData();

    const myPreAddedEquipments = allEquipments.filter(equipment => equipment.author?.userMail === user.email) ; 
    const [myAddedEquipments , setMyAddedEquipments] = useState(myPreAddedEquipments)

    return (
        <div>
            <h2 className="text-3xl md:text-4xl text-cyan-800 font-semibold text-center">My Added Equipment</h2>
            
            {
                myAddedEquipments.length == 0 ? <div>
                    <h2 className="mt-16 mb-[400px] text-2xl md:text-3xl text-cyan-800/80 font-semibold text-center">You haven&apos;t added anything yet</h2>
                </div>
                 : 
               <div className="md:w-9/12 mx-auto mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 space-y-6">
                   {
                    myAddedEquipments.map( equipment => <MyEquipCard key={equipment._id}
                         equipment={equipment}
                         equipments={myAddedEquipments}
                         setEquipments={setMyAddedEquipments}
                         ></MyEquipCard>)
                   }
               </div>  
            }
    
        </div>
    );
};

export default MyEquipments;