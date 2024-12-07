import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
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
            {user ? children : <Navigate to="/register"></Navigate>}
        </div>
    );
};

Private.propTypes = {
    children: PropTypes.func
}
export default Private;