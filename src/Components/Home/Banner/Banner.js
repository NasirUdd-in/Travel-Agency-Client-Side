import React from 'react';
import { Button, Col, Row } from "react-bootstrap";
import "./Banner.css";


const Banner = () => {
    return (
        <div className="containers">
            {<Row className="header-all">
                <Col xs={12} lg={12}>
                    <div className="home-description p-4">
                        <h1 className="title">
                            “The journey of a thousand miles begins with a single step”
                        </h1>
                        <p className="p-title">
                            “Jobs fill your pockets, adventures fill your soul”
                        </p>
                        <Button className="btn-visit p-2">Explore Places</Button>
                    </div>
                </Col>


            </Row>}

        </div>
    );
};

export default Banner;
