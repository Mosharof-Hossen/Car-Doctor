import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

const useAxios = () => {
    const { logOut } = useContext(AuthContext);
    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res
        }, (err) => {
            console.log("Error tracked in the interceptor ", err.response);
            if (err.response.status === 403) {
                logOut()
            }
        })
    }, [logOut])
    return instance;
};

export default useAxios;