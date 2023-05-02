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
                                <Card.Img className='img-fluid' variant="top" src="https://images.unsplash.com/photo-1515579171902-e0c5f918b32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </div>
                            <Card.Body>
                                <Card.Title>Dark Chocolate Truffles</Card.Title>
                                <Card.Text className='text-justify'>
                                    Indulge in the rich and smooth flavor of our handcrafted dark chocolate truffles, made with the finest ingredients and expertly crafted for perfection.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='card-img'>
                                <Card.Img className='img-fluid' variant="top" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" />
                            </div>
                            <Card.Body>
                                <Card.Title>Margherita Pizza</Card.Title>
                                <Card.Text className='text-justify'>
                                    Margherita Pizza is a classic Italian pizza made with a tomato sauce base, mozzarella cheese, and fresh basil. Simple yet delicious, it's a timeless favorite.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <div className='card-img'>
                                <Card.Img className='img-fluid' variant="top" src="https://images.unsplash.com/photo-1619019187211-adf2f6119afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </div>
                            <Card.Body>
                                <Card.Title>Chicken Tenders</Card.Title>
                                <Card.Text className='text-justify'>
                                    Chicken tenders are a popular dish made by breaded and deep-fried strips of chicken. They are crispy on the outside and juicy on the inside, perfect for dipping.
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
                        <div className="card mb-3" style={{maxWidth: '540px', height: '190px', overflow: 'hidden'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://plus.unsplash.com/premium_photo-1677651865609-a806ad72a7fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Pimento Cheese Potato Skins</h5>
                                        <p className="card-text mb-1">If there's anything better than a loaded baked potato, it's a twice-baked potato stuffed with creamy pimento cheese and crispy bacon bits. Heavenly!</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mb-3" style={{maxWidth: '540px', height: '190px', overflow: 'hidden'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Zesty Mediterranean Quinoa Salad</h5>
                                        <p className="card-text mb-1">Zesty Mediterranean quinoa salad is a refreshing dish made with quinoa, cucumbers, cherry tomatoes, feta cheese, and a tangy dressing. It's perfect for summer picnics.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mb-3" style={{maxWidth: '540px', height: '190px', overflow: 'hidden'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1592691264539-3e7fbbe3f94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Spicy Garlic Shrimp</h5>
                                        <p className="card-text mb-1">Spicy garlic shrimp is a delicious seafood dish made by sautéing fresh shrimp in garlic and chili flakes. It's packed with flavor and perfect served with rice.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mb-3" style={{maxWidth: '540px', height: '190px', overflow: 'hidden'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Spicy Honey Chicken</h5>
                                        <p className="card-text mb-1">it is a flavorful and tangy dish made with succulent chicken pieces glazed in a mixture of honey, soy sauce, and hot sauce. It's a perfect balance of sweet and spicy.</p>
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