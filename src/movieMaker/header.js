import React, {useState} from "react";
import {Link} from "react-router-dom"

import constants from './constants'

const Header = () => {
  const [movieName, setMovieName] = useState(constants.SEARCH_STRING)
  const onChange = (e) => {
    setMovieName(e.target.movieName)
  }
  const onClick = () => {
    console.log('movieName', movieName);
  }
  return (
    <div>
      <div>
        netflixroulett
        <button type="button">
          <Link to={`/${movieName}`}> +ADD MOVIE</Link>
        </button>
      </div>
      <div>FIND YOUR MOVIE</div>
      <input
        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
        type="text"
        id="search"
        name="search"
        placeholder={movieName}
        onChange={onChange}
        required
      />
      <button className="" type="button" onClick={onClick}>
        search
      </button>
    </div>
  );
};

export default Header;
