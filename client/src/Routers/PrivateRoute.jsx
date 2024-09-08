import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='text-center mt-32'><span className='loading loading-bars loading-lg'></span></div>
    }

    if (user) {
        return children
    }

    return (<Navigate to="/login"></Navigate>);
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;
