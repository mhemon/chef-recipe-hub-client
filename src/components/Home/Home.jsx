import React, { useContext } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
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
                            <h1 className='chef-name text-warning'>Manik <br /> Khan</h1>
                            <p className='text-muted justify-text'>Manik Khan is a Biryani specialist with a passion for creating rich and flavorful dishes. With years of experience in the culinary arts, Manik has honed his skills to create the perfect balance of spices and textures in his Biryani recipes. His signature dishes are known for their aromatic flavors and mouth-watering appeal.</p>
                        </div>
                    </Col>
                </Row>
            </section>
            {/* Chef Section */}
            <section>
                <h2 className='text-center fw-bold'>Chef's <span className='text-warning'>Section</span></h2>
                <hr />
                <Row xs={1} md={2} lg={3} className="g-4 py-2 mb-2">
                    {chefData.map(chef => <SingleChef key={chef.id} chef={chef}></SingleChef>)}
                </Row>
            </section>
            {/* signature item section */}
            <section className='mt-2 mt-lg-4'>
                <h2 className='text-center fw-bold'>Signature <span className='text-warning'>Items</span></h2>
                <hr />
                {/*signature items container */}
                <Row xs={1} md={2} lg={3} className="g-4 py-2 mb-2">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='card-img'>
                                <Card.Img className='img-fluid' variant="top" src="https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                            </div>
                            <Card.Body>
                                <Card.Title>Shami Kebab</Card.Title>
                                <Card.Text className='text-justify'>
                                    Shami Kebab is a popular Kebab from Bangladeshi made with ground meat, lentils, and spices. It is typically served as an appetizer or snack.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='card-img'>
                                <Card.Img className='img-fluid' variant="top" src="https://images.pexels.com/photos/14846852/pexels-photo-14846852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                            </div>
                            <Card.Body>
                                <Card.Title>Chicken Korma</Card.Title>
                                <Card.Text className='text-justify'>
                                    Chicken Korma is a delicious, mild Bangladeshi dish made with tender chicken cooked in a creamy sauce of yogurt, coconut milk, and aromatic spices.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='card-img'>
                                <Card.Img className='img-fluid' variant="top" src="https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </div>
                            <Card.Body>
                                <Card.Title>Mutton Tehari</Card.Title>
                                <Card.Text className='text-justify'>
                                    Mutton Tehari is a popular spicy rice dish in Bangladeshi cuisine, consisting of aromatic basmati rice cooked with tender mutton, aromatic spices, and vegetables.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            {/* Weekly Special */}
            <section>
                <h2 className='text-center fw-bold'>Weekly <span className='text-warning'>Special</span></h2>
                <hr />
                {/* items */}
                <Row xs={1} md={2} className="g-4 py-2 mb-2">
                    <Col>
                        <div className="card mb-3" style={{ maxWidth: '540px', height: '190px', overflow: 'hidden' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Dhaka-style biriyani</h5>
                                        <p className="card-text mb-1">Dhaka-style biriyani is a spicy, fragrant rice dish made with flavorful spices, meat (usually beef), potatoes, and eggs, and is popular in Bangladesh and beyond.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mb-3" style={{ maxWidth: '540px', height: '190px', overflow: 'hidden' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/09/begun-bhaja-1.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Begun Bhaja</h5>
                                        <p className="card-text mb-1">Begun Bhaja is a popular Bengali dish made by frying thin slices of eggplant until crispy. It is often served as a side dish with rice and dal.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mb-3" style={{ maxWidth: '540px', height: '190px', overflow: 'hidden' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://foodiesterminal.com/wp-content/uploads/2019/04/Chingri-Macher-Malai-Curry-2.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Chingri malai curry</h5>
                                        <p className="card-text mb-1">Chingri malai curry or malai chingri, also known as prawn malai curry, is a Bengali curry made from tiger and king prawns and coconut milk and flavoured with spices.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mb-3" style={{ maxWidth: '540px', height: '190px', overflow: 'hidden' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Chicken roast</h5>
                                        <p className="card-text mb-1">Chicken roast is a classic dish made by roasting a whole chicken with seasonings and herbs. It's a delicious and comforting meal that's perfect for any occasion.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    );
};

export default Home;