import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
import country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
   
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

   const handleVisitedCountries = country => {
    console.log('add this to your visited country');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
   }

   const handleVisitedFlag = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
   }

   // remove item from an array array ina state 
   

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {/* {visited Countries} */}
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>
             <div>
             <div className="flag-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag.flags.png}></img>)
                }
            </div>
             </div>
            {/* {display countries} */}
          <div className="country-container">
            {
                countries.map( country  => <Country  key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag = {handleVisitedFlag} country={country}></Country>)
            }
          </div>
          
        </div>
    );
};

export default Countries;