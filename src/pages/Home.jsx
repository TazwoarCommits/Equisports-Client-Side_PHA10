import { useLoaderData } from "react-router-dom";
import HomeCard from "../components/HomeCard/HomeCard";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {
    const { loading } = useContext(AuthContext)
    const equipments = useLoaderData();

    if (loading) {
        return (

            <div className="flex justify-center items-center my-16">
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );

    }
    return (
        <div>
            <h1> This is Home</h1>
            <div>
                <div>
                    <h3 className="text-3xl font-semibold text-cyan-800">Buy Now </h3>
                </div>
                <div className="grid md:grid-cols-2 justify-items-center  gap-4 w-11/12 mx-auto">
                    {
                        equipments.map(equipment => <HomeCard key={equipment._id} equipment={equipment}></HomeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;