import React from 'react'
import { Header, Card, Icon, Container, Grid} from 'semantic-ui-react'

const RepoList = ({repos}) => {


  const SingleCard = ({names}) => {

    return (
      <Card key={names.id}>
      <Card.Content>
        <Card.Header>{names.name}</Card.Header>
        <Card.Meta>{names.language}</Card.Meta>
        <Card.Description>
        {names.description}
        </Card.Description>
      </Card.Content>
    </Card>

    )
    }

    return (

      <Container>
        <Header as='h2' icon>
           <Icon name='settings' />
            Repositories
            </Header>
      <Grid columns={3}>
          {repos.map(names => (
              <div key={names.id} className="column">
                  <SingleCard names={names} />
              </div>
          ))}
      </Grid>
  </Container>

    )
  
}

export default RepoList

