import React from 'react'
import "./header.css"
import { faBed, faCar, faLocation, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {useNavigate} from 'react-router-dom';

const Header = (type) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination,setDestination]=useState("");
  const [state, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(
    {
      adult: 1,
      children: 0,
      room: 1,
    });

    const navigate=useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }

  const handleSearch=()=>{
    navigate("/hotels",{state:{destination,state,options}});
  }

  return (
    <div className='header'>
      <div className={type.type==="list" ? "headerContainer listMode":"headerContainer"}>
        <div className="headerList">
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faLocation} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type.type!=="list" && (<><h1 className='headerTitle'>A lifetime of discounts? It's Genius</h1>
        <p className='headerDesc'>
          Get rewarded for your travels - unlock instant saving of 10% or more with a free yesbooking account
        </p>
        <button className='headerBtn'>Sign in/Register</button>
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='headerSearchInput'
              onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(state[0].startDate, "dd/MM/yyyy")} to ${format(state[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              ranges={state}
              className='date'

            />}
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openOptions && <div className='options'>
              <div className='optionItem'>
                <span className='optionText'>Adult</span>
                <div className='optionCounter'>
                  <button disabled={options.adult <= 1} className='optionCounterButton' onClick={() => handleOption("adult", "d")}>-</button>
                  <span className='optionCounterNumber'>{options.adult}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                </div>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Children</span>
                <div className='optionCounter'>
                  <button disabled={options.children <= 0} className='optionCounterButton' onClick={() => handleOption("children", "d")}>-</button>
                  <span className='optionCounterNumber'>{options.children}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
                </div>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Room</span>
                <div className='optionCounter'>
                  <button disabled={options.room <= 1} className='optionCounterButton' onClick={() => handleOption("room", "d")}>-</button>
                  <span className='optionCounterNumber'>{options.room}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className='headerSearchItem'>
            <button className='headerBtn' onClick={handleSearch}>Search</button>
          </div>
        </div></>)}

      </div>
    </div>
  )
}

export default Header
