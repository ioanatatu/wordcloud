// style
import css from './DataCard.module.css';

// react
import React, { useState, useEffect, useLayoutEffect } from 'react';

// components
import Title from '../../components/Title';
import WordCloud from '../../components/WordCloud';
import Metadata from '../../components/Metadata/Metadata';

const DataCard = ({ title, data }) => {
   const [currentWord, setCurrentWord] = useState(null);
   const [currentWordMetadata, setCurrentWordMetadata] = useState(null);

   useLayoutEffect(() => {
      setCurrentWordMetadata(data[0]);
   }, [data]);

   useEffect(() => {
      const wordMetadata = data.find((word) => currentWord === word.id);

      setCurrentWordMetadata(wordMetadata);
   }, [currentWord, data]);

   const currentWordClicked = (word) => {
      setCurrentWord(word);
   };

   const mappedData = data.map((topic) => {
      const mappedTopic = {};
      mappedTopic.id = topic.id;
      mappedTopic.text = topic.label;
      mappedTopic.value = topic.sentimentScore;

      return mappedTopic;
   });

   return (
      <div className={css.container}>
         <Title text={title} />
         <main>
            <WordCloud
               words={mappedData}
               currentWordClicked={currentWordClicked}
            />
         </main>
         <aside>
            {currentWordMetadata && (
               <Metadata
                  topic={currentWordMetadata.label}
                  total={currentWordMetadata.volume}
                  sentiment={currentWordMetadata.sentiment}
               />
            )}
         </aside>
      </div>
   );
};

export default DataCard;
