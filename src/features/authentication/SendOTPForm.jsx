import { useState } from "react";
import TextFieldInput from "../../ui/TextFieldInput";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <TextFieldInput
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber}
          onchange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
