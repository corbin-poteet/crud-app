import React from 'react'
import { Button, Card, Figure } from 'react-bootstrap'
import MainGalaxy from './MainGalaxy.jpg'
import Wiki from './LARGE-Wiki (2).jpg'

function Home() {
  return (
    <div className="Home">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Wiki} />
      <Card.Body>
        <Card.Title>Wookieepedia</Card.Title>
        <Card.Text>
          Fan-written encyclopedia with over 178,153 pages.
        </Card.Text>
        <Button variant="primary">Go there</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Home