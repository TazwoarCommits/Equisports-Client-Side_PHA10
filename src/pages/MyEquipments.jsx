import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import HomeCard from "../components/HomeCard/HomeCard";

const MyEquipments = () => {
    const {user} = useContext(AuthContext)
    const allequipments = useLoaderData();
    const myAddedEquipments = allequipments.filter(equipment => equipment.author?.userMail === user.email) ; 

    return (
        <div>
            <h2 className="text-3xl text-cyan-800 font-semibold text-center">My Added Equipment</h2>
            
            {
                myAddedEquipments.length == 0 ? "You Haven't added Anything Yet "
                 : 
               <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2">
                   {
                    myAddedEquipments.map( equipment => <HomeCard key={equipment._id} equipment={equipment}></HomeCard>)
                   }
               </div>  
            }
    
        </div>
    );
};

export default MyEquipments;