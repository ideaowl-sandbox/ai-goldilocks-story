import * as d3 from 'd3';
import { WitnessPuzzle } from '../WitnessPuzzle/WitnessPuzzle';
import { replaceEveryNthSearchString } from '../helpers/textTransformations';


export function puzzlesSetup(g) {

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




  d3.selectAll('.latex-replace')
    .each(function() {
      let el = d3.select(this);
      let latex = String.raw`${el.text()}`; //attr('data-latex');
      katex.render(
        latex,
        el.node(),
        { throwOnError: false }
      );
    })


  let moveCB = (inst) => {
    console.log(inst);
  }

  d3.select('h1')
    .on('click', () => {
      console.log('click captured');
      fullPageInstance.moveSectionDown();
    });

  function ifInfConvertToLatex(val) {
    if (val === Infinity) {
      console.log(`\\infty`);
      return `\\infty`
    }
    return val;
  }
  
  function updateReMUSEExamplesText(inst, cTarget) {

    // if (cTarget === 'puzzle-remuse-only-one-solution') { return }

    const posn = JSON.stringify(inst._state.puzzle.history.snakePositions);
    const currStateData = inst._state.puzzle.history['KLTrajectoryN0'][posn];
    currStateData.logicOutcomes.sort((a,b) => (
      a.dirn.name === 'right' ? 1 : -1 > 
      b.dirn.name === 'right' ? 1 : -1
    ) );


    katex.render(
      String.raw`L(s) = \{` + currStateData.logicOutcomes.map(d=>'a_{'+d.dirn.name+'}').join(',') + ` \\}`,
      d3.select('.remuse-actions-tabletop-' + cTarget).node(),
      { throwOnError: false }
    );
    katex.render(
      String.raw`\{` + currStateData.logicOutcomes.map(d => '' + d.localPartialEntropy + '').join(',') + ` \\}`,
      d3.select('.remuse-table-' + cTarget 
        + ' .local-entropies-value-text').node(),
      { throwOnError: false }
    );
    katex.render(
      String.raw`\{` + currStateData.logicOutcomes.map(d => '' + ifInfConvertToLatex(d.childEntropy) + '').join(',') + ` \\}`,
      d3.select('.remuse-table-' + cTarget
        + ' .oracle-entropies-value-text').node(),
      { throwOnError: false }
    );

    katex.render(
      String.raw`P = \{` + currStateData.logicOutcomes.map(d => '' + d.localSoftMinProb + '').join(',') + ` \\}`,
      d3.select('.remuse-table-' + cTarget
        + ' .local-probs-value-text').node(),
      { throwOnError: false }
    );
    katex.render(
      String.raw`Q = \{` + currStateData.logicOutcomes.map(d => '' + d.childSoftMinProb + '').join(',') + ` \\}`,
      d3.select('.remuse-table-' + cTarget
        + ' .oracle-probs-value-text').node(),
      { throwOnError: false }
    );

    const localEntropyValue = currStateData.logicOutcomes.map(d => d.localPartialEntropy).reduce((a, b) => a + b, 0);
    const minChildEntropyValue = Math.min(...currStateData.logicOutcomes.map(d => d.childEntropy));

    katex.render(
      String.raw`= {` 
      + ifInfConvertToLatex(localEntropyValue)
      + ` + `
      + ifInfConvertToLatex(minChildEntropyValue)
      + ` = `
      + ifInfConvertToLatex(localEntropyValue + minChildEntropyValue)
      + ` \}`,
      d3.select('.remuse-results-bottom-' + cTarget
        + ' .muse-puzzle-results-value-text').node(),
      { throwOnError: false }
    );

    console.log(d3.select('.remuse-results-bottom-' + cTarget
      + ' .muse-puzzle-results-value-text').node());

    const totalChildSoftMinProb = currStateData.logicOutcomes.map(d => d.childSoftMinProb).reduce((a, b) => a + b, 0);

    katex.render(
      String.raw`= {`
      + (totalChildSoftMinProb < 1 ? 'n/a' : ifInfConvertToLatex(currStateData.currEntropy))
      + ` + `
      + ifInfConvertToLatex(minChildEntropyValue)
      + ` = `
      + ifInfConvertToLatex(currStateData.totalEntropy)
      + ` \}`,
      d3.select('.remuse-results-bottom-' + cTarget
        + ' .remuse-puzzle-results-value-text').node(),
      { throwOnError: false }
    );


    console.log(currStateData, inst._state.puzzle.history.minSolKLDivergenceEntropyWithPruningAndN0);

    // puzzlesByClassTarget[cTarget].deriveMinSolKLDivergenceEntropyWithPruningAndNdepth(0, { storeKLTrajectoryForDebugging: true });

  }

  // Object.entries(puzzles)
  for (const [cTarget, puzzleSetup] of Object.entries(puzzles)) {

    let moveCB = (inst) => {};




    if (cTarget === 'puzzle-state-and-actions') {

      

      function freshPuzzleMetrics() {
        return JSON.parse(JSON.stringify(
          {
            numSnakePositions: 1,
            currValidActions: 0,
            currvalidActions: 0,
            solved: false,
            currentM: null,
            trajectory: {
              numValidActions: [], numLogicalActions: [], M: []
            }
          }
        ))
      }

      
      g.puzzleMetricsByClassTarget[cTarget] = freshPuzzleMetrics();
      // let g.puzzleMetricsByClassTarget[cTarget] = g.puzzleMetricsByClassTarget[cTarget];
      
      //g.puzzleMetricsByClassTarget[cTarget];
      moveCB = (inst) => {

        // let g.puzzleMetricsByClassTarget[cTarget] = g.puzzleMetricsByClassTarget[cTarget];

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

        function getLogicalActions() {

          let mustMoves = g.puzzleMetricsByClassTarget[cTarget]
            .currentM.filter(d => d.assessment === 1);

          if (mustMoves.length === 1) {
            return mustMoves
          }

          if (mustMoves.length > 1) {
            return []
          }

          return g.puzzleMetricsByClassTarget[cTarget]
               .currentM.filter(d => d.assessment >= 0)
        }


        ////////////////////
        // Trajectory
        ////////////////////

        if (inst._state.puzzle.history.snakePositions.length === 1) {
          g.puzzleMetricsByClassTarget[cTarget] = freshPuzzleMetrics();
        }

        if (inst._state.puzzle.history.snakePositions.length
          === g.puzzleMetricsByClassTarget[cTarget].numSnakePositions - 1) {
          g.puzzleMetricsByClassTarget[cTarget].trajectory.numValidActions.pop();
          g.puzzleMetricsByClassTarget[cTarget].trajectory.numLogicalActions.pop();
          g.puzzleMetricsByClassTarget[cTarget].trajectory.M.pop();
        }

        if (inst._state.puzzle.history.snakePositions.length 
            === g.puzzleMetricsByClassTarget[cTarget].numSnakePositions + 1) {
          g.puzzleMetricsByClassTarget[cTarget].trajectory.numValidActions.push(
            g.puzzleMetricsByClassTarget[cTarget].currentM.filter(d => d.isLegal).length
          );
          g.puzzleMetricsByClassTarget[cTarget].trajectory.numLogicalActions.push(   
            getLogicalActions().length
          );
          g.puzzleMetricsByClassTarget[cTarget].trajectory.M.push(g.puzzleMetricsByClassTarget[cTarget].currentM);
        }

        g.puzzleMetricsByClassTarget[cTarget].currentM = JSON.parse(JSON.stringify(inst.M(0)));
        g.puzzleMetricsByClassTarget[cTarget].numSnakePositions = inst._state.puzzle.history.snakePositions.length;

        console.log(g.puzzleMetricsByClassTarget[cTarget].currentM);


        console.log(inst._state.puzzle.history, 
          inst._state.puzzle.history.possibleMoveOutcomes,
          inst.M(0),
          g.puzzleMetricsByClassTarget[cTarget].trajectory);

        let validActions = g.puzzleMetricsByClassTarget[cTarget].currentM.filter(d=>d.isLegal);
        let validActionsAsDirectionsString = validActions.map(d => '\\allowbreak a_{' + d.dirn.name +'}');
        let logicActions = getLogicalActions();
        let logicActionsAsDirectionsString = logicActions.map(d => '\\allowbreak a_{' + d.dirn.name + '}');
        


        katex.render(
          String.raw`\text{Valid Actions via } A(s) = `
          + '[' + validActionsAsDirectionsString + ']',          
          d3.select('.states-and-actions-valid-actions-text').node(),
          { throwOnError: false }
        );

        katex.render(
          String.raw`\text{Valid Actions via } A(s) = `
          + '[' + validActionsAsDirectionsString + ']',
          d3.select('.local-entropy-valid-action-text').node(),
          { throwOnError: false }
        );


        const localEntropyValue = getEntropyVal(validActions.length);

        function getEntropyVal(numActions) {
          return numActions === 0
            ? `\\infty`
            : (Math.round(
              inst.HByAnyNumOutcomes(
                numActions
              ) * 100) / 100).toString()
        }

          
        katex.render(
          String.raw`\text{Local, Uniform Entropy } \newline {H(Z_{A(s)}) = ${localEntropyValue} \text{ bit${+localEntropyValue !== 1 ? `s` :``} }}`,
          d3.select('.local-entropy-value-text').node(),
          { throwOnError: false }
        );

        let solutionEntropyValidHistory = 
            g.puzzleMetricsByClassTarget[cTarget].trajectory.numValidActions
              .map(d => getEntropyVal(d));

        let solutionEntropyValidSoFar = JSON.parse(JSON.stringify(solutionEntropyValidHistory));

        solutionEntropyValidSoFar
          .push(getEntropyVal(g.puzzleMetricsByClassTarget[cTarget].currentM.filter(d => d.isLegal).length));

        
        let solutionEntropyValidSoFarStr = solutionEntropyValidSoFar
            .join(' + ')

        let solutionEntropyValidTotal = 
          solutionEntropyValidSoFarStr.includes(`\\infty`) 
            ? `\\infty` 
            : solutionEntropyValidSoFar.reduce((a, b) => +a + +b, 0);

        // const solutionEntropyValidSoFarTotal = g.puzzleMetricsByClassTarget[cTarget].trajectory.numValidActions


        katex.render(
          String.raw`\text{Solution Entropy } = ${solutionEntropyValidTotal} \text{ bit${+solutionEntropyValidTotal !== 1 ? `s` : ``} }`,
          d3.select('.solution-entropy-valid-a-total').node(),
          { throwOnError: false }
        );

        katex.render(
          String.raw`\text{Summed Local Entropy   } \newline = ${solutionEntropyValidSoFarStr} \text{ bit${+localEntropyValue !== 1 ? `s` : ``} }`,
          d3.select('.solution-entropy-valid-a-text').node(),
          { throwOnError: false }
        );

        // g.puzzleMetricsByClassTarget[cTarget].currentM

        katex.render(
          validActionsAsDirectionsString.join(' , '),
          d3.select('.a-actions-text').node(),
          { throwOnError: false }
        );


        katex.render(
          logicActionsAsDirectionsString.join(' , '),
          d3.select('.l-actions-text').node(),
          { throwOnError: false }
        );


        katex.render(
          validActionsAsDirectionsString.length.toString(),
          d3.select('.a-num-actions-text').node(),
          { throwOnError: false }
        );


        katex.render(
          logicActionsAsDirectionsString.length.toString(),
          d3.select('.l-num-actions-text').node(),
          { throwOnError: false }
        );



        katex.render(
          getEntropyVal(validActionsAsDirectionsString.length).toString(),
          d3.select('.a-local-entropy-text').node(),
          { throwOnError: false }
        );


        katex.render(
          getEntropyVal(logicActionsAsDirectionsString.length).toString(),
          d3.select('.l-local-entropy-text').node(),
          { throwOnError: false }
        );



      }        
    }




    if (cTarget === 'puzzle-remuse-already-won' || cTarget === 'puzzle-remuse-only-one-solution') {

      moveCB = (inst) => {
        updateReMUSEExamplesText(inst, cTarget);

      }

      // const currStateData = testPuzzle._state.puzzle.history['KLTrajectoryN' + n][posn];

    }




    puzzlesByClassTarget[cTarget] =
      new WitnessPuzzle(
        puzzleSetup,
        Object.assign({ classed: ['medium'] }, { 
          targetElement: '.' + cTarget, 
          userInterface: false, 
          triggerNLookAhead: true,
          entropyLookAhead: 0,
          render: true, 
          moveCB})
      );

    

    if (cTarget === 'puzzle-remuse-already-won' || cTarget === 'puzzle-remuse-only-one-solution') {
      puzzlesByClassTarget[cTarget].deriveMinSolKLDivergenceEntropyWithPruningAndNdepth(0, { storeKLTrajectoryForDebugging: true });
      updateReMUSEExamplesText(puzzlesByClassTarget[cTarget], cTarget);
    }


  }

  puzzlesByClassTarget['puzzle-state-and-actions']
    .on('solved', function(inst) {
      // d3.select('.solution-entropy-valid-a-total')
      //   .transition()
      //   .duration(1000)
      //   .style('opacity', 1)
      // // d3.selectAll('.solution-entropy-valid-a-text span.mord')
      // //   .each(function() {
      // //     let el = d3.select(this);
      // //     if (el.text().search('(so far)')) {
      // //       el.text('Solution Entropy')
      // //     }
      // //     debugger;
      // //   })
      // g.puzzleMetricsByClassTarget['puzzle-state-and-actions'].solved = true;

    })

  // renderImmediateLookAhead: false,
  //   renderPOLCstraightToExit: false,
  //     renderNLookAhead: true,
  //       userInterface: true,

  // puzzlesByClassTarget['puzzle-state-and-actions']
  //   .on('resetted', function (inst) {
  //     g.puzzleMetricsByClassTarget['puzzle-state-and-actions'] = freshPuzzleMetrics();
  //     console.log('resetted');
  //   })

  //inst.setOption('renderNLookAhead', true)


  d3.select('.puzzle-state-and-actions')
    .on('dblclick', function() {
      puzzlesByClassTarget['puzzle-state-and-actions']
        .restartPuzzle()
    })
    puzzlesByClassTarget['puzzle-state-and-actions'].attemptMove([0,0])

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
  // {
  //   "size": [4, 4],
  //   "startPosition": [0, 0],
  //   "endPosition": [4, 4, 2],
  //   "constraints": {
  //     "regionConstraints": [
  //       [1, 4, 1], [3, 4, 0],
  //       [1, 3, 0], [2, 3, 1], [3, 3, 1], [4, 3, 0],
  //       [1, 2, 0], [3, 2, 1],
  //       [1, 1, 1], [2, 1, 0], [4, 1, 1],
  //     ]
  //   }
  // },
  {
    "size": [3, 3],
      "startPosition": [0, 0],
        "endPosition": [3, 3, 2],
          "constraints": {
      "regionConstraints": [
        [1, 3, 0], [2, 3, 0], [3, 3, 0], 
        [1, 2, 0], [2, 2, 1], [3, 2, 0], 
        [1, 1, 1], [2, 1, 1], [3, 1, 1], 
      ]
    }
  },





  'puzzle-second-solution':
  {
    "size": [3, 3],
    "startPosition": [0, 0],
    "endPosition": [3, 3, 2],
    "constraints": {
      "regionConstraints": [
        [1, 3, 0], [2, 3, 0], [3, 3, 0],
        [1, 2, 0], [2, 2, 1], [3, 2, 0],
        [1, 1, 1], [2, 1, 1], [3, 1, 1],
      ]
    }
  },




  'puzzle-remuse-already-won':
  {
    "size": [4, 4],
    "startPosition": [2, 0],
    "endPosition": [2, 4, 1],
    "constraints": {
      "cannotCrosses": [
        [0.5, 3], [3.5, 3],
        [0.5, 2], [3.5, 2],
        [0.5, 1], [3.5, 1],
        [1, 3.5], [2, 3.5], [3, 3.5],
        [1, 0.5], [2, 0.5], [3, 0.5],
        // [1.5, 3], [2.5, 3],
        // [1, 2.5], [2, 2.5], [3, 2.5],
        // [1.5, 2], [2.5, 2],
        // [1.5, 1], [2.5, 1],
        // [1, 1.5], [2, 1.5], [3, 1.5],
      ]
    }
  },



  'puzzle-remuse-only-one-solution':
  {
    "size": [4, 4],
    "startPosition": [2, 0],
    "endPosition": [2, 4, 1],
    "constraints": {
      "cannotCrosses": [
        [0.5, 3], [3.5, 3],
        [0.5, 2], [3.5, 2],
        [0.5, 1], 
        [2.5, 4],
        [1, 3.5], [2, 3.5], [3, 3.5],
        [1, 0.5], [2, 0.5], [3, 0.5],
        [2, 1.5], [3, 1.5], [1, 1.5],
        [3.5, 4], 
        [1.5, 3], [2.5, 3], 
        [1, 2.5], [2, 2.5], [3, 2.5],
        [1.5, 2], [2.5, 2],
        [1.5, 1], [4, 3.5]
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