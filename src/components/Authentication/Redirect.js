import React, {useEffect} from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';

const Redirect = () => {

    const clientID = '' //insert client id and client secret provided by github
    const clientSecret = ''
    const query = window.location.search.substring(1)
    const requestToken = query.split('code=')[1]

    useEffect( () => {

     const fetchToken= async () => {

      await axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        // Set the content type header, so that we get the response in JSOn
        headers: {
          accept: 'application/json'
        }
      }).then((response) => {
       window.location.replace(`http://localhost:3000/cards/?accessToken=${response.data.access_token}`)
      }
      )
     } 
     fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    )

  }

   

export default Redirect;