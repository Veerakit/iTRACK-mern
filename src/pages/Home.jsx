import "./home.css";
import { BiWalk } from "react-icons/bi";
import { MdOutlineEditNote } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <div className="main-container">
                <div>
                    <h1>
                        NEVER LOSE YOUR TRACK
                    </h1>
                </div>
            </div>

            <div className="set">
                <div className="sub-main-container-trackact">
                    <Link className="logolink" to="/activities" >
                             <div>
                                <BiWalk />
                            </div>
                    </Link>
                </div>

                <div className="sub-main-container-todo">
                    <Link className="logolink" to="/todos" >
                    <div>
                        <MdOutlineEditNote />
                    </div>
                    </Link>
                </div>
            </div>
        
            <div className="set">
                <div className="sub-main-container-bot">
                    <div>
                        <p>
                            Track Activity
                        </p>
                        <p className="text-inbox">
                            A tracker for tracking an exercise activity. Users be able to track their activity down with details regarding the activity.
                        </p>
                    </div>
                </div>

                <div className="sub-main-container-bot">
                    <div>
                        <p>
                            TO DO List
                        </p>
                        <p className="text-inbox">
                            TO DO List is a simple memo for noting down a task as a reminder. This allows the user to create, delete or cross tasks.
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Home;