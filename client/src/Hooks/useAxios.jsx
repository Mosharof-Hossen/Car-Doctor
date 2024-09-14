import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const instance = axios.create({
    baseURL: 'https://car-doctor-server-rosy-xi.vercel.app',
    withCredentials: true
})

const useAxios = () => {
    const { logOut } = useContext(AuthContext);
    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res
        }, (err) => {
            if (err.response.status === 403) {
                logOut()
            }
        })
    }, [logOut])
    return instance;
};

export default useAxios;