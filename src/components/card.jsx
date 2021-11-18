import React from 'react'
import './card.css'
import cllg from '../assests/college.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function card() {
    return (
        <div>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={cllg} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <div className="cardtext" >
                        <Card.Text>
                            <div className="text" >
                                <div style={{color:"#888888"}} >
                                    Average Yearly Fees
                                </div>
                                <div style={{color:"#525252"}} >
                                    ₹ 8K - 72k
                                </div>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div className="text" >
                                <div style={{color:"#888888"}} >
                                    Available Courses
                                </div>
                                <div style={{color:"#525252"}} >
                                    30 courses
                                </div>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div className="text" >
                                <div style={{color:"#888888"}} >
                                    rank
                                </div>
                                <div style={{color:"#525252"}} >
                                    85
                                </div>
                            </div>
                        </Card.Text>
                    </div>
                    <div className="cardbutton" >
                        <Button variant="outline-primary" size="sm" >Brochure</Button>
                        <Button variant="primary" size="sm" >Apply</Button>
                    </div>
                </Card.Body>
            </Card>
            
        </div>
    )
}
