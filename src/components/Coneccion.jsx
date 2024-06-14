import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Coneccion () {

  const [gatosData, setGatosData] = useState([]);

  const apikey = 'live_jqM192ZqcpmcxAw4YOUnWSw4LOLG40SHqUsZxNwCowOaeyaqmbEQ8EGXv2Y9oKcK';

  const url = `https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=${apikey}`;

  const consultaDeApi = async () => {
    console.log(url)
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGatosData(data);

      console.log(data);

    } catch (error) {
      console.log("errorcito", error);

    }
  };

  useEffect(() => {
    consultaDeApi();
  }, []);




  return (
    
    <Container className>
      <Row className='cards'>
        {gatosData.map((image) => (
          <Col key={image.id} sm={6} md={4} lg={4}>
            <Card style={{ width: '16rem', margin: '8px', backgroundColor:'green'}}>
              <Card.Img variant='top' src={image.url} alt={image.id} />
              <Card.Body>
                <Card.Title>{image.id}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{image.width}</Card.Subtitle>
                <Button variant='primary'>Go</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
   
    </Container>
  );
}

export default Coneccion;