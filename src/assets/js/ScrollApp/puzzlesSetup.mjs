import * as d3 from 'd3';
import { WitnessPuzzle } from '../WitnessPuzzle/WitnessPuzzle';



export function puzzlesSetup() {



  d3.select('h1')
    .on('click', () => {
      console.log('click captured');
      fullPageInstance.moveSectionDown();
    });

  // Object.entries(puzzles)
  for (const [classTarget, puzzleSetup] of Object.entries(puzzles)) {

    new WitnessPuzzle(
      puzzleSetup,
      Object.assign({ classed: ['medium'] }, { targetElement: '.' + classTarget, userInterface: false, render: true })
    );

  }



}


export const puzzles = {

  'puzzle-instruction':
  {
    "size": [3, 3],
    "startPosition": [0, 0],
    "endPosition": [3, 3, 2],
    "constraints": {
    }
  },

  'puzzle-square-color-constraints':
  {
    "size": [3, 3],
    "startPosition": [0, 0],
    "endPosition": [3, 3, 2],
    "constraints": {
      "regionConstraints": [
        [1, 1, 0],
        [1, 2, 1],
        [3, 1, 0],
        [3, 2, 1],
      ],
      // "mustCrosses": [
      //   [1.5, 1]
      // ]
    }
  },

  'puzzle-intro-easy': 
  {
    "size": [4, 4],
    "startPosition": [0, 2],
    "endPosition": [4, 2, 2],
    "constraints": {
      "regionConstraints": [
        [1, 4, 1], [2, 4, 1], [3, 4, 1], [4, 4, 1],
        [1, 3, 1], [2, 3, 1], [3, 3, 1], [4, 3, 1],
        [1, 2, 0], [2, 2, 0], [3, 2, 0], [4, 2, 0],
        [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0],
      ]
    }
  },

  'puzzle-intro-hard':
  {
    "size": [4, 4],
    "startPosition": [0, 0],
    "endPosition": [4, 4, 2],
    "constraints": {
      "regionConstraints": [
                   [2, 4, 0], [3, 4, 1], [4, 4, 0],
        [1, 3, 0], [2, 3, 1],            [4, 3, 1],
                   [2, 2, 1], [3, 2, 1], 
        [1, 1, 1], [2, 1, 1],            [4, 1, 0],
      ]
    }
  },

  'puzzle-intro-medium':
  {
    "size": [4, 4],
    "startPosition": [0, 0],
    "endPosition": [4, 4, 2],
    "constraints": {
      "regionConstraints": [
        [1, 4, 1],            [3, 4, 0],             
        [1, 3, 0], [2, 3, 1], [3, 3, 1], [4, 3, 0],
        [1, 2, 0],            [3, 2, 1], 
        [1, 1, 1], [2, 1, 0],            [4, 1, 1],
      ]
    }
  },


}


let localFns = { puzzlesSetup, puzzles }