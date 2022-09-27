import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const SignUpFormHook = () => {
  //react-hook-form
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (values) => console.log(values);

  // Yup with react-hook-form
  const validateSchema = Yup.object({
    firstName: Yup.string()
      .required("Please enter a your first name")
      .max(20, "Must be than 20 character or less 20 character"),
    lastName: Yup.string()
      .required("Please enter a your last name")
      .max(20, "Must be than 20 character or less 20 character"),
    email: Yup.string().required("Not be empty email"),
  });
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid,
      isDirty,
      dirtyFields,
      isSubmitSuccessful,
    },
  } = useForm({
    resolver: yupResolver(validateSchema),
    mode: "onChange",
  });
  console.log(isValid);
  console.log(isDirty);
  console.log(dirtyFields);
  console.log(isSubmitSuccessful);
  const onSubmit = (values, e) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values));
        e.target.reset();
        resolve();
      }, 2000);
    });
  };

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
          {errors?.firstName?.message && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
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

          {errors?.lastName?.message && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
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
          {errors?.email?.message && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <button
          className="p-4 bg-blue-500 font-normal w-full rounded-lg text-white"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-7 h-7 border-4 border-gray-200 rounded-full border-t-transparent animate-spin text-center mx-auto"></div>
          ) : (
            " Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUpFormHook;
