import * as d3 from 'd3';


let localFns = { transitionValue, slideTransition, transitionPieces, applyEachStyleToPiece }

export function transitionValue({ 
  exitType, key, value, transitionType, targetIntendedState
}) {

  let valToggle = (transitionType === 'enter' ? 1 : -1);
  
  if (targetIntendedState) {
    return value + 'px';
  }

  if (exitType === 'fly-top') {
    if (key === 'top') {
      return ((1080 + value) * valToggle ) + 'px';
    }
  } else if (exitType === 'fly-left') {
    if (key === 'left') {
      return ((1920 + value) * valToggle) + 'px';
    }
  } else if (exitType === 'fly-right') {
    if (key === 'right') {
      return ((1920 + value) * valToggle) + 'px';
    }
  } else if (exitType === 'fly-bottom') {
    if (key === 'bottom') {
      return ((1080 + value) * valToggle) + 'px';
    }
  }
}


export function slideTransition(typedPieceSets) {
  console.log(typedPieceSets);
  for (let typedPieceSet of typedPieceSets) {
    localFns.transitionPieces(typedPieceSet)
  }

}


export function transitionPieces({ pieces, transitionType }){

  pieces.forEach((piece) => {
    const pieceState = piece.states[0];

    const pieceBeforeTransition = d3.select(piece.selector);
  
    // Before transitions setup styles for entering
    if (transitionType === 'enter') {
      localFns.applyEachStyleToPiece({
        d3Obj: pieceBeforeTransition,
        pieceState,
        transitionType,
        targetIntendedState: false
      })
    }

    const transitioningPiece =
      pieceBeforeTransition
        .transition()
        .duration(pieceState.duration)
        .delay(pieceState.delay);

    localFns.applyEachStyleToPiece({
      d3Obj: transitioningPiece, 
      pieceState, 
      transitionType,
      targetIntendedState: transitionType !== 'exit'
    })

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