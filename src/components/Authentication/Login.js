import React from 'react'
import { Card, Icon, Grid, Header, Segment } from 'semantic-ui-react'

const Login = () => (

 <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Card>
        <Card.Header> <Header as='h2' icon>
           <Icon name='github' />
            Oath2 Github
            </Header></Card.Header>
        <Segment stacked>
        <a href="https://github.com/login/oauth/authorize?client_id=client_id&redirect_uri=http://localhost:3000/redirect">Login via Github</a>
        </Segment>
      </Card>
  
    </Grid.Column>
  </Grid>
 
)

export default Login;