import { FormProps, useForm } from "../hooks/useForm";


const Form = ({ addActivity, activities }: FormProps) => {
  const { formData, errorMessage, handleInputChange, handleFormSubmit } = useForm({
    addActivity,
    activities,
  });

  return (
    <div>
      <form className="flex flex-col justify-between my-10" onSubmit={handleFormSubmit}>
        <select
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          required
          className="h-[1.625rem] xs: mb-5"
        >
          <option value="">Choose activity type</option>
          <option value="Mowing">Mowing</option>
          <option value="Fertilisation">Fertilisation</option>
          <option value="Irrigation">Irrigation</option>
          <option value="Aeration">Aeration</option>
        </select>
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleInputChange}
          required
          className="xs: mb-5"
        />
        <input
          type="time"
          name="time"
          placeholder="Time"
          value={formData.time}
          onChange={handleInputChange}
          required
          className="xs: mb-5"
        />
        <select
          name="performer"
          value={formData.performer}
          onChange={handleInputChange}
          required
          className="h-[1.625rem] xs: mb-5"
        >
          <option value="">Choose activity type</option>
          <option value="John">John</option>
          <option value="Tom">Tom</option>
          <option value="Tony">Tony</option>
        </select>
        <select
          name="pitch"
          value={formData.pitch}
          onChange={handleInputChange}
          required
          className="h-[1.625rem] xs: mb-5"
        >
          <option value="">Choose activity type</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold h-[1.625rem] px-4 rounded' type="submit">Add</button>
      </form>

      {errorMessage && <h1 className="text-red-600 text-center mb-10">{errorMessage}</h1>}
    </div>
  );
};

export default Form;