import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {}
const LabelInput = (props) => {
  return (
    <div class="relative mb-4">
      <label>
        {props.title && (
          <div>
            {props.title}
            {props.required}
          </div>
        )}
        <input
          type={props.type}
          id="full-name"
          name="full-name"
          class="w-full bg-white rounded border border-gray-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </label>
    </div>
  );
};

export default LabelInput;
