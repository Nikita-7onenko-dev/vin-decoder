import { formDataValidator } from "@/shared/lib/formDataValidator";
import { useEffect, useState, type SetStateAction } from "react";
import { finalFormValidation } from "@/shared/lib/finalFormValidator";

type FormDataType = {
  vin: string;
}

const placeholders = {
  vin: "Enter VIN code"
}

const initFormDataFields = {
  vin: ""
}

type Props = {
  setValidVin: React.Dispatch<SetStateAction<string>>;
  addVinToHistory: (vin: string) => void;
  externalVin: string;
}

export default function VinForm({setValidVin, addVinToHistory, externalVin}: Props): React.JSX.Element {

  const [formData, setFormData] = useState<FormDataType>(initFormDataFields);
  const [errors, setErrors] = useState<FormDataType>(initFormDataFields);

  useEffect(() => {
    setFormData(fd => ({
      ...fd,
      vin: externalVin
    }));
  }, [externalVin])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name: field, value: _value} = e.target;
      const upperCaseVal = _value.toUpperCase();

      setFormData(prev => ({
        ...prev,
        [field as keyof FormDataType]: upperCaseVal
      }));

      setErrors(prev => ({
        ...prev,
        [field as keyof FormDataType]: formDataValidator[field as keyof FormDataType](upperCaseVal)
      }));
  }

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {hasErrors, newErrorData} = finalFormValidation(formData, errors);
    
    if(hasErrors) {
      setErrors(newErrorData);
      return;
    }
    setValidVin(formData.vin);
    addVinToHistory(formData.vin);
  }

  const formInputs = Object.keys(formData).map(field => (
    <label htmlFor={field} key={field} className="vin-form__label">
      {errors[field as keyof FormDataType] && (
        <span className="vin-form__error-message">{errors[field as keyof FormDataType]}</span>
      )}
      <input 
        type="text" 
        className={errors[field as keyof FormDataType] ? "vin-form__input vin-form__input--error" : "vin-form__input"}
        name={field}
        id={field}
        value={formData[field as keyof FormDataType]}
        placeholder={placeholders?.[field as keyof FormDataType]}
        onChange={changeHandler}
      />
    </label>
  ))

  return (
    <form
      className="vin-form"
      onSubmit={submitHandler}
    >
      {formInputs}
      <button 
        className="main-button"
        type="submit"
      >
        Decode
      </button>
    </form>
  )

}