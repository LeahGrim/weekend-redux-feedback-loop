import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory} from "react-router-dom";
import React from "react";

function Review () {
    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector((store) => store.feedbackReducer)


    const onHandleSubmit = () => {
     axios.post("/feedback", feedback)
     .then((res) => {
         console.log("POST /feedback", res);
     })
     .catch((err) => {
         console.error("POST /feedback", err);
     })
    }

    return (
        <div>
            <h2>Review your Feedback</h2>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Supported: {feedback.supported}</p>
            <p>Comments: {feedback.comments}</p>


            <button onClick={onHandleSubmit}>SUBMIT</button>
            <br></br>
        </div>
    )
}
export default Review;