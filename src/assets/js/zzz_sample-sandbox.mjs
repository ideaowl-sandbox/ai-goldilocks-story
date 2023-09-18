
import { WitnessPuzzle } from './WitnessPuzzle/WitnessPuzzle';


d3.select('h1')
    .on('click', () => {
        console.log('click captured');
        fullPageInstance.moveSectionDown();
    });


const witnessPuzzle = new WitnessPuzzle(
    {
        "size": [3, 3],
        "startPosition": [0, 0],
        "endPosition": [3, 3, 1],
        "constraints": {
            "regionConstraints": [
                [1, 1, 0],
                [1, 2, 1],
                [3, 1, 0],
                [3, 2, 1],
            ]
        }
    },
    Object.assign({ classed: ['medium'] }, { targetElement: '.viz-container', userInterface: false, render: true })
);