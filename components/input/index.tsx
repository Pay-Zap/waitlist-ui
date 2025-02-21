import EmailIcon from "../svg/emailIcon";
import { IInputProps } from "./types";

const Input: React.FunctionComponent<IInputProps> = ({
  name,
  placeholder,
  type,
  ariaLabel,
}) => {
  return (
    <div className="flex w-full items-center gap-2 rounded-xl border border-grey-500 bg-white py-3 pl-4 pr-4">
      <EmailIcon />
      <input
        name={name}
        className="h-[22px] w-full text-sm font-normal placeholder-grey-500 focus:outline-none"
        placeholder={placeholder}
        type={type}
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default Input;
