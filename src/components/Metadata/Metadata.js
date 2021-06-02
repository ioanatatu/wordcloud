import css from './Metadata.module.css';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Metadata component which offers additional information about the clicked word
 *
 * @param {string} label The topic that has been clicked in the word cloud.
 * @param {number} volume Total number of mentions.
 * @param {object} sentiment Object with sentiment breakdown.
 */
const Metadata = ({ label, volume, sentiment }) => {
   // destructuring does not pass tests
   // const { positive, negative, neutral } = sentiment;

   let positive, negative, neutral;

   if (sentiment) {
      positive = sentiment.positive || 0;
      negative = sentiment.negative || 0;
      neutral = sentiment.neutral || 0;
   }

   return (
      <div className={css.general}>
         <h2 title='topic'>{label}</h2>
         <h3 title='mentions'>Total Mentions: {volume}</h3>
         <ul className={css.detailedMentions}>
            <li title='positive'>Positive: {positive}</li>
            <li title='neutral'>Neutral: {neutral}</li>
            <li title='negative'>Negative: {negative}</li>
         </ul>
      </div>
   );
};

Metadata.propTypes = {
   label: PropTypes.string.isRequired,
   volume: PropTypes.number.isRequired,
   sentiment: PropTypes.shape({
      positive: PropTypes.number,
      negative: PropTypes.number,
      neutral: PropTypes.number,
   }),
};

export default Metadata;
