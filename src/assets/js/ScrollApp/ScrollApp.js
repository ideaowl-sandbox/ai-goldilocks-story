import fullpage from 'fullpage.js';
import fullpageCSS from '../../css/fullPage.js_4.0.20_fullpage.css';

import { scaleAndCenterContent } from '../helpers/scaleAndCenterContent';
import * as d3 from 'd3'
import { slideTransition } from './slideTransition.mjs';
import { puzzlesSetup } from './puzzlesSetup.mjs';


export class ScrollApp {

  constructor(opts) {
    let self = this;
    self.g = opts;
    self.setupFullPage(self.g);
    scaleAndCenterContent();
    puzzlesSetup();
    return self;
  }

  setupFullPage(g) {
    const self = this;
    const fullPage = d3.select(g.fullPageID);

    const section = fullPage.selectAll('.section')
      .data(g.sectionsData)
      .enter()
      .append('div')
      .classed('section', true)
      .attr('id', d => d.id)
      .attr('data-anchor', d => d.id)

    // Full Page Instance
    g.fpi = new fullpage('#fullpage', {
      navigation: true,
      licenseKey: 'gplv3-license',
      onLeave: function (origin, destination, direction, trigger) {
        self.elementsToTransition({
          from: origin.anchor, to: destination.anchor,
          pieces: self.g.pieces
        })
      },
      // keyboardScrolling: false
    });

    // Drop the fullpage
    d3.select('#fullpage')
      .style('display', 'none')

    // Style the navigation chapter first pages
    const chapterFirstSections = [...g.config.chapters.map(d => d.pages[0].id)].flat();
    d3.selectAll('#fp-nav a')
      .classed('chapter-first-page', function () {
        const anchor = d3.select(this).property('href').split('#')[1];
        return chapterFirstSections.includes(anchor)
      })


    window
      .addEventListener("resize", function (ev) {
        scaleAndCenterContent();
      })
    scaleAndCenterContent();


    self.elementsToTransition({
      from: '<<<>>>', to: g.fpi.getActiveSection().anchor,
      pieces: self.g.pieces
    })
  }
 
  // fpCBonLeave
  elementsToTransition({from, to, pieces}) {
    const piecesCopy = JSON.parse(JSON.stringify(pieces));

    let enterPieces = JSON.parse(JSON.stringify(piecesCopy
      .filter(
        d => 
          d.states.filter(
            e => e.inPages.includes(to)
          ).length > 0)));

    if (enterPieces.length > 0) {
      enterPieces.forEach(enterPiece => {
        enterPiece.states = enterPiece.states.filter(
          d => d.inPages.includes(to)
        )
      })
    }

    let exitPieces = JSON.parse(JSON.stringify(piecesCopy
      .filter(
        d =>
          d.states.filter(
            e => e.inPages.includes(from)
          ).length > 0)));

    if (exitPieces.length > 0) {
      exitPieces.forEach(exitPiece => {
        exitPiece.states = exitPiece.states.filter(
          d => d.inPages.includes(from)
        )
      })
    }

    let transitionPieces = enterPieces
      .filter(
        enterPiece => 
          exitPieces.filter(
            exitPiece => enterPiece.selector === exitPiece.selector
          ).length > 0);

    enterPieces = enterPieces
      .filter(
        enterPiece => 
          !transitionPieces
            .some(
                transitionPiece => 
                  transitionPiece.selector === enterPiece.selector
            ))

    exitPieces = exitPieces
      .filter(
        exitPiece =>
          !transitionPieces
            .some(
              transitionPiece =>
                transitionPiece.selector === exitPiece.selector
            ))

    slideTransition( [
      {pieces: enterPieces, transitionType: 'enter'}, 
      { pieces: exitPieces, transitionType: 'exit'},
      { pieces: transitionPieces, transitionType: 'transition'}
    ] )

    return;
  }



}