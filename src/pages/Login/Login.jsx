import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="mt-[100px]">
            <div className="flex flex-col max-w-[800px] items-center mx-auto px-5 gap-20 text-inter">
                <h2 className="text-[#333] text-center text-5xl font-semibold leading-[50px]">
                    Welcome To Task Job
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="form-control mb-4 ">
                        <label className="label">
                            <span className="input-label">Email Address*</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            name="email"
                            placeholder="Enter Email Address"
                            className="input-field"
                        />
                        {errors.email && (
                            <span className="text-red-600 mt-2">Email is required</span>
                        )}
                    </div>
                    <div className="form-control mb-6 relative">
                        <label className="label">
                            <span className="input-label">Password*</span>
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            {...register("password", {
                                required: true,
                            })}
                            name="password"
                            placeholder="Enter Password"
                            className="input-field"
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600 mt-2">Password is required</p>
                        )}
                        <p
                            className="absolute text-2xl top-[65px] right-[15px]"
                            onClick={() => setShowPass(!showPass)}
                        >
                            <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="common-btn w-full"
                    >

                        Login

                    </button>
                    <p className="text-center mt-12 font-medium text-2xl">
                        <small>
                            Don&apos;t Have An Account?{" "}
                            <Link to="/register" className="text-[#6078EA] link">
                                Register Now
                            </Link>
                        </small>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;


