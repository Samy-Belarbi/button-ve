import { FunctionComponent, Ref } from "react";
import { btn } from "./button.css";
import classNames from "classnames";

export type ButtonTypeEnum = "raised" | "outlined" | "flat";
export type ButtonColorEnum = "primary" | "accent" | "danger" | "neutral";
export type ButtonIconOnlyEnum = "regular" | "slim";

type ButtonProps = {
  type?: ButtonTypeEnum;
  color?: ButtonColorEnum;
  iconOnly?: ButtonIconOnlyEnum;
  onClick?: () => void;
  isDisabled?: boolean;
  isActive?: boolean;
  btnRef?: Ref<HTMLButtonElement>;
  children?: any;
};

export const Button: FunctionComponent<ButtonProps> = ({ type, color, onClick, isDisabled = false, isActive = false, iconOnly, btnRef = null, children }) => {
  const handleClick = () => {
    if (isDisabled) return;
    onClick && onClick();
  };

  return (
    <button
      className={classNames([
        btn({
          color,
          type,
          iconOnly,
        }),
        { active: isActive },
      ])}
      onClick={handleClick}
      ref={btnRef}
    >
      {children}
    </button>
  );
};
