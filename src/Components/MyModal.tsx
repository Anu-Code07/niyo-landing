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
export default function DialogVerify() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState(null);
  const handleOpen = () => setOpen(!open);
  const [emailOtp, setEmailOtp] = useState<any>("");
  const [mobOtp, setMobOtp] = useState("");

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen} size={"sm"}>
        <DialogHeader>
          <h3 className="text-sm lg:text-xl font-semibold">
            Check your mobile and inbox. We’ve sent your OTP!{" "}
          </h3>
        </DialogHeader>
        <DialogBody>
          <div className="verify-mobile">
            <div className="verify-heading flex justify-between items-center p-[5px]">
              <div className="flex gap-1 items-center">
                <p className="text-xs font-semibold">
                  Verify Mobile - 8892823988
                </p>
                <button className="text-[12px] text-[#3C8EEE]">Edit</button>
              </div>
              {mobOtp?.length == 6 && (
                <img src={CheckImg} width={"20px"} height={"20px"} />
              )}
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
            <div className="verify-heading flex justify-between items-center pr-1">
              <div>
                <p className="text-xs font-semibold ">
                  Verify Email - anurag.kr.singh07@gmail.com
                </p>
                <button className="text-[12px] text-[#3C8EEE]">Edit</button>
              </div>

              {emailOtp?.length == 6 && (
                <img src={CheckImg} width={"20px"} height={"20px"} />
              )}
            </div>
            <OtpInput
              onChange={setEmailOtp}
              value={emailOtp}
              numInputs={6}
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
