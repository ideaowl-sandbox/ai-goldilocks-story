import * as d3 from 'd3';


let localFns = { transitionValue, slideTransition, transitionPieces, applyEachStyleToPiece }

export function transitionValue({ 
  exitType, key, value, transitionType, targetIntendedState
}) {

  let valToggle = (transitionType === 'enter' ?-1 : -1);
  
  if (targetIntendedState) {
    return formatTransitionValue({ key, value });
  }

  if (exitType === 'fly-top') {
    if (key === 'top') {
      return formatTransitionValue({ key, value: (1080 + value) * valToggle });
    }
  } else if (exitType === 'fly-left') {
    if (key === 'left') {
      return formatTransitionValue({ key, value: (1920 + value) * valToggle });
    }
  } else if (exitType === 'fly-right') {
    if (key === 'right') {
      return formatTransitionValue({ key, value: (1920 + value) * valToggle });
    }
  } else if (exitType === 'fly-bottom') {
    if (key === 'bottom') {
      return formatTransitionValue({ key, value: (1080 + value) * valToggle });
    }
  }
  return formatTransitionValue({ key, value});
}

export function formatTransitionValue( {key, value} ) {

  let pxKeys = ['top', 'left', 'right', 'bottom', 'width', 'height', 'font-size'];

  if (pxKeys.includes(key)) {
    return value + 'px';
  }

  return value;
}


export function slideTransition(typedPieceSets, appInst) {
  
  // get exit max delay
  let exitMaxDelay = 0;
  let exitSet = typedPieceSets.filter(d => d.transitionType === 'exit');
  if (exitSet.length > 0) {
    const exitPieces = exitSet[0].pieces;
    exitMaxDelay = Math.max(exitMaxDelay, ...exitPieces.map(d => d.states[0].delay));
  }
  
  for (let typedPieceSet of typedPieceSets) {
    localFns.transitionPieces(typedPieceSet, exitMaxDelay, appInst)
  }

}


export function transitionPieces({ pieces, transitionType, pageTarget, from, to }, exitMaxDelay, appInst){


  pieces.forEach((piece) => {
    const pieceState = piece.states.filter(state => state.inPages.includes(pageTarget))[0];

    const transitionChange = transitionType === 'transition' 
      && (
        piece.states.filter(state => state.inPages.includes(from))[0]
        !== piece.states.filter(state => state.inPages.includes(to))[0]
      );


    const pieceBeforeTransition = d3.selectAll(piece.selector);
    if (
        (transitionType === 'enter' 
            || (transitionType === 'transition' && transitionChange)) 
        && pieceState.runOnEnter
     ) {
      pieceState.runOnEnter({appInst});
      
    } 

    if (pieceState.toggleClasses) {
      Object.entries(pieceState.toggleClasses).forEach(([onOrOff, toggleClasses]) => {
        if (transitionType === 'exit') { // toggle off regardless of on or off
          toggleClasses.forEach((toggleClass) => {
            pieceBeforeTransition.classed(toggleClass, false);
          })
        }
        else {
          toggleClasses.forEach((toggleClass) => {
            pieceBeforeTransition.classed(toggleClass, onOrOff === 'on' ? true : false);
          })
          // pieceBeforeTransition.classed(toggleClass, false);
        }
      })
    }



    // There is no run on exit, just on enter for now.
    // if (transitionType === 'exit' && pieceState.runOnExit) {
    //   pieceState.runOnExit({appInst});
    // }

    if (pieceState.exitType === 'fade') {

      if (transitionType === 'enter') {
        pieceBeforeTransition
          .style('display', pieceState?.exitOptions?.display ? pieceState?.exitOptions?.display : 'block')
          .style('opacity', 0)
          .style('transform', pieceState.enterOffset?.transform ? pieceState.enterOffset?.transform : 'translate(0,0)')
          .transition()
          .duration(pieceState.duration)
          .delay(pieceState.delay + 0)
          .style('opacity', 1)
          .style('transform', 'translate(0,0)')
      }

      if (transitionType === 'exit') {
        pieceBeforeTransition
          .transition()
          .duration(pieceState.duration)
          .delay(pieceState.delay + 0)
          .style('opacity', 0)
          .on('end', () => {
            pieceBeforeTransition.style('display', 'none')
          });
      }

 
      if (transitionType === 'transition') {
        pieceBeforeTransition
          .transition()
          .duration(pieceState.duration)
          .delay(pieceState.delay + 0)
          .style('opacity', pieceState.enterOffset?.opacity ? pieceState.enterOffset?.opacity  : 1)
      }



    } else {


      // Initial state styles for entering
      if (transitionType === 'enter') {
        localFns.applyEachStyleToPiece({
          d3Obj: pieceBeforeTransition,
          pieceState,
          transitionType,
          targetIntendedState: false
        })
      }

      // if (pieceState.toggleClasses) {
      //   pieceState.toggleClasses.forEach((toggleClass) => {
      //     pieceBeforeTransition.classed(toggleClass.class, toggleClass.toggle);
      //   })
      // }

      // Transitions to apply
      const transitioningPiece =
        pieceBeforeTransition
          .transition()
          .duration(pieceState.duration)
          .delay((d,i) => (transitionType === 'exit' ? 0 : pieceState.delay + i * 50) + (transitionType === 'enter' ? exitMaxDelay + i * 50 : 0));

      localFns.applyEachStyleToPiece({
        d3Obj: transitioningPiece,
        pieceState,
        transitionType,
        targetIntendedState: transitionType !== 'exit'
      })


    }
  
    

  })
}

export function applyEachStyleToPiece({ d3Obj, pieceState, transitionType, targetIntendedState }) {
  for (const [key, value] of Object.entries(pieceState.styles)) {
    const transitionValue = localFns.transitionValue({
      exitType: pieceState.exitType,
      transitionType,
      targetIntendedState,
      key, value
    })
    d3Obj.style(key, transitionValue);
  }
}



// export const slideTransition = (namedPieces) => {
//   namedPieces.exitPieces.forEach((piece) => {
//     console.log(piece.states[0].styles.top);
//     d3.select(piece.selector)
//       .transition()
//       .duration(piece.states[0].duration)
//       .delay(piece.states[0].delay)
//       .style('top', piece.states[0].styles.top ? (-1080 - piece.states[0].styles.top) + 'px' : undefined)
//       .style('color', 'black')
//   })
// }

// export {
//   slideTransition  
// }