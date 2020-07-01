import React from 'react';
import RoomContext from './RoomContext.js';

import Card from 'react-bootstrap/Card';

const headerCard = (idx, subject) => (
    <Card
        bg="light"
        text="dark"
        className="my-3 text-center"
    >
        <Card.Header className="h4">Question {idx+1}</Card.Header>
        <Card.Body>
            <Card.Text className="h2">{subject}</Card.Text>
        </Card.Body>
    </Card>
);

const textCard = (idx, subject, text) => (
    <Card
        bg="light"
        text="dark"
        className="my-3 text-center"
    >
        <Card.Header className="h4">Question {idx+1}: {subject}</Card.Header>
        <Card.Body>
            <Card.Text className="lead">{text}</Card.Text>
        </Card.Body>
    </Card>
)

const QuestionDisplay = () => (
    <RoomContext.Consumer>
        {({ roomState: { questions, showing: [idx, reveal] } }) => (
            idx == null ? null :
                reveal ?
                    textCard(idx, questions[idx].subject, questions[idx].text) :
                    headerCard(idx, questions[idx].subject)
        )}
    </RoomContext.Consumer>
)

export default QuestionDisplay;
