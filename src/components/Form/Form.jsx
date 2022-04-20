import { useState } from "react";
import "./Form.css";
import axios from "axios";
import { BiWalk } from "react-icons/bi";

const Form = ({ listOfActivities , setListOfActivities }) => {
    
    const [popupActive, setPopupActive] = useState(false);

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("run");
    const [calories, setCalories] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [description, setDescription] = useState("");

    const addActivity = () => {
        axios.post("https://itrack-mern.herokuapp.com/activities/addactivity", {
            name: name, date: date, type: type, calories: calories,
            hour: hour, minute: minute, second: second, description: description
        }).then(() =>{
            console.log("Activity added!");
        }).then((response) => {
            setListOfActivities([
              ...listOfActivities,
              {
                name: name, date: date, type: type, calories: calories,
                hour: hour, minute: minute, second: second, description: description
              },
            ]);
          }).catch(() => {
            alert("Error!");
        })
    };
    
    return (
        <div className="">
            <div className="addPopup" onClick={() => setPopupActive(true)}>< BiWalk/></div>
            
            {popupActive ? (
                <div className="popup">
                        <div className="closePopup" onClick={() => setPopupActive(false)}></div>
                    <div className="popup">
                        <div className="">
                            <label>ACTIVITY NAME</label>
                            <input className="add-input" type="text" 
                                onChange={(e) => {setName(e.target.value)}}
                            />
                        </div>

                        <div className="">
                            <label>DATE</label>
                            <input className="add-input" type="date" 
                                onChange={(e) => {setDate(e.target.value)}}
                                />
                            </div>
                        <div className="">
                            <label>TYPE</label>
                            <select className="add-input" name="activity" id="activity"
                                onChange={(e) => {setType(e.target.value)}}
                                >
                                <option value="run">Run</option>
                                <option value="walk">Walk</option>
                                <option value="swim">Swim</option>
                                <option value="hike">Hike</option>
                                <option value="bicycle">Bicycle</option>
                            </select>
                        </div>

                        <div className="">
                            <label>CALORIES</label>
                            <input className="add-input" type="number" 
                                onChange={(e) => {setCalories(e.target.value)}}
                                />
                        </div>

                    <div className="continer-dual">
                        <div className="container-input">
                            <label>HOUR</label>
                            <input className="add-input" type="number" 
                                onChange={(e) => {setHour(e.target.value)}}
                                />
                        </div>
                        <div className="container-input">
                            <label>MINUTE</label>
                            <input className="add-input" type="number" 
                                onChange={(e) => {setMinute(e.target.value)}}
                                />
                        </div>
                    </div>
                        
                        <div className="">
                            <label>SECOND</label>
                            <input className="add-input" type="number" 
                                onChange={(e) => {setSecond(e.target.value)}}
                                />
                        </div>

                        <div className="">
                            <label>DESCRIPTION</label>
                            <textarea className="add-input" type="text" 
                                onChange={(e) => {setDescription(e.target.value)}}
                                />
                        </div>

                        <div className="button-add" onClick={addActivity}>
                            ADD ACTIVITY
                        </div>
                    </div>
                </div>
            ) : ''}
        </div>
	);
}

export default Form;