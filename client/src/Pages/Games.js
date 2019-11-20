import React, { useState, useEffect, Component } from "react";
//import { Link } from "react-router-dom";
// string object array int function 
import axios from "axios" ;
import api from "../component/utils/api";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

//import Popup from "reactjs-popup";
//import MediaCard from '../compoment/InfoCard/index'
//import { on } from "cluster";
function Games() {
  const [games, setGames] = useState([]);
  const handleOnSubmit = (name) =>{
    axios({
    url: "/api/games?name=" + name,
    method: 'GET',
    
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });
  }
  

 
       //console.log(name)}

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      //console.log(result.data);
      let dataArray = result.data.data;
      let finalArray = dataArray.map(game => {
        let newURL = game.box_art_url
          .replace("{width}", "300")
          .replace("{height}", "300");
        game.box_art_url = newURL;
        return game;
      });
      console.log(finalArray);
      setGames(finalArray);
    };
    fetchData();
  }, []);
  return (
    
    <div>
      
      <h1>Most Popular Games</h1>
      <div className="row">
        {games.map(game => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img className="card-img-top" src={game.box_art_url} />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
              
             <button onClick={(event) => handleOnSubmit(game.name)} className="btn btn-success">
                  
                  
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;

