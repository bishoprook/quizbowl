import React, { useRef } from 'react';

import { showQuestion, addQuestion } from '../../actions/actions.js';

import RoomContext from './RoomContext.js';
import ActionButton from './ActionButton.js';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const QuestionTable = ({ getPasscode }) => {
    const newQuestionRef = useRef(null);

    return <RoomContext.Consumer>
        {({ sendAction, room, roomState: { questions = [], showing } }) => {

        const submitNew = () => {
            const text = newQuestionRef.current.value;
            if (text !== '') {
                sendAction(addQuestion(room, getPasscode(), text));
            }
            newQuestionRef.current.value = '';
        };
        
        return <Table size="sm" striped bordered hover>
                <tbody>
                    <tr>
                        <th>Index</th>
                        <th>Question text</th>
                        <th></th>
                    </tr>
                    {questions.map((question, idx) => (
                        <tr key={`question-row-${idx}`}>
                            <td>{idx + 1}</td>
                            <td>{question.text}</td>
                            <td>
                                <ActionButton
                                    size="sm"
                                    action={room => showQuestion(room, getPasscode(), idx)}
                                >
                                    {'Show'}
                                </ActionButton>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td>
                            <Form onSubmit={submitNew}>
                                <Form.Control ref={newQuestionRef} type="text" />
                            </Form>
                        </td>
                        <td>
                            <Button
                                size="sm"
                                onClick={submitNew}
                            >
                                {'Add question'}
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>;
        }}
    </RoomContext.Consumer>
};

export default QuestionTable;