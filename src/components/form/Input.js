import React, { useEffect, useReducer } from "react";
import validator from "../../validators/validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};

export default function Input(props) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value , isValid } = mainInput;
  const {id ,onInputHandler} = props

  useEffect(() => {
    onInputHandler(id , value ,isValid);
  }, [value]);

  const onChangeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validations: props.validations,
      isValid: true,
    });
  };
  const inputElement = (
    <input
      type={props.type}
      value={mainInput.value}
      placeholder={props.placeholder}
      className={mainInput.isValid ? "success" : "error"}
      onChange={onChangeHandler}
    ></input>
  );

  return <div>{inputElement}</div>;
}
