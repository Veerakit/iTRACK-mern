import "./activitiesboard.css";
import { ImBin, ImPencil } from "react-icons/im";
import { BiRun, BiWalk, BiSwim } from "react-icons/bi";
import { MdNordicWalking } from "react-icons/md";
import { IoIosBicycle } from "react-icons/io";
import axios from "axios";

const Activitiesboard = ({listOfActivities , setListOfActivities}) => {

    const deleteActivity = (_id) => {
        axios.delete(`https://itrack-mern.herokuapp.com/activities/${_id}`)
            .then(() => {
                setListOfActivities(
                    listOfActivities.filter((list) => {
                        return list._id !== _id;
                })
            )
        });
    };

    const switchLogo = (list) => {
        switch(list.type) {
            case "walk":
                return <BiWalk className="logo-activity" />;
            case "swim":
                return <BiSwim className="logo-activity" />;
            case "hike":
                return <MdNordicWalking className="logo-activity" />;
            case "bicycle":
                return <IoIosBicycle className="logo-activity" />;
            default:
                return <BiRun className="logo-activity" />;
        }
    };

    return (
        <div className="">
            <h1>ACTIVITY BOARD</h1>
            {listOfActivities.map((list) => {
                return <div className="" key={list._id}>
                    <div className="list-topic">{list.name.toUpperCase()}
                    
                        
                    </div>
                    <div className="list">
                        <div className="list-sub">
                        </div>
                            <div className="">
                                <div>{switchLogo(list)}</div>
                        <div className="desc-box">{list.type.toUpperCase()} {list.date.slice(0,10)} Calories: {list.calories}
                        &nbsp; Hrs: {list.hour} Mins: {list.minute} Secs: {list.second}
                            </div>
                            <div className="desc-box-justify">
                                Description: {list.description}
                            </div>
                        </div>
                        <div className="edit-list" >
                            <ImPencil />
                        </div>
                        
                        <div className="delete-list" onClick={() => {
                            deleteActivity(list._id);
                        }}>
                            <ImBin />
                        </div>  
                    </div>
                </div>
            })}
        </div>
    )
}

export default Activitiesboard;