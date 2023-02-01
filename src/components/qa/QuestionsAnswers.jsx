/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import '../../styles/questionsAnswers/_QA.scss';
import AddQuestions from './AddQuestion';

export default function QuestionsAnswers() {
  const [productId, setId] = useState('37316');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8081/questions', { params: { productId } }).then(({ data }) => {
      const result = data.results;
      setLoading(false);
      // reviews will be an array of objects
      setQuestions(result);
    });
  }, []);

  if (!loading) {
    return (
      <section>
        <div className="question-answers">
          Questions and Answers
        </div>
        {/* <Search questionList={questions} /> */}
        {
        !loading
          ? <QuestionList product_id={productId} productIdData={questions} />
          : null
         }
      </section>
    );
  }
}
