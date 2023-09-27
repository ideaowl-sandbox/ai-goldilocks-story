
import { ScrollApp } from './ScrollApp/ScrollApp.js';

import { config } from '../data/config.js';
import { pieces } from '../data/pieces.js';

const fullPageID = '#fullpage';

let g = {
    fullPageID: '#fullpage',
    config,
    pieces,
    puzzleMetricsByClassTarget: {
        // 'puzzle-state-and-actions': {
        //   numSnakePositions: _,
        //   currValidActions: 0,
        //   currLegalActions: 0,
        //   trajectory: [
        //     {numValidActions: _, numLogicalActions: _}
        //   ]
        // }
    },
    sectionsData: [...config.chapters.map(d => d.pages)].flat(),
    fpi: null, // fullpage instance, set in setupFullPage
};

const scrollApp = new ScrollApp(g);
