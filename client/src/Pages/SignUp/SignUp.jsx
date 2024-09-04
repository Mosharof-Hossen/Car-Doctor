import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import loginImage from "../../assets/images/login/login.svg"
import { AuthContext } from '../../Providers/AuthProvider';


const SignUp = () => {
    const { createUserByEmailPassword } = useContext(AuthContext);
    const [errMsg, setErrMsg] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUserByEmailPassword(data.email,data.password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err);
        })
    };
    console.log(errors);

    const handleGoogleLogin = () => {
    }
    const handleGithubLogin = () => {
    }

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:w-1/2 w-1/2">

                    <img src={loginImage} alt="" />

                </div>
                <div className="  md:w-1/2 w-full max-w-sm shrink-0 border">
                    <div className='p-10'>
                        <h1 className="text-3xl font-bold text-center pb-5">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <div className="flex-1">
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Name</p>
                                        <input className="px-2 py-2 w-full rounded border dark:text-black" type="text" placeholder="Enter Your Name"  {...register("name", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.name?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Name is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Email</p>
                                        <input className="px-2 py-2 w-full rounded border dark:text-black" type="email" placeholder="Enter Your Email"  {...register("email", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.email?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Email is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Password</p>
                                        <input className="px-2 py-2 w-full border rounded dark:text-black" type="password" placeholder="Enter password"  {...register("password", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.password?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Password is Required.</p>
                                            )
                                        }
                                    </label>
                                </div>
                            </div>
                            <input className="  bg-primary-c text-white cursor-pointer  text-2xl bg-primary-b-c w-full p-2 mt-8 rounded" type="submit" value={"Sign up"} />
                            <p className='text-red-500 text-center mt-4'>{errMsg && errMsg}</p>
                        </form>

                        <div>
                            <p className='font-bold text-center my-6'>Have An Account? <Link to={'/login'} className='text-red-500'>Sign In</Link></p>
                            <div className="divider divider-error my-8">Or</div>
                            <div className='flex space-x-5 justify-center'>
                                <button onClick={handleGoogleLogin} className='px-3 py-2 border border-primary-c rounded text-primary-c flex items-center space-x-1'><span>Google</span><FaGoogle></FaGoogle></button>
                                <button onClick={handleGithubLogin} className='px-3 py-2 border border-primary-c rounded text-primary-c flex items-center space-x-1'><span>Github</span><FaGithub></FaGithub></button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;