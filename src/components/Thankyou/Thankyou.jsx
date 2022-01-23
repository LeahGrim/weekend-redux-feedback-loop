import { useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

function ThankYou () {
    const dispatch = useDispatch();
    const history = useHistory();

    const reset = () => {
        console.log("submitted");
        history.push("/")
        dispatch ({
            type: "EMPTY"
        })
    };

    return (
        <div>
            <header>Feedback</header>
            <h2>Thank You!</h2>
            <button onClick={reset}>Leave New Feedback</button>
        </div>
    );
}

export default ThankYou;