import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SecurityPage = () => {
    const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="mt-[100px]">
            <div className="flex flex-col max-w-[800px] items-center mx-auto gap-6 text-inter">
                <h2 className="text-[#333] text-center text-[32px] font-semibold leading-[50px]">
                    Security
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="form-control mb-6 relative">
                        <label className="label">
                            <span className="input-label">Password</span>
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                            })}
                            name="password"
                            placeholder="password"
                            className="input-field"
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600 mt-2">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600 mt-2">
                                Password must be 6 character
                            </p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-600 mt-2">
                                Password must be less than 20 character
                            </p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600 mt-2">
                                Password must be contain one uppercase and one special
                                character
                            </p>
                        )}
                        <p
                            className="absolute top-[65px] right-[15px]"
                            onClick={() => setShowPass(!showPass)}
                        >
                            <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
                        </p>
                    </div>
                    <div className="form-control mb-6 relative">
                        <label className="label">
                            <span className="input-label">Confirm Password</span>
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            {...register("confirm", { required: true })}
                            name="confirm"
                            placeholder="confirm password"
                            className="input-field"
                        />
                        {errors.confirm && (
                            <span className="text-red-600">
                                You need to re-type password
                            </span>
                        )}
                        <p
                            className="absolute top-[65px] right-[15px]"
                            onClick={() => setShowPass(!showPass)}
                        >
                            <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SecurityPage;

