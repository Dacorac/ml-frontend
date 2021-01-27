import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const HomePage = () => {

    const [term, setTerm] = useState('');

    const handleInputChange = (e) => setTerm(e.target.value);

    let history = useHistory();

    const handleButtonClick = (e) => {
        e.preventDefault();
        
        history.push(`/items?search=${term}`);
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} value={term} />
            <button onClick={handleButtonClick}>click</button>
        </div>
      );
}
 
export default HomePage;