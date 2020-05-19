import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: 'Любишь Соню?',
                rightAnswerId: 4,
                answers: [
                    {text: 'Еще как!', id: 1},
                    {text: 'Естественно', id: 2},
                    {text: 'Очень сильно', id: 3},
                    {text: 'Как смеешь такое спрашивать смерд?', id: 4}
                ]
            },
            {
                id: 2,
                question: 'Не врешь?',
                rightAnswerId: 4,
                answers: [
                    {text: 'Нет!', id: 1},
                    {text: 'Естественно', id: 2},
                    {text: '<3', id: 3},
                    {text: 'АХУЕЛ?', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key]==='success'){
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];

        if(question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            });

            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    console.log('finished');
                    
                }
                else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout);
            }, 1000);
            
        }
        else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }        
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }


    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        );
    }
}
export default Quiz