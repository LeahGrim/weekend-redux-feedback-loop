import {useState} from 'react';
import {useDispatch} from 'react-redux';


function Feelings () {
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEELINGS',
            payload: feeling
        })

    }

    return(
        <div>
            <h3>How are you feeling today?</h3>
            <select onChange={event => setFeeling(event.target.value)} name="feeling" id="feelings">
                <option value="Great">Great</option>
                <option value="Not so great">Not so great</option>
                <option value="Ok">Ok</option>
                <option value="Horrible">Horrible</option>

            </select>
            <button onClick={handleChange}>Next</button>
        </div>
    )
}

export default Feelings;