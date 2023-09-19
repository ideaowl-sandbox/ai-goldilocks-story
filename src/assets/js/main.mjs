
import { ScrollApp } from './ScrollApp/ScrollApp.js';

import { config } from '../data/config.js';
import { pieces } from '../data/pieces.js';

const fullPageID = '#fullpage';

let g = {
    fullPageID: '#fullpage',
    config,
    pieces,
    sectionsData: [...config.chapters.map(d => d.pages)].flat(),
    fpi: null, // fullpage instance, set in setupFullPage
};

const scrollApp = new ScrollApp(g);
