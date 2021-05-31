// style
import css from './DataCard.module.css';

// react
import React from 'react';

// components
import Title from '../../components/Title';
import WordCloud from '../../components/WordCloud';
import Metadata from '../../components/Metadata/Metadata';

const DataCard = ({ title, data }) => {
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
            <WordCloud words={mappedData} />
         </main>
         {/* <aside>
            {data.map((topic) => {
               return (
                  <Metadata
                     key={topic.id}
                     topic={topic.label}
                     total={topic.volume}
                     sentiment={topic.sentiment}
                  />
               );
            })}
         </aside> */}
      </div>
   );
};

export default DataCard;
