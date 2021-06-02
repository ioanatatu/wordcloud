import React from 'react';
import PropTypes from 'prop-types';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import wordCloud from 'highcharts/modules/wordcloud.js';

/**
 * WordCloud component creates configuration for the wordcloud and maps
 * the words received as props on the highcharts component
 *
 * @param {array} words Words to be mapped.
 * @param {function} handleClickedWord Function that is triggered when word
 * is clicked and sends word id to parent component.
 */
const WordCloud = ({ words, handleClickedWord }) => {
   wordCloud(Highcharts);

   const handleWordClick = (e) => {
      handleClickedWord(e.point.id);
   };

   const options = {
      series: [
         {
            type: 'wordcloud',
            data: words,
            name: 'sentiment score',
         },
      ],
      title: {
         text: '',
      },
      chart: {
         height: 330,
         margin: 15,
      },
      tooltip: {
         enabled: false,
      },
      plotOptions: {
         wordcloud: {
            point: {
               events: {
                  click: handleWordClick,
               },
            },
            rotation: {
               orientations: 1,
            },
         },
         series: {
            allowPointSelect: true,
         },
      },
      credits: {
         enabled: false,
      },
   };

   return (
      <div>
         <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
   );
};

WordCloud.propTypes = {
   words: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         weight: PropTypes.number.isRequired,
         color: PropTypes.string.isRequired,
      })
   ),
   handleClickedWord: PropTypes.func.isRequired,
};

export default WordCloud;
