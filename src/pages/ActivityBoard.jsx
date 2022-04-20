import { useState,useEffect } from "react";
import axios from "axios";

import Form from "../components/Form/Form";
import Activitiesboard from "../components/Actboard/ActivitiesBoard";

const ActivityBoard = () => {
  const [listOfActivities, setListOfActivities] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/activities")
        .then((response) => {
            setListOfActivities(response.data);
            console.log("useeffect ran");
        })
        .catch(() => {
            console.log("ERROR");
        })
    }, []);

  return (
      <div className="App">
          <Form setListOfActivities={setListOfActivities} listOfActivities={listOfActivities} />
          <Activitiesboard listOfActivities={listOfActivities} setListOfActivities={setListOfActivities} />
      </div>
  );
}

export default ActivityBoard;