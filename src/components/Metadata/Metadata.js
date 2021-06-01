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
const Metadata = ({
   label,
   volume,
   sentiment: { positive = 0, negative = 0, neutral = 0 },
}) => (
   <div className={css.general}>
      <h2>{label}</h2>
      <h3>Total Mentions: {volume}</h3>
      <ul className={css.detailedMentions}>
         <li>Positive: {positive}</li>
         <li>Neutral: {neutral}</li>
         <li>Negative: {negative}</li>
      </ul>
   </div>
);

Metadata.propTypes = {
   label: PropTypes.string,
   volume: PropTypes.number,
   sentiment: PropTypes.object,
};

export default Metadata;
