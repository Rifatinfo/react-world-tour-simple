import { useState } from 'react';
import './Country.css'
const country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const {name, flags, population , area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => handleVisitedCountries(country);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color : visited ? 'red' : 'purple'}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() =>handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlag(country)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country'} */}
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default country;