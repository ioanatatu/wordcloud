import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import 'd3-transition';
import { select } from 'd3-selection';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const options = {
   enableTooltip: false,
   deterministic: false,
   fontFamily: 'DM Sans',
   fontSizes: [10, 20, 30, 40, 50, 60],
   fontStyle: 'normal',
   fontWeight: 'normal',
   padding: 1,
   rotations: 1,
   rotationAngles: [0, -90],
   scale: 'sqrt',
   // spiral: 'archimedean',
   transitionDuration: 100,
};
function getCallback(callback) {
   return function (word, event) {
      const isActive = callback !== 'onWordMouseOut';
      const element = event.target;
      const text = select(element);

      text
         .on('click', () => {
            if (isActive) {
               console.log('text', word.id);
            }
         })
         .transition()
         .attr('background', 'white')
         .attr('font-weight', isActive ? 'bold' : 'normal');
   };
}
const callbacks = {
   getWordColor: (word) =>
      word.value > 60 ? '#05c46b' : word.value < 40 ? '#f53b57' : '#808e9b',
   onWordClick: getCallback('onWordClick'),
};

const WordCloud = ({ words }) => {
   return (
      <div style={{ height: 400, width: 600 }}>
         <ReactWordcloud
            options={options}
            words={words}
            callbacks={callbacks}
         />
      </div>
   );
};

export default WordCloud;
