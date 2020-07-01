import React, { useRef } from 'react';

import { showQuestion, addQuestion } from '../actions/actions.js';

import RoomContext from './RoomContext.js';
import ActionButton from './ActionButton.js';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const QuestionTable = ({ getPasscode }) => {
    const newSubjectRef = useRef(null);
    const newTextRef = useRef(null);

    return <RoomContext.Consumer>
        {({ sendAction, room, roomState: { questions = [] } }) => {

        const submitNew = () => {
            const subject = newSubjectRef.current.value;
            const text = newTextRef.current.value;
            if (subject !== '' && text !== '') {
                sendAction(addQuestion(room, getPasscode(), subject, text));
            }
            newSubjectRef.current.value = '';
            newTextRef.current.value = '';
        };

        return <Table size="sm" striped bordered hover>
                <tbody>
                    <tr>
                        <th>Index</th>
                        <th>Subject</th>
                        <th>Question text</th>
                        <th></th>
                    </tr>
                    {questions.map(({ subject, text }, idx) => (
                        <tr key={`question-row-${idx}`}>
                            <td>
                                <span>{idx + 1}</span>
                                <ActionButton
                                    size="sm"
                                    action={room => showQuestion(room, getPasscode(), idx, false)}
                                >
                                    {'Show header'}
                                </ActionButton>
                            </td>
                            <td>{subject}</td>
                            <td>{text}</td>
                            <td>
                                <ActionButton
                                    size="sm"
                                    action={room => showQuestion(room, getPasscode(), idx, true)}
                                >
                                    {'Show text'}
                                </ActionButton>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td>
                            <Form onSubmit={submitNew}>
                                <Form.Control ref={newSubjectRef} type="text" />
                            </Form>
                        </td>
                        <td>
                            <Form onSubmit={submitNew}>
                                <Form.Control ref={newTextRef} type="text" />
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
