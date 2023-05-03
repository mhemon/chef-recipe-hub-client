import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';

const SingleRecipe = ({ singleRecipe }) => {
    const [visible, setVisible] = useState(true)
    const { recipeName, ingredients, rating, cookingMethod } = singleRecipe

    const handleFavouriteBtn = () => {
        toast.success('❤️ Added to Favourite List!');
        setVisible(!visible)
    }
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title className='fw-bold'>{recipeName}</Card.Title>
                    <Card.Text className='text-justify mt-2'>
                        <span className='fw-semibold'>Ingredients : <br /></span>
                        <ol>
                            {ingredients.map(item => <li>{item}</li>)}
                        </ol>
                    </Card.Text>

                    <Card.Text className='text-justify mt-2'>
                        <span className='fw-semibold'>Cooking Method : <br /></span>
                        {cookingMethod}
                    </Card.Text>

                    <Card.Text className='text-justify mt-2'>
                        <span className='fw-semibold'>Ratings : <br /></span>
                        <div className='d-flex align-items-center gap-2'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                        <span className='fs-3'>{rating}</span>
                        </div>
                    </Card.Text>
                    <Button onClick={handleFavouriteBtn} className={visible ? '' : 'disabled'} variant='dark'><FaHeart color={'#FFC107'} size={'2rem'}/></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleRecipe;