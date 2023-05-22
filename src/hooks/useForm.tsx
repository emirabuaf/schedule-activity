import { useState } from "react";
import { Activity } from "../types";

export interface FormProps {
  addActivity: (activity: Activity) => void;
  activities: Activity[];
}

export const useForm = ({ addActivity, activities }: FormProps) => {
  const [formData, setFormData] = useState<Activity>({
    type: "",
    date: "",
    time: "",
    performer: "",
    pitch: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isPitchOccupied = activities.some(
      (activity) => activity.pitch === formData.pitch
    );

    if (isPitchOccupied) {
      setErrorMessage("Pitch is already occupied. Please choose a different pitch.");
    } else {
      addActivity(formData);
      setFormData({
        type: "",
        date: "",
        time: "",
        performer: "",
        pitch: "",
      });
      setErrorMessage("");
    }
  };

  return {
    formData,
    errorMessage,
    handleInputChange,
    handleFormSubmit,
  };
};