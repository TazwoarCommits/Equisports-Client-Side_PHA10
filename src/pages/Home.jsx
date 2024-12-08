import { Link, useLoaderData } from "react-router-dom";
import HomeCard from "../components/HomeCard/HomeCard";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Banner from "../components/Banner/Banner";


const Home = () => {
    const { loading } = useContext(AuthContext)
    const equipments = useLoaderData();
    const homEquipments = equipments.slice(0, 9) ;
    console.log(import.meta.env.VITE_A)

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
            <Banner></Banner>
            <div className="mt-12 md:mt24 text-center space-y-4 ">
                <h2 className="text-3xl md:text-4xl text-cyan-800 font-bold">Equisports</h2>
                <p className="text-cyan-800/80">A reliable partner for your best Sports Equipments that you are looking for . Try it now !!!</p>
            </div>
            <section>
                <div className="w-10/12 mx-auto my-12">
                    <h3 className="text-3xl font-semibold text-cyan-800"> Our Products </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center space-y-4 gap-4 w-11/12 md:w-10/12 mx-auto">
                    {
                        homEquipments.map(equipment => <HomeCard key={equipment._id} equipment={equipment}></HomeCard>)
                    }
                </div>
                <div className="w-10/12 mx-auto mt-8">
                    <Link to="/equipments"><button className="btn bg-cyan-800 hover:bg-cyan-900 text-base-100">Show All</button></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;