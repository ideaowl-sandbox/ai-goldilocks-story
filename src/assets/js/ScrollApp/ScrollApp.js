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
    self.puzzlesByClassTarget = puzzlesSetup(self.g);
    self.setupOtherControls();
    scaleAndCenterContent();
    d3.select('#page-canvas')
      .style('opacity', 1);
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
    const chapterFirstSections = [...g.config.chapters.map(d => d.pages[0])].flat();
    const chapterFirstSectionIDs = chapterFirstSections.map(d => d.id);
    const chapterFirstSectionTitles = chapterFirstSections.map(d => d.title);
    d3.selectAll('#fp-nav a')
      .classed('chapter-first-page', function () {
        const anchor = d3.select(this).property('href').split('#')[1];
        return chapterFirstSectionIDs.includes(anchor)
      })
      .append('div')
      .classed('chapter-title', true)
      .text(function () {
        const anchor = d3.select(this.parentNode).property('href').split('#')[1];
        const title = chapterFirstSectionTitles[chapterFirstSectionIDs.indexOf(anchor)];
        return title;
      })

    d3.select('#fp-nav')
      .classed('hidden', true)
      .on('click', function () {
        d3.select('#fp-nav')
          .classed('hidden', true)
      })

    d3.select('.edge-menu')
      .on('mouseover', function () {
        d3.select('#fp-nav')
          .classed('hidden', false)
      })


    window
      .addEventListener("resize", function (ev) {
        scaleAndCenterContent();
      })
    scaleAndCenterContent();

    // Preset the positions of items that will be flying
    self.g.pieces.forEach(piece => {
      const pieceBeforeTransition = d3.selectAll(piece.selector);
      pieceBeforeTransition
        .classed('exit-will-' + piece.states[0].exitType, true)
    })

    self.elementsToTransition({
      from: '<<<>>>', to: g.fpi.getActiveSection().anchor,
      pieces: self.g.pieces
    })
  }


  setupOtherControls() {
    let self = this;
    d3.select('.n-step-select')
      .on('change', function() {
        console.log('n-step-select', this.value)
        self.puzzlesByClassTarget['puzzle-state-and-actions']
          .restartPuzzleWithExistingMoves({ entropyLookAheadAtEnd: +this.value })
      })
  }


  // // fpCBonLeave
  // elementsToTransition({from, to, pieces}) {
  //   const self = this;
  //   const piecesCopy = pieces;

  //   let enterPieces = JSON.parse(JSON.stringify(piecesCopy
  //     .filter(
  //       d => 
  //         d.states.filter(
  //           e => e.inPages.includes(to)
  //         ).length > 0)));

  //   if (enterPieces.length > 0) {
  //     enterPieces.forEach(enterPiece => {
  //       enterPiece.states = enterPiece.states.filter(
  //         d => d.inPages.includes(to)
  //       )
  //     })
  //   }

  //   let exitPieces = JSON.parse(JSON.stringify(piecesCopy
  //     .filter(
  //       d =>
  //         d.states.filter(
  //           e => e.inPages.includes(from)
  //         ).length > 0)));

  //   if (exitPieces.length > 0) {
  //     exitPieces.forEach(exitPiece => {
  //       exitPiece.states = exitPiece.states.filter(
  //         d => d.inPages.includes(from)
  //       )
  //     })
  //   }

  //   let transitionPieces = enterPieces
  //     .filter(
  //       enterPiece => 
  //         exitPieces.filter(
  //           exitPiece => enterPiece.selector === exitPiece.selector
  //         ).length > 0);

  //   enterPieces = enterPieces
  //     .filter(
  //       enterPiece => 
  //         !transitionPieces
  //           .some(
  //               transitionPiece => 
  //                 transitionPiece.selector === enterPiece.selector
  //           ))

  //   exitPieces = exitPieces
  //     .filter(
  //       exitPiece =>
  //         !transitionPieces
  //           .some(
  //             transitionPiece =>
  //               transitionPiece.selector === exitPiece.selector
  //           ))

  //   slideTransition( [
  //     {pieces: enterPieces, transitionType: 'enter'}, 
  //     { pieces: exitPieces, transitionType: 'exit'},
  //     { pieces: transitionPieces, transitionType: 'transition'}
  //   ], self )

  //   return;
  // }

  elementsToTransition({from, to, pieces}) {
    const self = this;

    let enterPieces = pieces
      .filter(
        d => 
          d.states.filter(
            e => e.inPages.includes(to)
          ).length > 0);

    let exitPieces = pieces
      .filter(
        d =>
          d.states.filter(
            e => e.inPages.includes(from)
          ).length > 0);
    

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
      { pieces: enterPieces, transitionType: 'enter', pageTarget: to, from, to}, 
      { pieces: exitPieces, transitionType: 'exit', pageTarget: from, from, to },
      { pieces: transitionPieces, transitionType: 'transition', pageTarget: to, from, to }
    ], self )

    return;
  }


}