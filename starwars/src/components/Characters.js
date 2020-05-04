import React, { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios'

const Characters = () => {
    const [ characters, setCharacters] = useState(null)
    useEffect(() => {
        axios
          .get("https://rickandmortyapi.com/api/character/")
          .then((res) => {
            console.log(res.data)
            setCharacters(res.data.results)
          })
          .catch((err) => console.log("Wubba Lubba Dub Dub!", err));
      }, []);

      const renderCharacters = () => {
        if (characters) {
          return characters.map(character => {
            return (
            <div className="card">
              <div>{character.name}</div>
              <div>{character.species}</div>
            </div>
            )
          })
        }

        return null;
      }

      return renderCharacters()
}

export default Characters;