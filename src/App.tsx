import ActivityList from "./components/ActivityList";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="bg-indigo-800 h-screen">
      <div className="container px-4 flex flex-col mx-auto">
        <Forecast />
        <ActivityList />
      </div>
    </div>
  );
}

export default App;
