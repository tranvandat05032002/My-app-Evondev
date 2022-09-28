import React from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";

const SignUpFormHookController = () => {
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
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    Controller,
    control,
    useController,
  } = useForm({
    resolver: yupResolver(validateSchema),
    mode: "onChange",
  });
  // method watch
  const watchShowAge = watch("showAge", false);
  // setFocus
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  //set values
  const handleSetValue = () => {
    setValue("firstName", "Tran");
    setValue("lastName", "VanDat");
    setValue("email", "tranvandat@gamil.com");
    setValue("age", 20);
  };
  const onSubmit = (values) => {
    if (isValid) {
      console.log("send data to backend");
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }

    alert(JSON.stringify(values));
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
          {/* <input
            type="text"
            placeholder="Enter last name"
            className="border border-gray-400 p-4 rounded-md"
            {...register("lastName", { required: true, maxLength: 20 })}
          /> */}

          <MyInput
            placeholder="Enter you lastName"
            control={control}
            name="lastName"
            id="lastName"
            className="border border-gray-400 p-4 rounded-md"
          ></MyInput>

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

        <div className="gap-2 mb-5 flex flex-col items-start">
          <input type="checkbox" {...register("showAge")} />

          {watchShowAge && (
            <input
              type="number"
              placeholder="Age"
              className="border border-gray-300 px-2 py-1"
              {...register("age", { min: 50 })}
            />
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

        <button
          className="p-4 bg-orange-500 font-normal w-full rounded-lg text-white my-3"
          onClick={() => {
            resetField("firstName");
            resetField("lastName");
            resetField("email");
          }}
        >
          reset all values
        </button>

        <button
          className="bg-green-400 text-white px-3 py-2 rounded-lg"
          onClick={handleSetValue}
        >
          setValue
        </button>
      </form>
    </div>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       control={control}
//       name={props.name}
//       defaultValue=""
//       render={({ field }) => {
//         return <input {...field} {...props} />;
//       }}
//     />
//   );
// };

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  console.log(field);
  return (
    <input
      type="text"
      className="border border-gray-400 p-4 rounded-md"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHookController;
