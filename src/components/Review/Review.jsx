import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Review () {
    const dispatch = useDispatch();
    const review = useSelector((store) => store.formState)


    const submit = () => {
     axios.post("/feedback", review)
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

            <button onClick={submit}>NEXT</button>
            <br></br>
        </div>
    )
}
export default Review;