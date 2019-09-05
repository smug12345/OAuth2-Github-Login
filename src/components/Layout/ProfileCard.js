import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ProfileCard = (user) => {
  
    return(
<Card>
    <Image src= {user.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{user.name}</Card.Header>
      <Card.Meta>
        <span className='date'> Joined on {user.created_at}</span>
      </Card.Meta>
      <Card.Description>
     E-mail : {user.email}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
    )
  
    }

export default ProfileCard