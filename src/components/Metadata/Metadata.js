// style
import css from './Metadata.module.css';
import React from 'react';

const Metadata = ({ id, topic, total, sentiment }) => (
   <div className={css.general}>
      <h2>{topic}</h2>
      <h3>Total Mentions: {total}</h3>
      <ul className={css.detailedMentions}>
         <li>Positive: {sentiment.positive || 0}</li>
         <li>Neutral: {sentiment.neutral || 0}</li>
         <li>Negative: {sentiment.negative || 0}</li>
      </ul>
   </div>
);

export default Metadata;
