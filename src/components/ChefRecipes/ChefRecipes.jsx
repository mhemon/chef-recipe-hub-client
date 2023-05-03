import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../Shared/SingleRecipe/SingleRecipe';

const ChefRecipes = () => {
    const chefProfile = useLoaderData()
    const { id, picture, name, speciality,likes, numberOfRecipes, yearsOfExperience, bio, recipes } = chefProfile
    console.log(recipes);
    return (
        <div className='container'>
            {/* banner section */}
            <section className='mt-2 my-md-4 card'>
                <Row>
                    <Col md={6}>
                        <img className='img-fluid p-2 h-100' src={picture} alt="" />
                    </Col>
                    <Col md={6}>
                        <div className='p-2 px-md-4 py-md-4'>
                            <h3 className='fst-italic'>{speciality}</h3>
                            <h1 className='chef-name text-warning'>{name}</h1>
                            <p className='text-muted justify-text'>{bio}</p>
                            <h6>Number of Likes : {likes}</h6>
                            <h6>Number of Recipes : {numberOfRecipes}</h6>
                            <h6>Year of Experiences : {yearsOfExperience}</h6>
                        </div>
                    </Col>
                </Row>
            </section>
            {/* recepies section */}
            <section>
                <h2 className='text-center fw-bold'>Chef's <span className='text-warning'>recipes</span></h2>
                <hr />
                {/* cards */}
                <Row xs={1} md={2} lg={3} className="g-4 py-2 mb-2">
                    {recipes.map((singleRecipe, id) => <SingleRecipe key={id} singleRecipe={singleRecipe}></SingleRecipe>)}
                </Row>
            </section>
        </div>
    );
};

export default ChefRecipes;