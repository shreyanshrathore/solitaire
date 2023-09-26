import React from "react";

const Button = (props) => {
  let prop = props.props;
  return (
    <div className="relative cursor-pointer">
      <button className={`${prop.button_color} ${prop.txt_col} ${prop.text_size} font-base ${prop.button_width} ${prop.button_height}`}>
        {prop.title}
      </button>
      <div className={`${prop.button_width} ${prop.button_height} border-2 ${prop.border_color} absolute top-1 left-1`}></div>
    </div>
  );
};

export default Button;
