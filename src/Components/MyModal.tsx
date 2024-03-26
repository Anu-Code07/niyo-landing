import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import OtpInput from "react-otp-input";
import CheckImg from "../assets/check.png";
export default function DialogVerify() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState(null);
  const handleOpen = () => setOpen(!open);
  const [emailOtp, setEmailOtp] = useState<any>("");
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

      <Dialog open={open} handler={handleOpen} size={"sm"}>
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
        <DialogBody>
          <div className="verify-mobile">
            <div className="verify-heading flex gap-1 ">
              <div className="flex gap-1 items-center">
                <p className="text-xs font-semibold">
                  Verify Mobile - 8892823988
                </p>
              </div>
              <button className="text-[12px] text-[#3C8EEE]">Edit</button>
            </div>
            <OtpInput
              value={mobOtp}
              onChange={setMobOtp}
              numInputs={6}
              inputType="number"
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "30px",
                height: "40px",
                margin: "5px",
                border: "1px solid #ccc",
                borderRadius: "0.3rem",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            />
            <div className="resend flex justify-end mt-2">
              <button className="text-xs">Resend OTP</button>
            </div>
          </div>
          <div className="verify-email mt-1">
            <div className="verify-heading flex gap-1 items-center">
              <div>
                <p className="text-xs font-semibold">
                  Verify Email - anurag.kr.singh07@gmail.com
                </p>
              </div>
              <button className="text-[12px] text-[#3C8EEE]">Edit</button>
            </div>
            <OtpInput
              onChange={setEmailOtp}
              value={emailOtp}
              numInputs={6}
              inputType="number"
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "30px",
                height: "40px",
                margin: "5px",
                border: "1px solid #ccc",
                borderRadius: "0.3rem",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            />
            <div className="resend flex justify-end mt-2">
              <button className="text-xs">Resend OTP</button>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="bg-[#129283] text-white mx-auto" onClick={notify}>
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
