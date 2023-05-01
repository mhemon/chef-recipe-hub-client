import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import banner1 from '../../assets/banner01.jpg'
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import SingleChef from '../Shared/SingleChef/SingleChef';

const Home = () => {
    const chefData = useLoaderData()
    return (
        <div className='container'>
            {/* banner section */}
            <section className='mt-2 my-md-4'>
                <Row>
                    <Col md={6}>
                        <img className='img-fluid' src={banner1} alt="" />
                    </Col>
                    <Col md={6}>
                        <div className='p-2 px-md-4 py-md-4'>
                            <h3 className='fst-italic'>Biryani specialist</h3>
                            <h1 className='chef-name text-warning'>David <br /> Parker</h1>
                            <p className='text-muted justify-text'>David Parker is a Biryani specialist with a passion for creating rich and flavorful dishes. With years of experience in the culinary arts, David has honed his skills to create the perfect balance of spices and textures in his Biryani recipes. His signature dishes are known for their aromatic flavors and mouth-watering appeal.</p>
                        </div>
                    </Col>
                </Row>
            </section>
            {/* Chef Section */}
            <section>
                <h2 className='text-center'>Chef's Section</h2>
                <hr />
                <Row xs={1} md={2} lg={3} className="g-4 py-2 mb-2">
                    {chefData.map(chef => <SingleChef key={chef.id} chef={chef}></SingleChef>)}
                </Row>
            </section>
        </div>
    );
};

export default Home;