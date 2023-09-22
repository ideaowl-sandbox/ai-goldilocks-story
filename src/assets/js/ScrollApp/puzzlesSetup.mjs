import * as d3 from 'd3';
import { WitnessPuzzle } from '../WitnessPuzzle/WitnessPuzzle';
import { replaceEveryNthSearchString } from '../helpers/textTransformations';


export function puzzlesSetup() {

  let puzzlesByClassTarget = {};

  katex.render(
    String.raw`4 \text{x} 4 \text{ grid combinations} = 4 \times 4 \times ... \times 4 = 4^{16} = 4.3\text{B}`, 
    d3.select('.num-4x4-combinations-text').node(), 
    {throwOnError: false}
  );

  katex.render(
    String.raw`6 \text{x} 6 \text{ grid combinations} = 4 \times 4 \times ... \times 4 = 4^{36} = 4.7 \times 10^{21}`,
    d3.select('.num-5x5-combinations-text').node(),
    { throwOnError: false }
  );


  katex.render(
    String.raw`\text{State } s`,
    d3.select('.states-and-actions-states-text').node(),
    { throwOnError: false }
  );


  let moveCB = (inst) => {
    console.log(inst);
  }

  d3.select('h1')
    .on('click', () => {
      console.log('click captured');
      fullPageInstance.moveSectionDown();
    });

  // Object.entries(puzzles)
  for (const [classTarget, puzzleSetup] of Object.entries(puzzles)) {

    let moveCB = (inst) => {};

    if (classTarget === 'puzzle-state-and-actions') {
      moveCB = (inst) => {
        katex.render(
          String.raw`\text{State } s = ` 
          + replaceEveryNthSearchString(
            JSON.stringify(inst._state.puzzle.history.snakePositions),
            '],',
            `], \\newline `, 3
          ),
          d3.select('.states-and-actions-states-text').node(),
          { throwOnError: false }
        );
      }
    }

    puzzlesByClassTarget[classTarget] =
      new WitnessPuzzle(
        puzzleSetup,
        Object.assign({ classed: ['medium'] }, { targetElement: '.' + classTarget, userInterface: false, render: true, moveCB})
      );

  }

  // puzzlesByClassTarget['puzzle-state-and-actions']
  //   .on('keydown', function(inst, b, c) {
  //     console.log(inst, b, c)
  //     debugger;


  //   })

  return puzzlesByClassTarget

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



  'puzzle-state-and-actions':
  {
    "size": [4, 4],
    "startPosition": [0, 0],
    "endPosition": [4, 4, 2],
    "constraints": {
      "regionConstraints": [
        [1, 4, 1], [3, 4, 0],
        [1, 3, 0], [2, 3, 1], [3, 3, 1], [4, 3, 0],
        [1, 2, 0], [3, 2, 1],
        [1, 1, 1], [2, 1, 0], [4, 1, 1],
      ]
    }
  },


  // 'puzzle-blank-2x2':
  // {
  //   "size": [2, 2],
  //   "startPosition": [0, 0],
  //   "endPosition": [2, 2, 2],
  // },



}


let localFns = { puzzlesSetup, puzzles }