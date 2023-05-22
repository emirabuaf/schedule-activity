import { useState } from "react";
import { Activity } from "../types";


interface ActivityProps {
  activity: Activity;
  index: number;
  onEdit: (index: number, updatedActivity: Activity) => void;
  onDelete: () => void;
}

const SingleActivity: React.FC<ActivityProps> = ({ activity, onEdit, onDelete, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedActivity, setEditedActivity] = useState(activity);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = () => {
    onEdit(index, editedActivity);
    toggleEdit();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedActivity((prevActivity) => ({
      ...prevActivity,
      [name]: value,
    }));
  };


  return (
    <tbody>
      {isEditing ? (
        <tr>
          <td>
            <select
              name="type"
              value={editedActivity.type}
              onChange={handleInputChange}
              className="h-[1.625rem]"
            >
              <option value="">Choose activity type</option>
              <option value="Mowing">Mowing</option>
              <option value="Fertilisation">Fertilisation</option>
              <option value="Irrigation">Irrigation</option>
              <option value="Aeration">Aeration</option>
            </select>
          </td>
          <td>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={editedActivity.date}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="time"
              name="time"
              placeholder="Time"
              value={editedActivity.time}
              onChange={handleInputChange}
              required
            />
          </td>
          <td>
            <select
              name="performer"
              value={editedActivity.performer}
              onChange={handleInputChange}
              className="h-[1.625rem]"
            >
              <option value="">Choose performer</option>
              <option value="John">John</option>
              <option value="Tom">Tom</option>
              <option value="Tony">Tony</option>
            </select>
          </td>
          <td>
            <select
              name="pitch"
              value={editedActivity.pitch}
              onChange={handleInputChange}
              required
              className="h-[1.625rem]"
            >
              <option value="">Choose pitch</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>
            <div className="flex justify-around text-white">
              <button onClick={handleEdit}>Save</button>
              <button onClick={toggleEdit}>Cancel</button>
            </div>
          </td>
        </tr>
      ) : (
        <tr className="text-white">
          <td>{activity.type}</td>
          <td>{activity.date}</td>
          <td>{activity.time}</td>
          <td>{activity.performer}</td>
          <td>{activity.pitch}</td>
          <td>
            <div className="flex flex-col justify-around text-white">
              <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold h-[1.625rem] rounded mb-3' onClick={toggleEdit}>Edit</button>
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold h-[1.625rem] rounded' onClick={onDelete}>Delete</button>
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default SingleActivity;


