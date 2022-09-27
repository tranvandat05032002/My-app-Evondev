import React from "react";
import { useForm } from "react-hook-form";

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  console.log(register());
  console.log(errors);
  return (
    <div>
      <h1 className="text-center my-7 font-bold text-3xl">Register Form</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[500px] mx-auto p-10"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="border border-gray-400 p-4 rounded-md"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors?.firstName?.type === "required" && (
            <p className="text-sm text-red-500">Please enter your firstName</p>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <p className="text-sm text-red-500">
              Must be than 20 character or less
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="border border-gray-400 p-4 rounded-md"
            {...register("lastName", { required: true, maxLength: 20 })}
          />

          {errors?.lastName?.type === "required" && (
            <p className="text-sm text-red-500">Please enter your lastName</p>
          )}
          {errors?.lastName?.type === "maxLength" && (
            <p className="text-sm text-red-500">
              Must be than 20 character or less
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter email address"
            className="border border-gray-400 p-4 rounded-md"
            {...register("email", { required: true })}
          />
          {errors?.email?.type && (
            <p className="text-sm text-red-500">Please enter your email</p>
          )}
        </div>
        <button
          className="p-4 bg-blue-500 font-normal w-full rounded-lg text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpFormHook;
