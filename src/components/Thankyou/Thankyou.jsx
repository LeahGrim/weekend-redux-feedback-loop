import { useDispatch, useSelector} from "react-redux";

function ThankYou () {
    const dispatch = useDispatch();

    const reset = () => {
        console.log("submitted");
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