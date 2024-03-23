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
import OtpInput from "react-otp-input";
const LeadForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data: any) => console.log(data);
  const [open, setOpen] = useState(false);
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
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      type="text"
                      label="Mobile"
                      crossOrigin={undefined}
                      className="outline-none w-full"
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="gpan"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      label="GST/PAN"
                      crossOrigin={undefined}
                      className="outline-none w-full"
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="pin"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      size="lg"
                      type="number"
                      label="Pin Code"
                      crossOrigin={undefined}
                      className="outline-none w-full"
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="designation"
                  control={control}
                  rules={{ required: true }}
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