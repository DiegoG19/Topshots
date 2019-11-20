import React from 'react';
import axios from 'axios';

  
  axios({
    url: "https://api-v3.igdb.com/search",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '8f6aca1b385bc531765d7a3cc7625bda'
    },
    data: "fields cover,name,rating,artworks,first_release_date; search 'League of Legends' "
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });