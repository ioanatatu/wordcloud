// style
import css from './Metadata.module.css';
import React from 'react';

const Metadata = ({ currentWord }) => {
   // useEffect(() => {
   //    console.log('###', currentWord);
   // }, [currentWord]);

   return (
      <div className={css.general}>
         {currentWord && currentWord.sentiment && (
            <>
               <h2>{currentWord.label}</h2>
               <h3>Total Mentions: {currentWord.volume}</h3>
               <ul className={css.detailedMentions}>
                  <li>Positive: {currentWord.sentiment.positive || 0}</li>
                  <li>Neutral: {currentWord.sentiment.neutral || 0}</li>
                  <li>Negative: {currentWord.sentiment.negative || 0}</li>
               </ul>
            </>
         )}
      </div>
   );
};

export default Metadata;
