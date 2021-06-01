// style
import css from './DataCard.module.css';

// react
import React, { useState, useEffect } from 'react';

// components
import WordCloud from '../../components/WordCloud';
import Metadata from '../../components/Metadata/Metadata';

const DataCard = ({ title, data }) => {
   const [currentWord, setCurrentWord] = useState({});
   const [mappedData, setMappedData] = useState({});

   useEffect(() => {
      // find topic with highest sentiment score and display it as default
      const wordMaxSentimentScore = data.find(
         (word) => findWordMaxSentimentScore(data) === word.id
      );
      setCurrentWord(wordMaxSentimentScore);

      // map incoming data on worldcloud data model
      const mappedData = data.map((topic) => {
         return {
            id: topic.id,
            name: topic.label,
            weight: topic.sentimentScore,
         };
      });
      setMappedData(mappedData);
   }, [data]);

   const handleClickedWord = (id) => {
      const currentWord = data.find((word) => id === word.id);
      setCurrentWord(currentWord);
   };

   return (
      <div className={css.card}>
         <h1 className={css.title}>{title}</h1>
         <div className={css.wrapper}>
            <WordCloud
               words={mappedData}
               handleClickedWord={handleClickedWord}
            />
            {currentWord && <Metadata currentWord={currentWord} />}
         </div>
      </div>
   );
};

export default DataCard;
/**
 *
 *
 *  helper functions
 */
function findWordMaxSentimentScore(arr) {
   let word = { id: arr[0].id, score: arr[0].sentimentScore };

   for (let i = 1; i < arr.length; i++) {
      if (arr[i].sentimentScore > word.score) {
         word.id = arr[i].id;
         word.score = arr[i].sentimentScore;
      }
   }
   return word.id;
}
