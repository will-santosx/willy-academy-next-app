import {
  ChangeEventHandler,
  HTMLInputAutoCompleteAttribute,
  useState,
} from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

interface inputProps {
  name: string;
  label: string;
  placeholder: string | undefined;
  type: "text" | "number" | "email" | "password";
  minLength?: number | 0;
  maxLength?: number | 0;
  value: string;
  required?: boolean | false;
  autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
  autoFocus?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function FormInput(props: inputProps) {
  const [visible_password, set_visible_password] = useState(false);
  const checkHandler = () => {
    set_visible_password(!visible_password);
  };

  return (
    <div className="flex flex-col">
      <label
        className="w-full text-left text-[14px] text-neutral-bright-gray"
        htmlFor={props.name}
      >
        {props.label + (props.required ? " *" : null)}
      </label>
      <div
        title={props.label}
        className="xl:h-[55px] | md:h-[50px] | bg-neutral-rich-black flex items-center justify-end border-2 rounded-normal border-transparent empty:border-transparent focus-within:border-primary-duch-white group-invalid:border-input-error"
      >
        <input
          className="flex-1 outline-none bg-transparent relative p-2 rounded-normal text-neutral-bright-gray placeholder:text-neutral-bright-gray text-[14px]"
          type={
            props.type === "password" && visible_password ? "text" : props.type
          }
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          autoComplete={props.autoComplete}
          required={props.required}
          minLength={props.minLength}
          maxLength={props.maxLength}
          autoFocus={props.autoFocus}
        />
        {props.type == "password" ? (
          <button
            type="button"
            className="mr-2 ml-1 text-neutral-bright-gray hover:text-white transition-colors"
            name="show-password"
            title={"Mostar/Ocultar"}
            onClick={checkHandler}
          >
            {" "}
            {visible_password ? (
              <MdOutlineVisibility className="md:text-[20px]" />
            ) : (
              <MdOutlineVisibilityOff className="md:text-[20px]" />
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
