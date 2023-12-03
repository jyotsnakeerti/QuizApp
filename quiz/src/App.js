import './App.css';
import { QuizData } from './components/QuizData';
import {useState} from 'react';
import Result from './components/Result';

function App() {

  const[ques,setques]=useState(0);
  const[score,setScore] = useState(0);
  const [selectOpt,setSelectOpt] = useState(0);
  const [showResult, setResult]=useState(false);

  const handleNext=()=>{
    updateScore();
    if(ques<QuizData.length-1){
      setques(ques+1);
      setSelectOpt(0);
    }
    else{
      setResult(true);
    } 
  }

  const updateScore=()=>{
    if(selectOpt===QuizData[ques].answer){
      setScore(score+20);
    }
  }

  const playAgain=()=>{
    setResult(false);
    setques(0);
    setScore(0);
    setSelectOpt(0);

  }

  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <Result score={score} totalScore={QuizData.length} playAgain={playAgain}/>
        ) : (
        <>
        <span className='number'>Question {ques+1} of {QuizData.length}</span>
        <div className="question">
          <span id="question-number">{ques+1}. </span>
          <span id="question-txt">{QuizData[ques].question}</span>
        </div>
        <div className="option-container">
          {QuizData[ques].options.map((option,index)=>{
            return (
              <button 
                key={index}
                disabled={selectOpt}
                className={`option-btn ${
                  selectOpt === index+1?"checked":null
                }`} 
                onClick={()=>setSelectOpt(index+1)}> 
                {option}
              </button>
            )
          })}
        </div>
        <input disabled={!selectOpt} type="button" value="Next" id="next-button" onClick={handleNext}/>
      </>
  )}
    </div>
    </div>
  );
}

export default App;
