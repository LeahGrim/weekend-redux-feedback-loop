import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";


function Supported() {
const dispatch = useDispatch();

const [supported, setSupported] = useState("");

const handleChange = (event) => {
    event.preventDefault();
    dispatch({
        type: 'ADD_SUPPORTED',
        payload: supported,
    });
    setSupported("");
}
return(
    <div>
        <h2>How well are you being supported?</h2>
        <h4>Pick between 1 to 5</h4>
        <form onSubmit={handleChange}>
        <input 
        onKeyPress={(event) => {
            if (!/[0-5]/.test(event.key)) {
                event.preventDefault();
            }
        }}
        type="text"
        maxLength="1"
        value={supported}
        onChange={(event) =>setSupported(event.target.value)}
        placeholder='Supported?'
        />
        <button className="NextBtn" type="submit">Next</button>
        </form>
    </div>
);

}

export default Supported;