import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, onChange, placeholder, ...otherProps }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input 
        type="text" 
        onChange={onChange} 
        placeholder={placeholder} 
        {...otherProps} 
      />
    </div>
  );
}

export default InputControl;
