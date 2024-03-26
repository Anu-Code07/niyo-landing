import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import MyModal from "./MyModal";

import { useMediaQuery } from "react-responsive";
import DialogDesktopVerify from "./DesktopModal";
const LeadForm = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 678px)" });
  const [isGst, setIsGst] = useState(false);
  function isCharNumber(str: any) {
    const firstChar = str.charAt(0);
    const secondChar = str.charAt(1);
    return !isNaN(firstChar) && !isNaN(secondChar);
  }
  console.log(isCharNumber("A23A"), "----");

  return (
    <>
      <div className="flex justify-center p-8 w-full ">
        <Card
          color="transparent"
          shadow={true}
          className="grid place-items-center shadow-md bg-[#F4F4F4] p-4 w-full lg:p-8 lg:w-[90%]"
        >
          <Typography
            variant="h6"
            color="blue-gray"
            className="text-center lg:text-2xl lg:mb-6 mb-2"
          >
            Submit the Form to Join the League
          </Typography>
          <form className="mb-4 mt-4 w-full " onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-12 md:gap-8 ">
              <div>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name  is required" }}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      label="Name"
                      crossOrigin={undefined}
                      error={Boolean(errors?.name?.message)}
                      className="outline-none w-full"
                      {...field}
                    />
                  )}
                />
                {errors?.name?.message ? (
                  <p className="error-text">
                    {errors?.name?.message?.toString()}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <Controller
                  name="emailId"
                  control={control}
                  rules={{
                    required: "Email ID is required",
                    pattern: {
                      value:
                        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                      message: "Please enter valid Email",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      type="email"
                      label="Email Id"
                      error={Boolean(errors?.emailId?.message)}
                      crossOrigin={undefined}
                      className="outline-none w-full"
                      {...field}
                    />
                  )}
                />
                {errors?.emailId?.message ? (
                  <p className="error-text">
                    {errors?.emailId?.message?.toString()}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <Controller
                  name="mobile"
                  control={control}
                  rules={{
                    required: "Mobile no. is required",
                    pattern: {
                      value: /^[7-9][0-9]{9}$/,
                      message:
                        "Please enter valid mobile number and length should be 10",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      type="text"
                      label="Mobile"
                      crossOrigin={undefined}
                      error={Boolean(errors?.mobile?.message)}
                      className="outline-none w-full"
                      {...field}
                    />
                  )}
                />
                {errors?.mobile?.message ? (
                  <p className="error-text">
                    {errors?.mobile?.message?.toString()}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <Controller
                  name="gstpan"
                  control={control}
                  rules={{
                    required: "GST/PAN no. is required",
                    pattern: {
                      value: isGst
                        ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
                        : /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
                      message: isGst
                        ? "Please enter valid GST"
                        : "Please enter valid pan",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      type="text"
                      label="GST/PAN"
                      crossOrigin={undefined}
                      error={Boolean(errors?.gstpan?.message)}
                      className="outline-none w-full"
                      {...field}
                      onBlur={() => {
                        let val = control._fields.gstpan?._f.value;
                        if (val) {
                          if (isCharNumber(val)) {
                            setIsGst(true);
                          } else {
                            setIsGst(false);
                          }
                        }
                        console.log(control._fields.gstpan?._f.value);
                      }}
                    />
                  )}
                />
                {errors?.gstpan?.message ? (
                  <p className="error-text">
                    {errors?.gstpan?.message?.toString()}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <Controller
                  name="pin"
                  control={control}
                  rules={{
                    required: "Pin Code is required",
                    pattern: {
                      value: /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/,
                      message:
                        "Please enter valid pin code  and length should be 6",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      type="number"
                      label="Pin Code"
                      error={Boolean(errors?.pin?.message)}
                      crossOrigin={undefined}
                      className="outline-none w-full"
                      {...field}
                    />
                  )}
                />
                {errors?.pin?.message ? (
                  <p className="error-text">
                    {errors?.pin?.message?.toString()}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <Controller
                  name="designation"
                  control={control}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      type="text"
                      label="Designation(optional)"
                      crossOrigin={undefined}
                      className="outline-none w-full"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
            <div className="text-center flex justify-center mt-4 lg:mt-12">
              <Button
                type="submit"
                className="bg-[#129283] text-white lg:p-4 lg:text-md"
              >
                Join Our List
              </Button>
            </div>
          </form>

          <p className="text-[10px] text-center mt-2 lg:mt-6 lg:text-[16px]">
            By clicking join now, you agree to the terms and conditions
          </p>
        </Card>
      </div>
    </>
  );
};

export default LeadForm;
