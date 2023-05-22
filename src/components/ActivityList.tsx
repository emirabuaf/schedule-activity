import { useCallback, useState } from "react";
import SingleActivity from './Activity'
import Form from "./Form";
import { Activity } from "../types";


const ActivityList: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = useCallback((activity: Activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  }, []);

  const editActivity = (index: number, updatedActivity: Activity) => {
    const updatedActivities = [...activities];
    updatedActivities[index] = updatedActivity;
    setActivities(updatedActivities);
  };

  const deleteActivity = (index: number) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  return (
    <div>
      <Form
        addActivity={addActivity}
        activities={activities}
      />
      <table className='w-full text-center'>
        <tr className='text-white'>
          <th>Type</th>
          <th>Date</th>
          <th>Time</th>
          <th>Performer</th>
          <th>Pitch</th>
          <th>Action</th>
        </tr>
        {activities.map((activity, index) => (
          <SingleActivity
            key={index}
            index={index}
            activity={activity}
            onEdit={editActivity}
            onDelete={() => deleteActivity(index)}
          />
        ))}
      </table>
    </div>
  );
};

export default ActivityList;