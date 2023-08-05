import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
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
            <div className="flex flex-col max-w-[800px] items-center mx-auto px-5 gap-20 text-inter">
                <h2 className="text-[#333] text-center text-[32px] font-semibold leading-[50px]">
                    Personal Information
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="form-control mb-4 ">
                        <label className="label">
                            <span className="input-label">Full Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            name="name"
                            placeholder="Enter Your Name"
                            className="input-field"
                        />
                        {errors.name && (
                            <span className="text-red-600 mt-2">Name is required</span>
                        )}
                    </div>
                    <div className="form-control mb-4 ">
                        <label className="label">
                            <span className="input-label">Email Address</span>
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
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="input-label">Position</span>
                        </label>
                        <select
                            required
                            {...register("position", { required: "Pick a Position" })}
                            name="position"
                            className="select select-bordered text-lg font-medium text-[#333]"
                        >
                            <option value="Teacher">Teacher</option>
                            <option value="Student">Student</option>
                        </select>
                        {errors.position && (
                            <span className="text-red-600 mt-2">{errors.position.message}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="common-btn w-full"
                    >

                        Next

                    </button>
                    <p className="text-center mt-12 font-medium text-2xl">
                        <small>
                            Already Have An Account?{" "}
                            <Link to="/" className="text-[#6078EA] link">
                                Log In
                            </Link>
                        </small>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;

