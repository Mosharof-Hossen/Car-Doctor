import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div className='text-center mt-32'><span className='loading loading-bars loading-lg'></span></div>
    }

    if (user) {
        return children
    }

    return (<Navigate to="/login" state={location.pathname}></Navigate>);
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;
