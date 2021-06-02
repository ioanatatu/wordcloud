import css from './DataCard.module.css';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import WordCloud from '../../components/WordCloud/WordCloud';
import Metadata from '../../components/Metadata/Metadata';

// helper functions
import {
   findMinMaxByProperty,
   mapWordMetadata,
   assignSize,
   assignColor,
} from '../../helpers/helperFunctions';

/**
 * DataCard component receives data and maps it for WordCloud and Metadata props
 *
 * @param {string} title The title given to the DataCard.
 * @param {array} data Array of topics.
 */
const DataCard = ({ title, data }) => {
   const [currentWord, setCurrentWord] = useState({});
   const [mappedData, setMappedData] = useState([]);

   useEffect(() => {
      /*
       * find topic with highest sentiment score and
       * display its metadata as default
       */
      const wordMaxSentimentScore = data.find(
         (word) =>
            findMinMaxByProperty(data, 'sentimentScore', 'max') === word.id
      );
      setCurrentWord(mapWordMetadata(wordMaxSentimentScore));

      // map incoming data on worldcloud data model in state
      const mappedData = data.map((topic) => {
         return {
            id: topic.id,
            name: topic.label,
            weight: assignSize(topic.volume),
            color: assignColor(topic.sentimentScore),
         };
      });
      setMappedData(mappedData);
   }, [data]);

   const handleClickedWord = (id) => {
      const currentWord = data.find((word) => id === word.id);
      setCurrentWord(mapWordMetadata(currentWord));
   };

   return (
      <div className={css.card}>
         <h1 className={css.title}>{title}</h1>
         <div className={css.wrapper}>
            <WordCloud
               words={mappedData}
               handleClickedWord={handleClickedWord}
            />
            {currentWord && currentWord.sentiment && (
               <Metadata
                  label={currentWord.label}
                  volume={currentWord.volume}
                  sentiment={currentWord.sentiment}
               />
            )}
         </div>
      </div>
   );
};

DataCard.propTypes = {
   title: PropTypes.string,
   data: PropTypes.array,
};

export default DataCard;

// function findMinMaxByProperty(arr, property, m) {
//    // if m !===min throw erre
//    let word = { id: arr[0].id };
//    word[property] = arr[0][property];

//    if (m === 'min') {
//       for (let i = 1; i < arr.length; i++) {
//          if (arr[i][property] < word[property]) {
//             word.id = arr[i].id;
//             word[property] = arr[i][property];
//          }
//       }
//    } else if (m === 'max') {
//       for (let i = 1; i < arr.length; i++) {
//          if (arr[i][property] > word[property]) {
//             word.id = arr[i].id;
//             word[property] = arr[i][property];
//          }
//       }
//    }
//    return word.id;
// }
