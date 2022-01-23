import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";


function Feelings () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEELINGS',
            payload: feeling
        })
        history.push("/Supported")

    }

    return(
        <div>
            <h3>How are you feeling today?</h3>
            <h4>Pick between 1 to 5</h4>
            <h2>1 being down and 5 being amazing</h2>
    <form onSubmit={handleChange}>
        <input 
        onKeyPress={(event) => {
            if (!/[0-5]/.test(event.key)) {
                event.preventDefault();
            }
        }}
        type="text"
        maxLength="1"
        value={feeling}
        onChange={(event) =>setFeeling(event.target.value)}
        placeholder='Feeling'
        />
        <button disabled={!feeling} className="NextBtn" type="submit">Next</button>
    </form>
        </div>
    )
}

export default Feelings;