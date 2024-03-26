import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import OtpInput from "react-otp-input";
import CheckImg from "../assets/check.png";
import toast, { Toaster } from "react-hot-toast";
export default function DialogDesktopVerify() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState(null);
  const handleOpen = () => setOpen(!open);
  const [emailOtp, setEmailOtp] = useState("");
  const [mobOtp, setMobOtp] = useState("");
  const notify = () => toast.error("Here is your toast.");
  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-[#129283] text-white lg:p-4 lg:text-md"
      >
        Join Our List
      </Button>
      <Dialog open={open} handler={handleOpen} size={"md"}>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
        <DialogHeader>
          <h3 className="text-sm lg:text-xl font-semibold">
            Check your mobile and inbox. We’ve sent your OTP!{" "}
          </h3>
        </DialogHeader>
        <DialogBody className="p-4">
          <div className="verify-mobile">
            <div className="verify-heading flex gap-4 items-center pr-1">
              <div className="">
                <p className="text-md font-semibold text-[#0D0D0D]">
                  Verify Mobile - 8892823988
                </p>
              </div>
              <button className="text-md text-[#3C8EEE]">Edit</button>
            </div>
            <OtpInput
              value={mobOtp}
              onChange={setMobOtp}
              numInputs={6}
              inputType="number"
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "40px",
                height: "40px",
                margin: "5px",
                border: "1px solid #ccc",
                borderRadius: "0.3rem",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            />
            <div className="resend flex mt-2">
              <button className="text-xs">Resend OTP</button>
            </div>
          </div>
          <div className="verify-email mt-1">
            <div className="verify-heading flex gap-4 items-center pr-1">
              <div>
                <p className="text-md font-semibold text-[#0D0D0D] ">
                  Verify Email - anurag.kr.singh07@gmail.com
                </p>
              </div>
              <button className="text-md text-[#3C8EEE]">Edit</button>
            </div>
            <OtpInput
              onChange={setEmailOtp}
              value={emailOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "40px",
                height: "40px",
                margin: "5px",
                border: "1px solid #ccc",
                borderRadius: "0.3rem",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            />
            <div className="resend flex  mt-2">
              <button className="text-xs">Resend OTP</button>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            className="bg-[#129283] text-white mx-auto"
            onClick={handleOpen}
          >
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
