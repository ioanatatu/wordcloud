import './App.css';

// test wordcloud
import React from 'react';
import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';

import 'd3-transition';
import { select } from 'd3-selection';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const words = [
   {
      text: 'told',
      value: 64,
   },
   {
      text: 'mistake',
      value: 11,
   },
   {
      text: 'thought',
      value: 16,
   },
   {
      text: 'bad',
      value: 17,
   },
   {
      text: 'correct',
      value: 10,
   },
   {
      text: 'day',
      value: 54,
   },
   {
      text: 'prescription',
      value: 12,
   },
   {
      text: 'time',
      value: 77,
   },
   {
      text: 'thing',
      value: 45,
   },
   {
      text: 'left',
      value: 19,
   },
   {
      text: 'pay',
      value: 13,
   },
   {
      text: 'people',
      value: 32,
   },
   {
      text: 'month',
      value: 22,
   },
   {
      text: 'again',
      value: 35,
   },
   {
      text: 'review',
      value: 24,
   },
   {
      text: 'call',
      value: 38,
   },
   {
      text: 'doctor',
      value: 70,
   },
   {
      text: 'asked',
      value: 26,
   },
   {
      text: 'finally',
      value: 14,
   },
   {
      text: 'insurance',
      value: 29,
   },
   {
      text: 'week',
      value: 41,
   },
   {
      text: 'called',
      value: 49,
   },
   {
      text: 'problem',
      value: 20,
   },
   {
      text: 'going',
      value: 59,
   },
   {
      text: 'help',
      value: 49,
   },
   {
      text: 'felt',
      value: 45,
   },
   {
      text: 'discomfort',
      value: 11,
   },
   {
      text: 'lower',
      value: 22,
   },
   {
      text: 'severe',
      value: 12,
   },
   {
      text: 'free',
      value: 38,
   },
   {
      text: 'better',
      value: 54,
   },
   {
      text: 'muscle',
      value: 14,
   },
   {
      text: 'neck',
      value: 41,
   },
   {
      text: 'root',
      value: 24,
   },
   {
      text: 'adjustment',
      value: 16,
   },
   {
      text: 'therapy',
      value: 29,
   },
   {
      text: 'injury',
      value: 20,
   },
   {
      text: 'excruciating',
      value: 10,
   },
   {
      text: 'chronic',
      value: 13,
   },
   {
      text: 'chiropractor',
      value: 35,
   },
   {
      text: 'treatment',
      value: 59,
   },
   {
      text: 'tooth',
      value: 32,
   },
   {
      text: 'chiropractic',
      value: 17,
   },
   {
      text: 'dr',
      value: 77,
   },
   {
      text: 'relief',
      value: 19,
   },
   {
      text: 'shoulder',
      value: 26,
   },
   {
      text: 'nurse',
      value: 17,
   },
   {
      text: 'room',
      value: 22,
   },
   {
      text: 'hour',
      value: 35,
   },
   {
      text: 'wait',
      value: 38,
   },
   {
      text: 'hospital',
      value: 11,
   },
   {
      text: 'eye',
      value: 13,
   },
   {
      text: 'test',
      value: 10,
   },
   {
      text: 'appointment',
      value: 49,
   },
   {
      text: 'medical',
      value: 19,
   },
   {
      text: 'question',
      value: 20,
   },
   {
      text: 'office',
      value: 64,
   },
   {
      text: 'care',
      value: 54,
   },
   {
      text: 'minute',
      value: 29,
   },
   {
      text: 'waiting',
      value: 16,
   },
   {
      text: 'patient',
      value: 59,
   },
   {
      text: 'health',
      value: 49,
   },
   {
      text: 'alternative',
      value: 24,
   },
   {
      text: 'holistic',
      value: 19,
   },
   {
      text: 'traditional',
      value: 20,
   },
   {
      text: 'symptom',
      value: 29,
   },
   {
      text: 'internal',
      value: 17,
   },
   {
      text: 'prescribed',
      value: 26,
   },
   {
      text: 'acupuncturist',
      value: 16,
   },
   {
      text: 'pain',
      value: 64,
   },
   {
      text: 'integrative',
      value: 10,
   },
   {
      text: 'herb',
      value: 13,
   },
   {
      text: 'sport',
      value: 22,
   },
   {
      text: 'physician',
      value: 41,
   },
   {
      text: 'herbal',
      value: 11,
   },
   {
      text: 'eastern',
      value: 12,
   },
   {
      text: 'chinese',
      value: 32,
   },
   {
      text: 'acupuncture',
      value: 45,
   },
   {
      text: 'prescribe',
      value: 14,
   },
   {
      text: 'medication',
      value: 38,
   },
   {
      text: 'western',
      value: 35,
   },
   {
      text: 'sure',
      value: 38,
   },
   {
      text: 'work',
      value: 64,
   },
   {
      text: 'smile',
      value: 17,
   },
   {
      text: 'teeth',
      value: 26,
   },
   {
      text: 'pair',
      value: 11,
   },
   {
      text: 'wanted',
      value: 20,
   },
   {
      text: 'frame',
      value: 13,
   },
   {
      text: 'lasik',
      value: 10,
   },
   {
      text: 'amazing',
      value: 41,
   },
   {
      text: 'fit',
      value: 14,
   },
   {
      text: 'happy',
      value: 22,
   },
   {
      text: 'feel',
      value: 49,
   },
   {
      text: 'glasse',
      value: 19,
   },
   {
      text: 'vision',
      value: 12,
   },
   {
      text: 'pressure',
      value: 16,
   },
   {
      text: 'find',
      value: 29,
   },
   {
      text: 'experience',
      value: 59,
   },
   {
      text: 'year',
      value: 70,
   },
];
const options = {
   colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
   enableTooltip: true,
   deterministic: false,
   fontFamily: 'impact',
   fontSizes: [5, 60],
   fontStyle: 'normal',
   fontWeight: 'normal',
   padding: 1,
   rotations: 3,
   rotationAngles: [0, 90],
   scale: 'sqrt',
   spiral: 'archimedean',
   transitionDuration: 1000,
};
function getCallback(callback) {
   return function (word, event) {
      const isActive = callback !== 'onWordMouseOut';
      const element = event.target;
      const text = select(element);
      text
         .on('click', () => {
            if (isActive) {
               window.open(`https://duckduckgo.com/?q=${word.text}`, '_blank');
            }
         })
         .transition()
         .attr('background', 'white')
         .attr('font-size', isActive ? '300%' : '100%')
         .attr('text-decoration', isActive ? 'underline' : 'none');
   };
}
const callbacks = {
   getWordColor: (word) => (word.value > 50 ? 'orange' : 'purple'),
   getWordTooltip: (word) =>
      `The word "${word.text}" appears ${word.value} times.`,
   onWordClick: getCallback('onWordClick'),
   onWordMouseOut: getCallback('onWordMouseOut'),
   onWordMouseOver: getCallback('onWordMouseOver'),
};

function App() {
   console.log('react app cleanup');
   return (
      <div className='App'>
         <ReactWordcloud
            options={options}
            words={words}
            callbacks={callbacks}
         />
      </div>
   );
}

export default App;
