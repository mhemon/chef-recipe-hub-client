import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import './Blog.css'
import Pdf from "react-to-pdf";


const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='container'>
            {/* Q & A section */}
            <section className='text-center mt-2'>
                <h3 className='mb-3'>Generate PDF of FAQ with One Click:</h3>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-warning' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>

            </section>
            <section className='mx-auto responsive-width py-4'>
                <Accordion defaultActiveKey={['0']} alwaysOpen ref={ref}>
                    {/* question no 1 */}
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tell us the differences between uncontrolled and controlled components?</Accordion.Header>
                        <Accordion.Body>
                            <span className='fw-semibold'>Controlled components:- </span> are those that are explicitly managed and controlled by the programmers. These elements are usually tightly integrated into the overall design of the system and are often designed to work together in specific ways. Examples of resource management include libraries, frameworks, and APIs designed specifically for use in a system. <br /><br />
                            <span className='fw-semibold'>Uncontrolled components:- </span> on the other hand, uncontrolled components are those that are not directly managed by the developers of a system. These components may be external libraries, third-party APIs, or other software that is not directly under the control of the developers.
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* question no 2 */}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How to validate React props using PropTypes?</Accordion.Header>
                        <Accordion.Body>
                            PropTypes is a library in React that allows developers to declare the expected data types of the props that a component receives. This helps catch potential errors in the code by providing warnings in the console if a prop is not of the expected type.
                            <br /><br />
                            To use PropTypes, import the library and declare a propTypes object within the component. The propTypes object should have keys that correspond to the props being passed, and their values should be set to the expected data type.
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* question no 3 */}
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Tell us the difference between nodejs and express js?</Accordion.Header>
                        <Accordion.Body>
                            Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. Express.js is a web framework that is built on top of Node.js, providing a set of tools and libraries for building web applications with Node.js.
                            <br /> <br />
                            While Node.js provides the core functionality for running JavaScript on a server, Express.js adds additional features for building web applications, such as routing, middleware support, and templating engines.
                            <br /> <br />
                            In short, Node.js is a platform for running JavaScript code on a server, while Express.js is a framework built on top of Node.js that provides additional features for building web applications.
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* question no 4 */}
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                        <Accordion.Body>
                            <span className='fw-semibold'>Custom hook</span> is a function that uses built-in React hooks to create reusable logic. Custom hooks allow developers to extract and reuse stateful logic from components, enabling a more modular and flexible architecture.
                            it can be used for a variety of purposes, such as handling form input, managing network requests, or accessing and modifying the state of a component.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    );
};

export default Blog;