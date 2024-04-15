import React, {useState} from 'react';
import ItemList from "./itemList";

const RequestingForm = (props) => {

    let genders = [
        { label: "Female", value: "Female" },
        { label: "Male", value: "Male" },
        { label: "Non Binary", value: "Non Binary" },
        { label: "Not Specified", value: "Not Specified" }
    ]
    
    let ageRanges = [
        { label: "15-19", value: "15-19" },
        { label: "20-29", value: "20-29" },
        { label: "30-39", value: "30-39" },
        { label: "40-49", value: "40-49" },
        { label: "50-59", value: "50-59" },
        { label: "60+", value: "60+" },
    ]

    let cities = [
        { label: "Torreón", value: "Torreón" },
        { label: "Gómez Palacio", value: "Gómez Palacio" },
        { label: "Lerdo", value: "Lerdo" },
        { label: "Matamoros", value: "Matamoros" },
        { label: "Fco I. Madero", value: "Fco I. Madero" },
    ]

    let zipCodes = [
        { label: "27000", value: "27000" },
        { label: "27010", value: "27010" },
        { label: "27015", value: "27015" },
        { label: "27110", value: "27110" },
        { label: "27115", value: "27115" },
        { label: "27300", value: "27300" },
        { label: "27318", value: "27318" },
        { label: "27450", value: "27450" },
        { label: "27480", value: "27480" },
    ]
      const [name, setName] = useState(props?.value ?? '');
      const [gender, setGender] = useState("⬇️ Select a gender ⬇️")
      const [ageRange, setAgeRange] = useState("⬇️ Select an Age Range ⬇️")
      const [city, setCity] = useState("⬇️ Select a City ⬇️")
      const [zipCode, setZipCode] = useState("⬇️ Select a Zip Code ⬇️")
    
      let handleGenderChange = (e) => {
        setGender(e.target.value)
      }
    
      let handleAgeRangeChange = (e) => {
        setAgeRange(e.target.value)
      }
    
      let handleCityChange = (e) => {
        setCity(e.target.value)
      }
    
      let handleZipCodeChange = (e) => {
        setZipCode(e.target.value)
      }

    return (
    <>
      <section className="section row mb-4">
        <div className="col-12">
          <h4>
            ℹ️ User information 👥
          </h4>
        </div>
        <div className="col-4">
          <div className='label'>
            Name:
          </div>
          <div>
            <input value={name} onInput={e => setName(e.target.value)}></input>
          </div>
        </div>
        <div className="col-4">
          <div className='label'>
            Gender:
          </div>
          <div>
            <select onChange={handleGenderChange}> 
              <option value="⬇️ Select a gender ⬇️"> ⬇️ Select a gender ⬇️ </option>
              {genders.map((gender) => <option value={gender.value}>{gender.label}</option>)}
            </select>
          </div>
        </div>
        <div className="col-4">
          <div className='label'>
            Age:
          </div>
          <div>
            <select onChange={handleAgeRangeChange}> 
              <option value="⬇️ Select an ageRange ⬇️"> ⬇️ Select an Age Range ⬇️ </option>
              {ageRanges.map((ageRange) => <option value={ageRange.value}>{ageRange.label}</option>)}
            </select>
          </div>
        </div>
      </section>
      <section className="section row mb-4">
        <div className="col-12">
          <h4>
            🏠 Delivery Info 🛵
          </h4>
        </div>
        <div className="col-4">
          <div className='label'>
            City:
          </div>
          <div>
            <select onChange={handleCityChange}> 
              <option value="⬇️ Select a City ⬇️"> ⬇️ Select a City  ⬇️</option>
              {cities.map((city) => <option value={city.value}>{city.label}</option>)}
            </select>
          </div>
        </div>
        <div className="col-4">
          <div className='label'>
            Zip Code:
          </div>
          <div>
            <select onChange={handleZipCodeChange}> 
              <option value="⬇️ Select a Zip Code ⬇️"> ⬇️ Select a Zip Code  ⬇️</option>
              {zipCodes.map((zipCode) => <option value={zipCode.value}>{zipCode.label}</option>)}
            </select>
          </div>
        </div>
      </section>
      <section className="section row mb-4">
        <div className="col-12">
          <h4>
            🥗 Order Here 🍔
          </h4>
        </div>
        <ItemList key="OK" city={city} zipCode={zipCode} gender={gender} ageRange={ageRange} name={name}/>
      </section>
    </>
  );
};

export default RequestingForm;