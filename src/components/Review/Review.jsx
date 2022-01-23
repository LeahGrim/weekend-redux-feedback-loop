import { useSelector, useDispatch } from "react-redux";

function Review () {
    const dispatch = useDispatch();

    const submit = () => {
        console.log('submit');
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