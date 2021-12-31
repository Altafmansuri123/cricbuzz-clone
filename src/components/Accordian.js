import React from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'

const Accordian = () => {
    return (
        <div>
            <Accordion>
                <Card style={{ margin: 10 }} key={1}>
                    <Card.Header style={{ display: "flex" }}>
                        <span
                            // onClick={() => ModelShow(note)}
                            style={{
                                color: "black",
                                textDecoration: "none",
                                flex: 1,
                                cursor: "pointer",
                                alignSelf: "center",
                                fontSize: 18,
                            }}
                        >
                            <Accordion.Toggle
                                as={Card.Text}
                                variant="link"
                                eventKey="0"
                            >
                                {"hello"}
                            </Accordion.Toggle>
                        </span>

                        <div>
                            <Button href={`/note/${1}`}>Edit</Button>
                            <Button
                                variant="danger"
                                className="mx-2"
                                onClick={() => deleteHandler(1)}
                            >
                                Delete
                            </Button>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <h4>
                                <Badge variant="success">
                                    Category - {1}
                                </Badge>
                            </h4>
                            <blockquote className="blockquote mb-0">
                                {"this is my content"}
                                <footer className="blockquote-footer">
                                    Created on{" "}

                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div>
    )
}

export default Accordian
