
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='text-center mt-32'><span className='loading loading-bars loading-lg'></span></div>
    }

    if (user && user.email === "admin@admin.com") {
        return children;
    }
    return <Navigate to={"/"}></Navigate>
};

AdminRoute.propTypes = {
    children: PropTypes.node,
};

export default AdminRoute;