import * as React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
  children: React.ReactNode;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  classes,
  children,
  ...props
}) => {
  const classNames =
    "text-brand-600 text-sm font-bold w-full flex items-center justify-center gap-2 bg-brand-300 rounded-[10px] backdrop-blur-[30px] h-12 px-4 py-3" +
    classes;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
