import React from 'react';
import RoomContext from './RoomContext.js';

import Card from 'react-bootstrap/Card';

const headerCard = (idx, subject) => (
    <Card
        bg="light"
        text="dark"
        className="my-3 text-center"
    >
        <Card.Header><h4>Question {idx+1}</h4></Card.Header>
        <Card.Body>
            <Card.Text><h1>{subject}</h1></Card.Text>
        </Card.Body>
    </Card>
);

const pageCard = (idx, subject, page) => (
    <Card
        bg="light"
        text="dark"
        className="my-3 text-center"
    >
        <Card.Header><h4>Question {idx+1}: {subject}</h4></Card.Header>
        <Card.Body>
            <Card.Text>{page}</Card.Text>
        </Card.Body>
    </Card>
)

const QuestionDisplay = () => (
    <RoomContext.Consumer>
        {({ roomState: { questions, showing: [idx, page] } }) => (
            idx == null ? null :
                page == null ?
                    headerCard(idx, questions[idx].subject) :
                    pageCard(idx, questions[idx].subject, questions[idx].pages[page])
        )}
    </RoomContext.Consumer>
)

export default QuestionDisplay;
