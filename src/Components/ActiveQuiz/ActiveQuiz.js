import React from 'react';
import classes from './ActiveQuiz.module.css';
import Answerslist from './Answerslist/Answerslist';

const ActiveQuiz = (props) => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <stong>1.</stong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
       <Answerslist 
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
       />
    </div>
);
export default ActiveQuiz