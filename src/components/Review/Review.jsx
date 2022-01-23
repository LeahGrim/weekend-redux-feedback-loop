import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory} from "react-router-dom";


function Review ()  {

    const history = useHistory();
    const feedback = useSelector((store) => store.feedbackReducer)


    const onHandleSubmit = () => {
     axios.post("/api/feedback", feedback)
     .then((res) => {
         console.log("POST /feedback", res);
     })
     .catch((err) => {
     })
     console.log("submitted");
     history.push("/Thankyou");
    }

    return (
        <div>
            <h2>Review your Feedback</h2>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>


            <button  onClick={onHandleSubmit}>SUBMIT</button>
            <br></br>
        </div>
    )
}
export default Review;