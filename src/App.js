import { useState } from 'react';
import './index.css'

function App() {
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
  ];
  
  let [currentQuestion, setCurrentQuestion] = useState(0)
  let [showScore, setShowScore] = useState(false)
  let [score,setScore]=useState(0)

  let handleButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      let newScore = score + 1;
      setScore(newScore)
    }
    let nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }
  
  return (
    <div className="quiz-box">
    <div className="quiz-contiainer">
        {showScore ? (<div className='score'>You scored {score} out of {questions.length}</div>) : 
          <>
      <div className="question-box">
        <div className='question-no'>Question {currentQuestion+1}<span>/{questions.length}</span></div>
          <div className='thequestion'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className="answer">
          {questions[currentQuestion].answerOptions.map((answerOption,key) => (
            <button key={key} onClick={() => handleButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
            </div>
            </>
        }
    </div>
    </div>
  );
}

export default App;
