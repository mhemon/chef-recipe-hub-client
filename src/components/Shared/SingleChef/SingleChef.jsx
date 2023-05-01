import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './SingleChef.css'
import { Link } from 'react-router-dom';

const SingleChef = ({ chef }) => {
    const { id, name, picture , yearsOfExperience, numberOfRecipes, likes} = chef
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <div className='card-img'>
                    <Card.Img className='img-fluid' variant="top" src={picture} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Year of Experience : {yearsOfExperience}
                        <br />
                        Numbers of recipes : {numberOfRecipes}
                        <br />
                        Total Likes : {likes}
                    </Card.Text>
                    <Link><Button variant="warning">View Recepie</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleChef;