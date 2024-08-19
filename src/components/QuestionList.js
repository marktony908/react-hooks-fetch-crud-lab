import React from 'react';

function QuestionList({ questions, deleteQuestion, updateQuestion }) {
  return (
    <ul>
      {questions.map(question => (
        <li key={question.id}>
          {question.prompt}
          <button onClick={() => deleteQuestion(question.id)}>Delete</button>
          <select
            value={question.correctIndex}
            onChange={(e) =>
              updateQuestion(question.id, { correctIndex: parseInt(e.target.value, 10) })
            }
          >
            {question.answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer}
              </option>
            ))}
          </select>
        </li>
      ))}
    </ul>
  );
}

export default QuestionList;
