import React from 'react';
import RoomContext from './RoomContext.js';

import Card from 'react-bootstrap/Card';

const QuestionDisplay = () => (
    <RoomContext.Consumer>
        {({ roomState: { questions, showing } }) => (
            showing == null ? null :
                <Card
                    bg="light"
                    text="dark"
                    className="my-3 text-center"
                >
                    <Card.Header>Question {showing+1}</Card.Header>
                    <Card.Body>
                        <Card.Text>{questions[showing].text}</Card.Text>
                    </Card.Body>
                </Card>
        )}
    </RoomContext.Consumer>
)

export default QuestionDisplay;
