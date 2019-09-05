import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';

import ProfileCard from './ProfileCard';
import RepoList from './RepoList';

const Cards= () => {

const query = window.location.search.substring(1)
const accessToken = query.split('accessToken=')[1]
const [user, setUser] = useState();
const [repos, setRepos] = useState([]);


useEffect(() => {

    const getUser = async () => {
await fetch ('//api.github.com/user', {
    headers: {
        Authorization: 'token ' + accessToken
    }
})
// Parse the response as JSON
.then(res => res.json())
.then(res => {
    setUser(res);
})
    }
    getUser();
    getUserRepos();
    // getUserEvents();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


//get repos list
const getUserRepos = async () => {

    await fetch('//api.github.com/user/repos', {
        headers: {
            Authorization: 'token ' + accessToken
        }
    }).then(res => res.json())
    .then(res => {
        setRepos(res);
        console.log(res);
    })

}


return (

    <Grid celled>
        <Grid.Row>
            <Grid.Column width={3}>
            <ProfileCard {...user} />
            </Grid.Column>
            <Grid.Column width={10}>
            <RepoList repos={repos} user={user} />
            </Grid.Column>
        </Grid.Row>
    </Grid>

    )

}

export default Cards;