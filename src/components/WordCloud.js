// import React from 'react';
// import ReactWordcloud from 'react-wordcloud';
// import { select } from 'd3-selection';

// const options = {
//    enableTooltip: false,
//    deterministic: false,
//    fontFamily: 'Roboto',
//    fontSizes: [15, 40],
//    padding: 2,
//    rotations: 1,
//    rotationAngles: [0],
// };

// const WordCloud = ({ words, handleClickedWord }) => {
//    const callbacks = {
//       getWordColor: (word) =>
//          word.value > 60 ? '#05c46b' : word.value < 40 ? '#f53b57' : '#919eaa',
//       onWordClick: getCallback('onWordClick'),
//       onWordMouseOut: getCallback('onWordMouseOut'),
//       onWordMouseOver: getCallback('onWordMouseOver'),
//    };

//    function getCallback(callback) {
//       return function (word, event) {
//          const isActive = callback !== 'onWordMouseOut';
//          const element = event.target;
//          const text = select(element);

//          text
//             .on('click', () => {
//                if (isActive) {
//                   handleClickedWord(word.id);
//                }
//             })
//             .attr('opacity', isActive ? '0.7' : '1');
//       };
//    }
//    return (
//       <div style={{ height: 400, width: 600 }}>
//          <ReactWordcloud
//             options={options}
//             words={words}
//             callbacks={callbacks}
//          />
//       </div>
//    );
// };

import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/wordcloud.js')(Highcharts);

const WordCloud = ({ words, handleClickedWord }) => {
   const refContainer = useRef('');

   const func = (e) => {
      console.log('point', e.point.color);
      handleClickedWord(e.point.id);
   };

   const options = {
      series: [
         {
            colors: ['#28B463', '#27AE60'],
            type: 'wordcloud',
            data: words,
            // data: [
            //    {
            //       id: 'shdsjdhj',
            //       name: 'sdfdf',
            //       weight: 1,
            //    },
            //    {
            //       id: '54545',
            //       name: '<span style="color:red;">cantine am berghain</span>',
            //       weight: 0.5,
            //    },
            // ], //passing the data from props
            name: 'sentiment score',
            color: '#186A3B',
         },
      ],
      title: {
         text: '',
      },
      chart: {
         height: 330,
         margin: 15,
      },
      plotOptions: {
         wordcloud: {
            point: {
               events: {
                  // mouseOver: func,
                  click: func,
               },
               color: '#186A3B',
            },
         },
      },
   };

   return (
      <div>
         <HighchartsReact
            highcharts={Highcharts}
            constructorType={'chart'}
            options={options}
            ref={refContainer}
            // callback={(e) => console.log(e)}
         />
      </div>
   );
};

export default WordCloud;
