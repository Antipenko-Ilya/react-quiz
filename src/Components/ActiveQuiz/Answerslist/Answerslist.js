import React from 'react';
import classes from './Answerslist.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const Answerslist = (props) => (
    <ul className={classes.Answerslist}>
        { props.answers.map((answer, index) => {
            return(
                <AnswerItem 
                    answer={answer}
                    key={index}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[answer.id] : null}
                />
            )
        }) }
    </ul>
);
export default Answerslist