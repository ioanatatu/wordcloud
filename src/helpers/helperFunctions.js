import { wordColors } from './config';

/**
 * findMinMaxByProperty
 *
 * @param {array} arr Array of objects.
 * @param {string} property Property whose min or max value should be returned.
 * @param {string} m Flag to search for min or max value of property.
 * @return {string} Id of the found word with min or max property value.
 */
export const findMinMaxByProperty = (arr, property, m) => {
   // handle invalid input
   // general
   if (!arr || !property || !m)
      throw new Error('null, undefined or empty parameters');
   // array
   if (!Array.isArray(arr) || !arr.length) throw new Error('invalid array');
   // property
   if (typeof property !== 'string' || property === '')
      throw new Error('invalid property');
   // flag
   if (typeof m !== 'string' || property === '')
      throw new Error('invalid min max flag');

   // declare starting point
   let word = { id: arr[0].id };
   word[property] = arr[0][property];

   if (m === 'min') {
      for (let i = 1; i < arr.length; i++) {
         if (arr[i][property] < word[property]) {
            word.id = arr[i].id;
            word[property] = arr[i][property];
         }
      }
   } else if (m === 'max') {
      for (let i = 1; i < arr.length; i++) {
         if (arr[i][property] > word[property]) {
            word.id = arr[i].id;
            word[property] = arr[i][property];
         }
      }
   }
   return word.id;
};
/**
 * mapWordMetadata
 *
 * @param {object} word Word data to be mapped on new data model.
 * @return {object} Word data model to be used in other components.
 */
export const mapWordMetadata = (word) => {
   // cover invalid input
   if (!word) throw new Error('null, undefined or empty object');
   if (typeof word !== 'object' || Array.isArray(word))
      throw new Error('not an object');

   return { label: word.label, volume: word.volume, sentiment: word.sentiment };
};
/**
 * assignSize
 *
 * @param {number} val Value based on which size is assigned.
 * @return {number} Word size in wordcloud depending on value.
 */
export const assignSize = (val) => {
   // declare minimum size
   let size = 12;

   // cover invaid input
   if (isNaN(val) && !val) throw new Error('null or undefined');
   if (val < 0) throw new Error('not a positive number');
   if (isNaN(val)) throw new Error('not a number');

   // handle valid cases
   if (val > 10 && val <= 30) {
      size = 16;
   } else if (val > 30 && val <= 60) {
      size = 20;
   } else if (val > 60 && val <= 90) {
      size = 24;
   } else if (val > 90 && val <= 120) {
      size = 28;
   } else if (val > 120) {
      size = 30;
   }

   return size;
};
/**
 * assignColor
 *
 * @param {number} score Value based on which color is assigned.
 * @return {string} Color depending on score.
 */
export const assignColor = (score) => {
   const { green, red, grey } = wordColors;

   // cover invaid input
   if (isNaN(score) && !score) throw new Error('null or undefined');
   if (score < 0) throw new Error('not a positive number');
   if (isNaN(score)) throw new Error('not a number');

   // handle valid cases
   return score > 60 ? green : score < 40 ? red : grey;
};
