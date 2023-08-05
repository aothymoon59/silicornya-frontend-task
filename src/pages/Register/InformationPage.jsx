import { useState } from "react";
import { useForm } from "react-hook-form";

const InformationPage = () => {
    const [Position, setPosition] = useState('Teacher')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // const { email, institute, name, position, workTime } = data
        console.log(data)

    }
    console.log(Position)

    return (
        <div className="mt-[100px]">
            <div className="flex flex-col max-w-[800px] items-center mx-auto gap-6 text-inter">
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
                            onChange={(e) => setPosition(e.target.value)}
                        >
                            <option value="Teacher">Teacher</option>
                            <option value="Student">Student</option>
                        </select>
                        {errors.position && (
                            <span className="text-red-600 mt-2">{errors.position.message}</span>
                        )}
                    </div>
                    {/* conditional info  */}
                    <>
                        {
                            Position === "Teacher" ?
                                <div>
                                    {/* institute  */}
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="input-label">Institute</span>
                                        </label>
                                        <select
                                            required
                                            {...register("institute", { required: "Pick a institute" })}
                                            name="institute"
                                            className="select select-bordered text-lg font-medium text-[#333]"
                                        >
                                            <option value="Dhaka National Medical College">Dhaka National Medical College</option>
                                            <option value="Ibrahim Medical College">Ibrahim Medical College</option>
                                            <option value="Bangladesh Medical College">Bangladesh Medical College</option>
                                            <option value="Holy Family Red Crescent Medical College">Holy Family Red Crescent Medical College</option>
                                        </select>
                                        {errors.institute && (
                                            <span className="text-red-600 mt-2">{errors.institute.message}</span>
                                        )}
                                    </div>
                                    {/* Work Time  */}
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="input-label">Work Time</span>
                                        </label>
                                        <select
                                            required
                                            {...register("workTime", { required: "Pick a Work time" })}
                                            name="workTime"
                                            className="select select-bordered text-lg font-medium text-[#333]"
                                        >
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                        </select>
                                        {errors.workTime && (
                                            <span className="text-red-600 mt-2">{errors.workTime.message}</span>
                                        )}
                                    </div>
                                </div> :
                                <div>
                                    {/* institute  */}
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="input-label">Institute</span>
                                        </label>
                                        <select
                                            required
                                            {...register("institute", { required: "Pick a institute" })}
                                            name="institute"
                                            className="select select-bordered text-lg font-medium text-[#333]"
                                        >
                                            <option value="Dhaka National Medical College">Dhaka National Medical College</option>
                                            <option value="Ibrahim Medical College">Ibrahim Medical College</option>
                                            <option value="Bangladesh Medical College">Bangladesh Medical College</option>
                                            <option value="Holy Family Red Crescent Medical College">Holy Family Red Crescent Medical College</option>
                                        </select>
                                        {errors.institute && (
                                            <span className="text-red-600 mt-2">{errors.institute.message}</span>
                                        )}
                                    </div>
                                    {/* Education Level  */}
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="input-label">Education Level</span>
                                        </label>
                                        <select
                                            required
                                            {...register("eduLevel", { required: "Pick a Work time" })}
                                            name="eduLevel"
                                            className="select select-bordered text-lg font-medium text-[#333]"
                                        >
                                            <option value="">Select Education Level</option>
                                            <option value="Secondary School Certificate (SSC )">Secondary School Certificate (SSC )</option>
                                            <option value="Higher Secondary School Certificate (HSC)">Higher Secondary School Certificate (HSC)</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Bachelor of Science (BSC)">Bachelor of Science (BSC)</option>
                                            <option value="Master of Arts(MA)">Master of Arts(MA)</option>
                                            <option value="Bachelor of Arts(BA)">Bachelor of Arts(BA)</option>
                                        </select>
                                        {errors.eduLevel && (
                                            <span className="text-red-600 mt-2">{errors.eduLevel.message}</span>
                                        )}
                                    </div>
                                </div>
                        }
                    </>
                </form >
            </div >
        </div >
    );
};

export default InformationPage;

