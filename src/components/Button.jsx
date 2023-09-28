import React from "react";
import './Button.css'

const Button = (props) => {
  let prop = props.props;
  let design = "font-base flex justify-center items-center"
  let change = "absolute bottom-1 left-[-4px]"
  return (
    <div className="relative cursor-pointer ">
      <div className={`${prop.button_color} ${prop.txt_col} ${prop.text_size} ${design} ${prop.button_width} ${prop.button_height} ${props.width} custom-scale`}>
        {prop.title}
      </div>
      <div className={`${prop.button_width} ${prop.button_height} absolute top-1 left-1 border-2 ${prop.border_color} custom-scale-bg`}></div>
    </div>
  );
};

export default Button;
