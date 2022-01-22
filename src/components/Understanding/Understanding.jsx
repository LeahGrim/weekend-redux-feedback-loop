import {useState} from 'react';
import { useDispatch} from 'react-redux';

function Understanding() {
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        });

        setUnderstanding("");
}

return(
    <div>
    <h3>How well are you understanding the content?</h3>
    <h4>Pick between 1 to 5</h4>
    <h2>1 being not so well and 5 being very well</h2>
    <form onSubmit={handleChange}>
        <input 
        onKeyPress={(event) => {
            if (!/[0-5]/.test(event.key)) {
                event.preventDefault();
            }
        }}
        type="text"
        maxLength="1"
        value={understanding}
        onChange={(event) =>setUnderstanding(event.target.value)}
        placeholder='Understanding?'
        />
        <button className="NextBtn" type="submit">Next</button>
    </form>
    </div>
    
);
}

export default Understanding;