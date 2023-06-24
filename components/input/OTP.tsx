import OtpInput from "react-otp-input";

interface OTPProps {
  value: string;
  onChange: (value: string) => void;
  hasError: boolean;
}

const OTP: React.FC<OTPProps> = ({ value, onChange, hasError }) => {
  return (
    <div
      className={`w-full flex justify-center py-4 ${hasError ? "error" : ""}`}
    >
      <OtpInput
        value={value}
        shouldAutoFocus={true}
        onChange={onChange}
        numInputs={4}
        containerStyle="w-[60%]"
        inputStyle={{
          color: hasError ? "#c1121f " : "#000",
          border: hasError ? "2px solid #c1121f " : "2px solid #D1D5DB",
          borderRadius: "0.375rem",
          width: "60%",
          height: "3rem",
        }}
        renderInput={(props) => <input {...props} />}
        renderSeparator={
          <span className={`${hasError ? "text-red-600" : "text-black"}`}>
            ∘
          </span>
        }
      />
    </div>
  );
};

export default OTP;
