import React from 'react'
import './body.css';
import Card from './card'
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap';

export default function Body() {
    return (
        <div className="body" >
            <div className="bodyleft" >
                
            </div>
            <div className="bodyright" >
                <Row style={{padding:"10px"}}>
                    <Col>
                        <Card/>
                    </Col>
                    <Col>
                        <Card/>
                    </Col>
                    <Col>
                        <Card/>
                    </Col>
                </Row>

                <Row style={{padding:"10px"}} >
                    <Col>
                        <Card/>
                    </Col>
                    <Col>
                        <Card/>
                    </Col>
                    <Col>
                        <Card/>
                    </Col>
                </Row>

                <Row style={{padding:"10px"}} >
                    <Col>
                        <Card/>
                    </Col>
                    <Col>
                        <Card/>
                    </Col>
                    <Col>
                        <Card/>
                    </Col>
                </Row>

                <Row style={{padding:"10px"}} >
                    <Col>
                        <Card/>
                    </Col>
                    <Col>
                        <Card/>
                    </Col>
                    <Col>
                        <Card/>
                    </Col>
                </Row>
               
            </div>
        </div>
    )
}
