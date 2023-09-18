import fullpage from 'fullpage.js';
import fullpageCSS from '../css/fullPage.js_4.0.20_fullpage.css';

import { afterLoad, afterSlideLoad } from './fullPageFns.mjs';

import { scaleAndCenterContent } from './helpers/scaleAndCenterContent';
import * as d3 from 'd3'
import { config } from '../data/config.js';
import { pieces } from '../data/pieces.js';
import { slideTransition } from './slideTransition.mjs';



const fullPageID = '#fullpage';

let g = {
    config,
    pieces,
    sectionsData: [...config.chapters.map(d => d.pages)].flat(),
    fpi: null, // fullpage instance, set in setupFullPage
};




setupFullPage(g);
slideTransition(g);





function setupFullPage(g) {
    const fullPage = d3.select(fullPageID);

    const section = fullPage.selectAll('.section')
        .data(g.sectionsData)
        .enter()
        .append('div')
        .classed('section', true)
        .attr('id', d => d.id)
        .attr('data-anchor', d => d.id)

    // Full Page Instance
    g.fpi = new fullpage('#fullpage', {
        //options here
        navigation: true,
        licenseKey: 'gplv3-license',
        afterLoad,
        afterSlideLoad
        // keyboardScrolling: false
    });

    // Drop the fullpage
    d3.select('#fullpage')
        .style('display', 'none')

    window
        .addEventListener("resize", function (ev) {
            scaleAndCenterContent();
        })
    scaleAndCenterContent();

}

