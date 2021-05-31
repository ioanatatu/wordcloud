import React from 'react';
import ReactWordcloud from 'react-wordcloud';

// import 'd3-transition';
import { select } from 'd3-selection';

const options = {
   enableTooltip: false,
   deterministic: false,
   fontFamily: 'DM Sans',
   fontSizes: [15, 25, 35, 45, 50, 70],
   fontStyle: 'normal',
   fontWeight: 'normal',
   padding: 1,
   rotations: 1,
   rotationAngles: [0, -90],
   transitionDuration: 100,
};

const WordCloud = ({ words, currentWordClicked }) => {
   const callbacks = {
      getWordColor: (word) =>
         word.value > 60 ? '#05c46b' : word.value < 40 ? '#f53b57' : '#808e9b',
      onWordClick: getCallback('onWordClick'),
      onWordMouseOut: getCallback('onWordMouseOut'),
      onWordMouseOver: getCallback('onWordMouseOver'),
   };
   function getCallback(callback) {
      return function (word, event) {
         const isActive = callback !== 'onWordMouseOut';
         const element = event.target;
         const text = select(element);

         text
            .on('click', () => {
               if (isActive) {
                  currentWordClicked(word.id);
               }
            })
            .attr('font-weight', isActive ? 'bold' : 'normal');
      };
   }

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
