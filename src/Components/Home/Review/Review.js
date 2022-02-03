import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Review.css';
const Review = () => {
    return (
        <div className="container section1">
            <Row>
                <Col>
                    <img src="https://i.ibb.co/TBV0SvK/client-review-1.png" alt="" />
                </Col>
                <Col>
                    <div className='mt-5'>
                        <p className=" text-primary">Travel Reviews</p>
                        <h4>Russia</h4>
                        <p>The largest country in the world, Russia offers a broad array of travel experiences, from treks up the slopes of glacier-capped mountains to strolls along the shoreline of Earth’s oldest lake. Historical sites and cultural activities in the country’s great cities abound as well. Whether you’re exploring the grounds of Moscow’s Kremlin or wandering through the steppes of Mongolia, a visit to Russia is an adventure not soon forgotten. These top tourists attractions in Russia can inspire a great Russian itinerary for a memorable trip.</p>
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default Review;