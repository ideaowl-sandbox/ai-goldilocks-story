import * as d3 from 'd3';

let defaultDuration = 1000;

export const pieces = [

    {
        selector: '.intro-background',
        states: [{
            inPages: ['start'],
            exitType: 'fly-top',
            delay: 500,
            duration: defaultDuration,
            styles: {
                top: 0,
                left: 0
            }
        }]
    },

    {
        selector: '.intro-title',        
        states: [{
            inPages: ['start'],
            exitType: 'fly-top',
            delay: 200,
            duration: defaultDuration,
            styles: {
                top: 170,
                left: 150
            }
        }]
    },

    {
        selector: '.intro-subtitle',
        states: [{
            inPages: ['start'],
            exitType: 'fly-left',
            delay: 300,
            duration: defaultDuration,
            styles: {
                top: 350,
                left: 150
            }
        }]
    },

    {
        selector: '.intro-names',
        states: [{
            inPages: ['start'],
            exitType: 'fly-bottom',
            delay: 300,
            duration: defaultDuration,
            styles: {
                bottom: 55,
                left: 150
            }
        }]
    },

    {
        selector: '.intro-portrait-eugene',
        states: [{
            inPages: ['start'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: 110,
                left: 170
            }
        }]
    },

    {
        selector: '.intro-portrait-nathan',
        states: [{
            inPages: ['start'],
            exitType: 'fly-bottom',
            delay: 100,
            duration: defaultDuration,
            styles: {
                bottom: 110,
                left: 370,
                width: 133,
                opacity: 1,
                'clip-path': 'circle(66px at center)'
            }
        }, 
        {
            inPages: ['initial-thank-you'],
            exitType: 'fly-bottom',
            delay: 100,
            duration: defaultDuration,
            styles: {
                bottom: 500,
                left: 460,
                width: 400,
                opacity: 1,
                'clip-path': 'circle(300px at center)'
            }
        },{
            inPages: ['organization-thank-you'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration / 2,
            styles: {
                bottom: 500,
                left: 460,
                width: 400,
                opacity: 0,
                'clip-path': 'circle(300px at center)'
            }
        }]
    },
    {
        selector: '.intro-portrait-adam',
        states: [{
            inPages: ['start'],
            exitType: 'fly-bottom',
            delay: 200,
            duration: defaultDuration,
            styles: {
                bottom: 110,
                left: 560,
                width: 133,
                opacity: 1,
                'clip-path': 'circle(66px at center)'
            }
        },{
            inPages: ['initial-thank-you'],
            exitType: 'fly-bottom',
            delay: 200,
            duration: defaultDuration,
            styles: {
                bottom: 500,
                left: 460+400+200,
                width: 400,
                opacity: 1,
                'clip-path': 'circle(300px at center)'
            }
        },{
            inPages: ['organization-thank-you'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration / 2,
            styles: {
                bottom: 500,
                left: 460+400+200,
                width: 400,
                opacity: 0,
                'clip-path': 'circle(300px at center)'
            }
        }]
    },

    {
        selector: '.intro-logos-section',
        states: [{
            inPages: ['start', 'initial-thank-you'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: 100,
                right: -27,
                scale: 0.8
            }
        }, {
            inPages: ['organization-thank-you'],
            exitType: 'fly-bottom',
            delay: 400,
            duration: defaultDuration,
            styles: {
                bottom: 550,
                right: 540,
                scale: 2
            }
        }]
    },

    {
        selector: '.intro-right-side-note',
        states: [
        {
            inPages: ['start'],
            exitType: 'fly-right',
            delay: 400,
            duration: defaultDuration,
            styles: {
                top: 665,
                right: 150,
                color: 'white'
            }
        }]
    },

    {
        selector: '.page-cover-allElements',
        states: [
        {
            inPages: ['cover'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    {
        selector: '.storybook-img-finds-cabin',
        states: [
            {
                inPages: ['goldilocks-finds-cabin', 'text-once-upon-a-time'],
                delay: 0,
                exitType: 'fade',
                duration: defaultDuration
            },
            // {
            //     inPages: ['goldilocks-finds-cabin'],
            //     delay: 0,
            //     exitType: 'fade',
            //     exitSetting: {
            //         opacity: 0.5
            //     },
            //     duration: defaultDuration
            // },
        ]
    },

    {
        selector: '.storybook-text-once-upon-a-time',
        states: [
        {
            inPages: ['text-once-upon-a-time'],
            delay: 0,
            exitType: 'fade',
            enterOffset: {
                transform: 'translate(0, -40px)'
            },
            duration: defaultDuration * 2
        }]
    },


    {
        selector: '.storybook-img-soup',
        states: [
        {
            inPages: [
                'goldilocks-finds-soup', 
                'text-soup-too-hot',
                'text-soup-too-cold',
                'text-soup-just-right'
            ],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    {
        selector: '.storybook-text-soup-too-hot',
        states: [
            {
                    inPages: ['text-soup-too-hot'],
                delay: 0,
                exitType: 'fade',
                enterOffset: {
                    transform: 'translate(0, -40px)'
                },
                duration: defaultDuration * 2
            },
            {
                inPages: ['text-soup-too-cold', 'text-soup-just-right'],
                delay: 0,
                exitType: 'fade',
                enterOffset: {
                    opacity: 0.4
                },
                duration: defaultDuration * 2
            }
        ]
    },


    {
        selector: '.storybook-text-soup-too-cold',
        states: [
            {
                inPages: ['text-soup-too-cold'],
                delay: 0,
                exitType: 'fade',
                enterOffset: {
                    transform: 'translate(0, -40px)'
                },
                duration: defaultDuration * 2
            },
            {
                inPages: ['text-soup-just-right'],
                delay: 0,
                exitType: 'fade',
                enterOffset: {
                    opacity: 0.4
                },
                duration: defaultDuration * 2
            }
        ]
    },

    {
        selector: '.storybook-text-soup-just-right',
        states: [
        {
            inPages: ['text-soup-just-right'],
            delay: 0,
            exitType: 'fade',
            enterOffset: {
                transform: 'translate(0, -40px)'
            },
            duration: defaultDuration * 2
        }]
    },


    {
        selector: '.storybook-img-two-beds',
        states: [
        {
                inPages: ['goldilocks-finds-two-beds', 'text-bed-too-hard', 'text-bed-too-soft'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    

    {
        selector: '.storybook-text-bed-too-hard',
        states: [
            {
                    inPages: ['text-bed-too-hard'],
                delay: 0,
                exitType: 'fade',
                enterOffset: {
                    transform: 'translate(0, -40px)'
                },
                duration: defaultDuration * 2
            },
            {
                inPages: ['text-bed-too-soft'],
                delay: 0,
                exitType: 'fade',
                enterOffset: {
                    opacity: 0.4
                },
                duration: defaultDuration * 2
            }
        ]   
    },


    {
        selector: '.storybook-text-bed-too-soft',
        states: [
        {
            inPages: ['text-bed-too-soft'],
            delay: 0,
            exitType: 'fade',
            enterOffset: {
                transform: 'translate(0, -40px)'
            },
            duration: defaultDuration * 2
        }]
    },

    {
        selector: '.storybook-text-bed-just-right',
        states: [
        {
            inPages: ['text-bed-just-right'],
            delay: 0,
            exitType: 'fade',
            enterOffset: {
                transform: 'translate(0, -40px)'
            },
            duration: defaultDuration * 2
        }]
    },

    {
        selector: '.storybook-img-good-bed',
        states: [
        {
            inPages: ['goldilocks-finds-good-bed', 'text-bed-just-right'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    {
        selector: '.storybook-img-laptop',
        states: [
        {
            inPages: ['goldilocks-finds-laptop'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    {
        selector: '.page-structure-and-goals-allElements',
        states: [
        {
            inPages: ['structure-and-goals'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    {
        selector: '.page-square-color-constraints-allElements',
        states: [
        {
            inPages: ['square-color-constraints'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    // {
    //     selector: '.page-puzzles-to-solve-allElements',
    //     states: [
    //     {
    //         inPages: ['puzzles-to-solve'],
    //         delay: 500,
    //         exitType: 'fade',
    //         duration: defaultDuration
    //     }]
    // },

    


    {
        selector: '.puzzles-to-solve-text',
        states: [
            {
                inPages: ['puzzles-to-solve'],
                exitType: 'fly-top',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    top: 150,
                }
            },
        ]
    },


    {
        selector: '.puzzle-intro-easy',
        states: [
        {
            inPages: ['puzzles-to-solve'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: 540-300,
                left: 400,
            }
        }, {
            inPages: ['use-ai-goldilocks', ],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: 10,
                left: 400,
            }
        }, {
            inPages: [ 'evaluate-puzzles'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: 140,
                left: 400,
            }
        }]
    },

    {
        selector: '.puzzle-intro-hard',
        states: [
        {
            inPages: ['puzzles-to-solve'],
            exitType: 'fly-bottom',
            delay: 100,
            duration: defaultDuration,
            styles: {
                bottom: 540 - 300,
                left: 960,
            }
        },
        {
            inPages: ['use-ai-goldilocks'],
            exitType: 'fly-bottom',
            delay: 100,
            duration: defaultDuration,
            styles: {
                bottom: 10,
                left: 960,
            }
        },
        {
            inPages: ['evaluate-puzzles'],
            exitType: 'fly-bottom',
            delay: 100,
            duration: defaultDuration,
            styles: {
                bottom: 140,
                left: 960,
            }
        }]
    },

    {
        selector: '.puzzle-intro-medium',
        states: [
        {
            inPages: ['puzzles-to-solve'],
            exitType: 'fly-bottom',
            delay: 200,
            duration: defaultDuration,
            styles: {
                bottom: 540-300,
                left: 1520,
            }
        },
        {
            inPages: ['use-ai-goldilocks'],
            exitType: 'fly-bottom',
            delay: 200,
            duration: defaultDuration,
            styles: {
                bottom: 10,
                left: 1520,
            }
        },
        {
            inPages: ['evaluate-puzzles'],
            exitType: 'fly-bottom',
            delay: 200,
            duration: defaultDuration,
            styles: {
                bottom: 140,
                left: 1520,
            }
        }]
    },

    {
        selector: '.puzzle-intro-background',
        states: [
        {
            inPages: ['puzzles-to-solve'],
            exitType: 'fly-top',
            delay: 200,
            duration: defaultDuration,
            styles: {
                top: 0,
                left: 0,
            }
        }]
    },


    {
        selector: '.img-robot-looking-down',
        states: [{
            inPages: ['use-ai-goldilocks'],
            exitType: 'fly-top',
            delay: -0,
            duration: defaultDuration,
            styles: {
                top: 280,
                left: 1920/2
            }
        }]
    },


    {
        selector: '.but-why-text',
        states: [{
            inPages: ['but-why'],
            exitType: 'fly-left',
            delay: -0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 480,
                scale: 1
            }
        },
        {
            inPages: ['reasons-summary'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 160,
                top: 250,
                color: 'black',
                scale: 0.6
            },
        },
    
    ]
    },


    { 
        selector: '.but-why-reason-1',
        states: [{
            inPages: ['evaluate-puzzles'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 400,
                top: 200,
                'font-size': 90,
                color: 'black'
            }
        },
        {
            inPages: [
                'evaluate-puzzles',
                'empty-two-sized-grid',
                'combinations-two-sized-grid',
                'results-two-sized-grid',
                'blank-four-sized-grid',
                'combinations-four-sized-grid',
                'combinations-five-sized-grid',
                'showing-puzzle-from-witness-game',
                'find-interest-puzzles',
                'pick-puzzles-for-game',
                'dynamic-goldilocks',
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 150,
                top: 980,
                'font-size': 20,
                color: 'grey'
            },
            toggleClasses: {
                on: ['smallest-bullet'],
                off: ['smaller-bullet']
            }
        },
        
        {
            inPages: ['reasons-summary'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 306,
                top: 440,
                'font-size': 70,
                color: 'black'
            },
            toggleClasses: {
                off: ['smallest-bullet'],
                on: ['smaller-bullet']
            }
        },
        ]
    },
    


    {
        selector: '.but-why-reason-2',
        states: [{
            inPages: ['find-interest-puzzles'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 460,
                top: 160,
                'font-size': 90,
                color: 'black'
            }
        },
        {
            inPages: [
                // 'pick-puzzles-for-game', 'dynamic-goldilocks'
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 500,
                top: 980,
                'font-size': 20,
                color: 'grey'
            },
            toggleClasses: {
                on: ['smallest-bullet'],
                off: ['smaller-bullet']
            }
        },
        
        {
            inPages: [
                // 'reasons-summary'
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 306,
                top: 540,
                'font-size': 70,
                color: 'black'
            },
            toggleClasses: {
                off: ['smallest-bullet'],
                on: ['smaller-bullet']
            }
        },
        ]
    },



    {
        selector: '.but-why-reason-3',
        states: [{
            inPages: ['pick-puzzles-for-game'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 160,
                'font-size': 90,
                color: 'black'
            }
        },
        {
            inPages: [
                'dynamic-goldilocks', 
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 500,
                top: 980,
                'font-size': 20,
                color: 'grey'
            },
            toggleClasses: {
                on: ['smallest-bullet'],
                off: ['smaller-bullet']
            }
            
        },
        
        {
            inPages: ['reasons-summary'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {

                left: 306,
                top: 540,
                'font-size': 70,
                color: 'black'
                // left: 306,
                // top: 640,
                // 'font-size': 70,
                // color: 'black'
            },
            toggleClasses: {
                off: ['smallest-bullet'],
                on: ['smaller-bullet']
            }
        },
        ]
    },


    {
        selector: '.but-why-reason-4',
        states: [
        {
            inPages: [
                // 'reasons-summary'
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 306,
                top: 640,
                'font-size': 70,
                color: 'black'

                // left: 306,
                // top: 740,
                // 'font-size': 70,
                // color: 'black'
            }
        },
        ]
    },



    {
        selector: '.puzzle-1x1-combination',
        states: [
        {
            inPages: ['empty-two-sized-grid', 'combinations-two-sized-grid'],
            exitType: 'fly-top',
            delay: 0,
            duration: defaultDuration,
            styles: {
                top: 1080/2 - 165/2,
                left: 960 - 179 / 2,
                scale: 3.5
            }
        },
        {
            inPages: ['results-two-sized-grid'],
            exitType: 'fly-top',
            delay: 0,
            duration: defaultDuration,
            styles: {
                top: 1080 / 2 - 165 / 2 - 200,
                left: 960 - 179 / 2,
                scale: 2.5
            }
        },
      ]
    },

    // {
    //     selector: '.puzzle-1x1-combination .combinations path',
    //     states: [
    //     {
    //         inPages: ['combinations-two-sized-grid', 'results-two-sized-grid'],
    //         exitType: 'fade',
    //         delay: 0,
    //         duration: defaultDuration,
    //     },
    //     ]
    // },

    {
        selector: '.puzzle-1x1-combination-result',
        states: [
            {
                inPages: ['results-two-sized-grid'],
                exitType: 'fly-bottom',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    bottom: 250,
                    scale: 2.5
                }
            },
        ]
    },

    {
        selector: '.puzzle-blank-4x4',
        states: [
            {
                inPages: ['blank-four-sized-grid'],
                exitType: 'fly-top',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    top: 420,
                    scale: 2.5
                }
            },
            {
                inPages: ['combinations-four-sized-grid', 'combinations-five-sized-grid'],
                exitType: 'fly-top',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    top: 280,
                    scale: 2.5
                }
            },
        ]
    },

    {
        selector: '.num-4x4-combinations-text',
        states: [
            {
                inPages: ['combinations-four-sized-grid', 'combinations-five-sized-grid'],
                exitType: 'fly-bottom',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    bottom: 250
                }
            },
        ]
    },

    {
        selector: '.num-5x5-combinations-text',
        states: [
            {
                inPages: ['combinations-five-sized-grid'],
                exitType: 'fly-bottom',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    bottom: 150
                }
            },
        ]
    },

    {
        selector: '.puzzle-from-witness-game',
        states: [
            {
                inPages: ['showing-puzzle-from-witness-game'],
                exitType: 'fade', 
                delay: 0,
                duration: defaultDuration,
            },
        ]
    },


    {
        selector: '.puzzle-state-and-actions',
        states: [
            {
                inPages: [
                    'states-and-actions', 
                    'states-and-valid-actions', 
                    'local-entropy', 'uniform-entropy',
                    'uniform-solution-entropy-example',
                    'uniform-solution-entropy-title-and-outcome',
                    'solution-entropy-second-solution'
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: 400,
                    top: 1080/2-180,
                    scale: 2.5
                },
                runOnEnter: function ({ appInst }) {
                    console.log('renderNLooAhead: false')
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', false)
                },
            },
            {
                inPages: [
                    'comparing-a-and-l',
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: 340,
                    top: 1080 / 2 - 180,
                    scale: 2.5
                },
                runOnEnter: function ({ appInst }) {
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', false)
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .reset();
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .attemptMove([0,0]);
                },
            },
            {
                inPages: [
                    'muse-interpretation-lowest-entropy',
                    'muse-interpretation-oracle',
                    'local-entropy', 'uniform-entropy',
                    'muse-interpretation-recursive',
                    
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: 540,
                    top: 260,
                    scale: 1.8
                },
                runOnEnter: function ({ appInst }) {
                    console.log('renderNLooAhead: false')
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', false)
                },
            },

            {
                inPages: [
                    'muse-recursive-two-lines',
                    'muse-summary'
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: 200,
                    top: 260,
                    scale: 1.8
                },
                runOnEnter: function ({ appInst }) {
                    console.log('renderNLooAhead: false')
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', false)
                },
            },

            {
                inPages: [
                    'must-we-communicate-all-actions'
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: (1080+810)/2-120,
                    top: 360,
                    scale: 2.8
                },
                runOnEnter: function ({ appInst }) {
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', false);
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .reset();
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .attemptSolveWithPath([[0,1],[1,0],[0,1],[1,0],[0,-1],[1,0],[0,1],[0,1]]);
                },
            },


            {
                inPages: [
                    'puzzle-to-use-l',
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: (1080 + 810) / 2 - 120,
                    top: 280,
                    scale: 2.8
                },
                runOnEnter: function ({ appInst }) {
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', false);
                },
            },

            {
                inPages: [
                    'inference-rule-puzzle-example',
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: (1080 + 810) / 2 - 120,
                    top: 280,
                    scale: 2.8
                },
                runOnEnter: function ({ appInst }) {
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', false);
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .reset();
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .attemptMove([0, 1]);
                },
            },          

            {
                inPages: [
                    'showing-l',
                    'l-reduces-search-tree',
                    'n-step-lookahead',
                    'straight-line-policy'
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: (1080 + 810) / 2 - 120,
                    top: 280,
                    scale: 2.8
                },
                runOnEnter: function ({ appInst }) {
                    console.log('renderNLooAhead: !!!!!!!!!!!!!!!!!')
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', true)
                },
            },

            
        ]
    },


    {
        selector: '.states-and-actions-text-container',
        states: [
            {
                inPages: ['states-and-actions', 'states-and-valid-actions'],
                exitType: 'fly-right',
                delay: 100,
                duration: defaultDuration,
                styles: {
                    right: 550
                }
            },
        ]
    },


    {
        selector: '.states-and-actions-valid-actions-text',
        states: [
            {
                inPages: ['states-and-valid-actions'],
                exitType: 'fade',
                delay: 0,
                duration: defaultDuration,
            },
        ]
    },



    {
        selector: '.but-why-reason-img-2',
        states: [
        {
            inPages: ['find-interest-puzzles'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: -20
            }
        }
      ]
    },



    {
        selector: '.but-why-reason-img-3',
        states: [
        {
            inPages: ['pick-puzzles-for-game'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: -20
            }
        }
      ]
    },

    {
        selector: '.but-why-reason-img-4',
        states: [
            {
                inPages: [
                    'dynamic-goldilocks'
                ],
                exitType: 'fade',
                delay: 0,
                duration: defaultDuration
            }
        ]
    },

    

    {
        selector: '.toc-contribution',
        states: [{
            inPages: ['contributions-title', ],
            exitType: 'fly-left',
            delay: -0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 400,
                'font-size': 150,
                color: 'black',
            }
        },
        {
            inPages: ['contribution-two-measures','contribution-validation',
            'contribution-start'
        ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 250,
                top: 230,
                'font-size': 120,
                color: 'black',
            }
        },
        {
            inPages: [
                'how-title-section', 
                'experiment-and-results-title-section',
                'conclusion-title-slide'
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 320,
                'font-size': 50,
                color: '#AAA',
            }
        },
        
        // {
        //     inPages: [
        //         'questions-and-thank-you'
        //     ],
        //     exitType: 'fly-left',
        //     delay: 0,
        //     duration: defaultDuration,
        //     styles: {
        //         left: 220,
        //         top: 100,
        //         'font-size': 120,
        //         color: 'black',
        //     }
        // },

        ]
    },

    {
        selector: '.contribution-two-measures-text',
        states: [{
            inPages: [
                'contribution-two-measures',
                'contribution-validation',
                'contribution-start'
            ],
            exitType: 'fly-left',
            delay: -0,
            duration: defaultDuration,
            styles: {
                left: 250,
                top: 430,
            }
        },

        ]
    },

    {
        selector: '.contribution-validation-text',
        states: [{
            inPages: ['contribution-validation','contribution-start'],
            exitType: 'fly-left',
            delay: -0,
            duration: defaultDuration,
            styles: {
                left: 280,
                top: 550,
            }
        },

        ]
    },


    {
        selector: '.toc-title',
        states: [
            {
            inPages: ['how-title-section',
                'experiment-and-results-title-section',
                'conclusion-title-slide'
            ],
            exitType: 'fly-left',
            delay: -0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 60,
                'font-size': 80,
                color: '#222',
                'border-color': '#222'
            }
        },

        ]
    },


    {
        selector: '.toc-intro',
        states: [
            {
                inPages: ['how-title-section',
                'experiment-and-results-title-section',
                'conclusion-title-slide'
                ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 200,
                'font-size': 50,
                color: '#AAA'
            }
        },

        ]
    },

    {
        selector: '.toc-why',
        states: [
            {
                inPages: ['how-title-section', 
                'experiment-and-results-title-section',
                'conclusion-title-slide'
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 260,
                'font-size': 50,
                color: '#AAA'
            }
        },

        ]
    },



    {
        selector: '.toc-how',
        states: [
        {
            inPages: ['how-title-section',],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 400,
                'font-size': 150,
                color: 'black'
            }
        },
        {
            inPages: ['experiment-and-results-title-section',
                'conclusion-title-slide'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 380,
                'font-size': 50,
                color: '#AAA'
            }
        },
        ]
    },

    {
        selector: '.toc-experiments-and-results',
        states: [{
            inPages: ['how-title-section',],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 620,
                'font-size': 50,
                color: '#777'
            }
        },
        {
            inPages: ['experiment-and-results-title-section'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 480,
                'font-size': 150,
                color: 'black'
            }
            },
            {
                inPages: ['conclusion-title-slide'],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: 300,
                    top: 440,
                    'font-size': 50,
                    color: '#AAA'
                }
            },

        ]
    },

    {
        selector: '.toc-conclusion',
        states: [{
            inPages: ['how-title-section',],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 680,
                'font-size': 50,
                color: '#777'
            }
        },
        {
            inPages: ['experiment-and-results-title-section',],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 740,
                'font-size': 50,
                color: '#777'
            }
        },
        {
            inPages: ['conclusion-title-slide'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 292,
                top: 540,
                'font-size': 150,
                color: 'black'
            }
            },

        ]
    },

    {
        selector: '.toc-questions',
        states: [{
            inPages: ['how-title-section',],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 740,
                'font-size': 50,
                color: '#777'
            }
        },
        {
            inPages: ['experiment-and-results-title-section',],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 800,
                'font-size': 50,
                color: '#777'
            }
        },
        {
            inPages: ['conclusion-title-slide',],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 300,
                top: 800,
                'font-size': 50,
                color: '#777'
            }
        },
        {
            inPages: ['questions-and-thank-you',],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 200,
                top: 400,
                'font-size': 150,
                color: 'black'
            }
        },

        ]
    },




    {
        selector: '.how-img-oracle, .puzzles-orb',
        states: [
        {
            inPages: [
                'how-main-idea', 
                'how-communicate-solution',
                'goal-of-communicating-solution',
                'revisit-goal-of-communicating-solution',
                'goal-now-minimum-bits',
                'remuse-revisit-min-bits-goal'
            ],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },


    {
        selector: '.how-oracle-text',
        states: [{
            inPages: [
                'how-communicate-solution',
                'goal-of-communicating-solution',
                'revisit-goal-of-communicating-solution',
                'goal-now-minimum-bits'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.latex-information-theory-entropy-formula',
        states: [{
            inPages: ['entropy-formula'],
            exitType: 'fly-top',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 160,
                top: 440,
                'font-size': 54
            }
        },{
            inPages: [
                'entropy-basic-explanation',
                'entropy-coin-intro',
                'entropy-coin-outcomes',
                'entropy-coin-probabilities',
                'entropy-coin-full-calculation',

                'entropy-communications-explanation',
                'entropy-puzzle-intro',
                'entropy-puzzle-outcomes',
                'entropy-puzzle-probabilities',
                'entropy-puzzle-full-calculation'
            ],
            exitType: 'fly-top',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 160,
                top: 160,
                'font-size': 54
            }
        },

        ]
    },


    {
        selector: '.explanation-coin-random-variable',
        states: [{
            inPages: [ 'entropy-basic-explanation'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 160,
                top: 300,
                'font-size': 60,
                width: 1560
            }
        },{
            inPages: [
                'entropy-coin-intro',
                'entropy-coin-outcomes',
                'entropy-coin-probabilities',
                'entropy-coin-full-calculation'
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 160,
                top: 300,
                'font-size': 40,
                width: 1560
            }
        },

        ]
    },




    {
        selector: '.explanation-coin-z',
        states: [{
            inPages: [
                'entropy-coin-intro', 
                'entropy-coin-outcomes',
                'entropy-coin-probabilities',
                'entropy-coin-full-calculation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    
    {
        selector: '.entropy-coin-img',
        states: [{
            inPages: [
                'entropy-coin-intro', 
                'entropy-coin-outcomes',
                'entropy-coin-probabilities',
                'entropy-coin-full-calculation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.explanation-z-outcomes',
        states: [{
            inPages: [
                'entropy-coin-outcomes',
                'entropy-coin-probabilities',
                'entropy-coin-full-calculation'
            ],
            exitType: 'fade',
            exitOptions: {
                display: 'inline-block'
            },
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.explanation-coin-probabilities',
        states: [{
            inPages: [
                'entropy-coin-probabilities',
                'entropy-coin-full-calculation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.explanation-coin-use-formula',
        states: [{
            inPages: [
                'entropy-coin-full-calculation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.explanation-coin-1-bit',
        states: [{
            inPages: [
                'entropy-coin-tails-representation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.entropy-coin-heads-img, .bit-representation-coin-0',
        states: [{
            inPages: [
                'intuition-bits-coin',
                'entropy-coin-tails-representation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.entropy-coin-tails-img, .bit-representation-coin-1',
        states: [{
            inPages: [
                'intuition-bits-coin',
                'entropy-coin-tails-representation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },




    {
        selector: '.explanation-puzzle-random-variable',
        states: [{
            inPages: [
                'entropy-communications-explanation',
                'entropy-puzzle-intro',
                'entropy-puzzle-outcomes',
                'entropy-puzzle-probabilities',
                'entropy-puzzle-full-calculation'
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 160,
                top: 300,
                'font-size': 40,
                width: 1560
            }
        },

        ]
    },


    {
        selector: '.explanation-puzzle-z',
        states: [{
            inPages: [
                'entropy-puzzle-intro',
                'entropy-puzzle-outcomes',
                'entropy-puzzle-probabilities',
                'entropy-puzzle-full-calculation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.entropy-puzzle-img',
        states: [{
            inPages: [

                'entropy-puzzle-intro',
                'entropy-puzzle-outcomes',
                'entropy-puzzle-probabilities',
                'entropy-puzzle-full-calculation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.explanation-puzzle-z-outcomes',
        states: [{
            inPages: [
                'entropy-puzzle-outcomes',
                'entropy-puzzle-probabilities',
                'entropy-puzzle-full-calculation'
            ],
            exitType: 'fade',
            exitOptions: {
                display: 'inline-block'
            },
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.explanation-puzzle-probabilities',
        states: [{
            inPages: [
                'entropy-puzzle-probabilities',
                'entropy-puzzle-full-calculation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.explanation-puzzle-use-formula',
        states: [{
            inPages: [
                'entropy-puzzle-full-calculation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.explanation-puzzle-2-bits',
        states: [{
            inPages: [
                'entropy-puzzle-representation'
                // 'entropy-puzzle-heads-representation',
                // 'entropy-puzzle-tails-representation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.entropy-puzzle-rep-allElements',
        states: [{
            inPages: [
                'entropy-puzzle-representation',
                'intuition-bits-communicating'
                // 'entropy-puzzle-heads-representation',
                // 'entropy-puzzle-tails-representation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.local-entropy-text-container',
        states: [
            {
                inPages: ['local-entropy', 'uniform-entropy'],
                exitType: 'fly-right',
                delay: 100,
                duration: defaultDuration,
                styles: {
                    right: 590
                }
            },
        ]
    },

    {
        selector: '.local-entropy-algorithm-title',
        states: [{
            inPages: [
                'uniform-entropy'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.solution-entropy-valid-a-text-container',
        states: [
            {
                inPages: ['uniform-solution-entropy-example', 'uniform-solution-entropy-title-and-outcome'],
                exitType: 'fly-right',
                delay: 100,
                duration: defaultDuration,
                styles: {
                    right: 550
                }
            },
        ]
    },


    {
        selector: '.solution-entropy-valid-a-total',
        states: [
            {
                inPages: ['uniform-solution-entropy-title-and-outcome'],
                exitType: 'fade',
                delay: 100,
                duration: defaultDuration,
            },
        ]
    },

    {
        selector: '.uniform-solution-entropy-algorithm-title',
        states: [
            {
                inPages: [
                    'uniform-solution-entropy-title-and-outcome',
                    'solution-entropy-second-solution'
                ],
                exitType: 'fade',
                delay: 100,
                duration: defaultDuration,
            },
        ]
    },

    {
        selector: '.puzzle-second-solution',
        states: [
            {
                inPages: [
                    'solution-entropy-second-solution',
                    // 'local-entropy', 'uniform-entropy',
                    // 'uniform-solution-entropy-example',
                    // 'uniform-solution-entropy-title-and-outcome'
                ],
                exitType: 'fly-right',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    top: 1080/2-180,
                    right: 420,
                    scale: 2.5
                }
            },
            {
                inPages: [
                    'muse-interpretation-lowest-entropy',
                    'muse-interpretation-oracle',
                    'muse-interpretation-recursive',
                    // 'local-entropy', 'uniform-entropy',
                    // 'uniform-solution-entropy-example',
                    // 'uniform-solution-entropy-title-and-outcome'
                ],
                exitType: 'fly-right',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    right: 560,
                    top: 260,
                    scale: 1.8
                }
            },
        ]
    },




    {
        selector: '.how-oracle-text-strike-information-bits',
        states: [{
            inPages: [
                'goal-now-minimum-bits'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },




    {
        selector: '.how-oracle-minimum-text',
        states: [{
            inPages: [
                'goal-now-minimum-bits'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration * 2,
            enterOffset: {
                transform: 'translate(0, -40px)'
            },
        },

        ]
    },




    {
        selector: '.muse-algorithm-title',
        states: [{
            inPages: [
                'muse-first-definition',
                'muse-interpretation-lowest-entropy',
                'muse-interpretation-oracle',
                'muse-interpretation-recursive',
                'muse-recursive-two-lines',
                'must-we-communicate-all-actions',
                'muse-summary'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.muse-explanation-solution-with-lowest-entropy',
        states: [{
            inPages: [
                'muse-interpretation-lowest-entropy',
                'muse-interpretation-oracle',
                'muse-interpretation-recursive',
                'muse-recursive-two-lines',
                'muse-summary'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.muse-explanation-oracle',
        states: [{
            inPages: [
                'muse-interpretation-oracle',
                'muse-interpretation-recursive',
                'muse-recursive-two-lines',
                'muse-summary'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.muse-explanation-recursive',
        states: [{
            inPages: [
                'muse-interpretation-recursive',
                'muse-recursive-two-lines',
                'muse-summary'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.muse-recursive-code-text',
        states: [
            {
                inPages: ['muse-recursive-two-lines'],
                exitType: 'fly-right',
                delay: 100,
                duration: defaultDuration,
                styles: {
                    right: 680
                }
            },

        ]
    },



    {
        selector: '.muse-must-we-communicate-all-actions-text',
        states: [
            {
                inPages: ['must-we-communicate-all-actions'],
                exitType: 'fly-bottom',
                delay: 100,
                duration: defaultDuration,
                styles: {
                    bottom: 130
                }
            },

        ]
    },



    {
        selector: '.muse-jigsaw-example-inference-rules',
        states: [
            {
                inPages: ['introducing-inference-rules'],
                exitType: 'fly-bottom',
                delay: 100,
                duration: defaultDuration,
                styles: {
                    bottom: 150,
                    'font-size': 80
                }
            },

        ]
    },


    {
        selector: '.muse-jigsaw-example-img',
        states: [
            {
                inPages: ['jigsaw-example', 
                'jigsaw-question-mark',
                'introducing-inference-rules'],
                exitType: 'fade',
                delay: 100,
                duration: defaultDuration,
            },

        ]
    },


    {
        selector: '.muse-jigsaw-question-mark-text',
        states: [
            {
                inPages: ['jigsaw-question-mark', 'introducing-inference-rules'],
                exitType: 'fade',
                delay: 100,
                enterOffset: {
                    transform: 'translate(0, -40px)'
                },
                duration: defaultDuration,
            }, 

        ]
    },



    {
        selector: '.muse-question-do-both-actions-text',
        states: [
            {
                inPages: ['inference-rule-puzzle-example'],
                exitType: 'fade',
                delay: 100,
                enterOffset: {
                    transform: 'translate(0, -40px)'
                },
                duration: defaultDuration,
            },

        ]
    },
    


    {
        selector: '.muse-introducing-l-text',
        states: [
            {
                inPages: ['puzzle-to-use-l'],
                exitType: 'fade',
                delay: 100,
                duration: defaultDuration,
            },

        ]
    },




    {
        selector: '.muse-entropy-a-and-l-text-container',
        states: [
            {
                inPages: ['comparing-a-and-l'],
                exitType: 'fly-right',
                delay: 100,
                duration: defaultDuration,
                styles: {
                    right: 200
                }
            },
        ]
    },



    {
        selector: '.muse-visualizing-l-text',
        states: [
            {
                inPages: ['showing-l'],
                exitType: 'fade',
                delay: 100,
                duration: defaultDuration,
            },

        ]
    },




    {
        selector: '.muse-l-reduces-search-tree',
        states: [
            {
                inPages: ['l-reduces-search-tree'],
                exitType: 'fade',
                delay: 100,
                duration: defaultDuration,
            },

        ]
    },




    {
        selector: '.muse-n-step-lookahead',
        states: [
            {
                inPages: ['n-step-lookahead'],
                exitType: 'fade',
                delay: 100,
                duration: defaultDuration,
            },

        ]
    },


    {
        selector: '.muse-straight-line-policy',
        states: [
            {
                inPages: ['straight-line-policy'],
                exitType: 'fade',
                delay: 100,
                duration: defaultDuration,
            },

        ]
    },



    {
        selector: '.muse-recursive-summary-code-text',
        states: [
            {
                inPages: ['muse-summary'],
                exitType: 'fly-right',
                delay: 100,
                duration: defaultDuration,
                styles: {
                    right: 680
                }
            },

        ]
    },



    {
        selector: '.remuse-revisit-min-goal-text',
        states: [{
            inPages: [
                'remuse-revisit-min-bits-goal',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.remuse-img-easy-paths',
        states: [{
            inPages: [
                'remuse-story-good-paths',
                'remuse-story-good-paths-oracle-question'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.remuse-easy-paths-question-text',
        states: [{
            inPages: [
                'remuse-story-good-paths-oracle-question',
            ],
            exitType: 'fade',
            enterOffset: {
                transform: 'translate(0, -40px)'
            },
            delay: 0,
            duration: defaultDuration * 2,
        },

        ]
    },

    {
        selector: '.remuse-kl-divergence-title',
        states: [{
            inPages: [
                'kl-divergence',
                'kl-divergence-description',
                'kl-divergence-connection-to-remuse',
                'kl-divergence-formula',
                'kl-divergence-example',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },
        ]
    },

    {
        selector: '.remuse-kl-divergence-description',
        states: [{
            inPages: [
                'kl-divergence-description',
                'kl-divergence-connection-to-remuse',
                'kl-divergence-formula',
                'kl-divergence-example',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },
        ]
    },

    {
        selector: '.remuse-algorithm-title',
        states: [{
            inPages: [
                'kl-divergence-connection-to-remuse',
                'kl-divergence-formula',
                'kl-divergence-example',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },
        ]
    },

    {
        selector: '.remuse-kl-divergence-formula-text',
        states: [{
            inPages: [
                'kl-divergence-formula',
                'kl-divergence-example',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },
        ]
    },

    {
        selector: '.remuse-kl-divergence-equal-output',
        states: [{
            inPages: [
                'kl-divergence-example',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },
        ]
    },




    {
        selector: '.puzzle-remuse-already-won',
        states: [
            {
                inPages: [
                    'remuse-first-puzzle-first-example',
                    'remuse-first-puzzle-show-entropies',
                    'remuse-first-puzzle-show-probabilities',
                    'remuse-first-puzzle-show-muse',
                    'remuse-first-puzzle-show-remuse',
                    'remuse-first-puzzle-reveal-playable'
                ],
                exitType: 'fade',
                delay: 0,
                duration: defaultDuration,
                runOnEnter: function ({ appInst }) {
                    console.log('---------')
                    appInst.puzzlesByClassTarget['puzzle-remuse-already-won']
                        .setOption('renderNLookAhead', false)

                    appInst.puzzlesByClassTarget['puzzle-remuse-already-won']
                        .attemptMove([0, 0])

                    d3.select('.puzzle-remuse-already-won svg .snakeHeadCircle')
                        .attr('r', 13)
                        .attr('fill', 'rgb(102, 102, 238)')

                    // setTimeout(()=> {
                    //     console.log('attemptMove')
                    //     appInst.puzzlesByClassTarget['puzzle-remuse-already-won']
                    //         .attemptMove([0, 1])
                        
                    // }, 1000)
                },
            }, 

        ]
    },

    {
        selector: '.remuse-actions-tabletop-puzzle-remuse-already-won',
        states: [
            {
                inPages: [
                    'remuse-first-puzzle-first-example',
                    'remuse-first-puzzle-show-entropies',
                    'remuse-first-puzzle-show-probabilities',
                    'remuse-first-puzzle-show-muse',
                    'remuse-first-puzzle-show-remuse',
                    'remuse-first-puzzle-reveal-playable'
                ],
                exitType: 'fade',
                delay: 0,
                duration: defaultDuration,
            },

        ]
    },

    

    {
        selector: '.focus-circle-cover',
        states: [
            {
                inPages: [
                    'remuse-intuition-local',
                ],
                exitType: 'fade',
                delay: 0,
                duration: defaultDuration / 2,
            },

        ]
    },


    {
        selector: '.remuse-table-puzzle-remuse-already-won',
        states: [{
            inPages: [
                'remuse-first-puzzle-show-entropies',
                'remuse-first-puzzle-show-probabilities',
                'remuse-first-puzzle-show-muse',
                'remuse-first-puzzle-show-remuse',
                'remuse-first-puzzle-reveal-playable'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.puzzle-remuse-intuition',
        states: [{
            inPages: [
                'remuse-intuition-local',
                'remuse-intuition-oracle'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
            runOnEnter: function ({ appInst }) {
                console.log('---------')
                appInst.puzzlesByClassTarget['puzzle-remuse-intuition']
                    .setOption('renderNLookAhead', false)

                appInst.puzzlesByClassTarget['puzzle-remuse-intuition']
                    .attemptMove([0, 0])

                d3.select('.puzzle-remuse-intuition svg .snakeHeadCircle')
                    .attr('r', 13)
                    .attr('fill', 'rgb(102, 102, 238)')
            },
        },

        ]
    },



    

    {
        selector: '.remuse-prob-fields-puzzle-remuse-already-won',
        states: [{
            inPages: [
                'remuse-first-puzzle-show-probabilities',
                'remuse-first-puzzle-show-muse',
                'remuse-first-puzzle-show-remuse',
                'remuse-first-puzzle-reveal-playable'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.remuse-results-bottom-puzzle-remuse-already-won .remuse-muse-algorithm-section',
        states: [{
            inPages: [
                'remuse-first-puzzle-show-muse',
                'remuse-first-puzzle-show-remuse',
                'remuse-first-puzzle-reveal-playable'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.remuse-results-bottom-puzzle-remuse-already-won .remuse-remuse-algorithm-section',
        states: [{
            inPages: [
                'remuse-first-puzzle-show-remuse',
                'remuse-first-puzzle-reveal-playable'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },





    {
        selector: '.puzzle-remuse-only-one-solution',
        states: [
            {
                inPages: [
                    'remuse-second-puzzle',
                ],
                exitType: 'fade',
                delay: 0,
                duration: defaultDuration,
                runOnEnter: function ({ appInst }) {
                    appInst.puzzlesByClassTarget['puzzle-remuse-only-one-solution']
                        .attemptMove([0, 0])

                    d3.select('.puzzle-remuse-only-one-solution svg .snakeHeadCircle')
                        .attr('r', 13)
                        .attr('fill', 'rgb(102, 102, 238)')

                },
            },

        ]
    },



    {
        selector: 
            '.remuse-actions-tabletop-puzzle-remuse-only-one-solution, '
            + '.remuse-table-puzzle-remuse-only-one-solution, '
            + '.remuse-results-bottom-puzzle-remuse-only-one-solution ',
        states: [{
            inPages: [
                'remuse-second-puzzle',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.remuse-img-bad-paths',
        states: [{
            inPages: [
                'remuse-story-hard-paths',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.remuse-bad-paths-question-text',
        states: [{
            inPages: [
                'remuse-story-hard-paths',
            ],
            exitType: 'fade',
            enterOffset: {
                transform: 'translate(0, -40px)'
            },
            delay: 0,
            duration: defaultDuration * 2,
        },

        ]
    },
    

    {
        selector: '.windmill-page-allElements',
        states: [{
            inPages: [
                'intro-to-windmill',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.dotplot-page-allElements',
        states: [{
            inPages: [
                'results-chart',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.results-windmill-main-table',
        states: [{
            inPages: [
                'table-of-correlations',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.results-compare-remuse-and-soln-length-img',
        states: [{
            inPages: [
                'comparing-solution-length-with-remuse',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.results-puzzle-ordering-game-img',
        states: [{
            inPages: [
                'ordering-of-puzzles-to-the-game',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.results-puzzle-ordering-equidistant-img',
        states: [{
            inPages: [
                'ordering-of-puzzles-to-the-levi-research',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.results-distribution-3x3-img',
        states: [{
            inPages: [
                'distribution-3x3-puzzles',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.results-distribution-3x4-img',
        states: [{
            inPages: [
                'distribution-3x4-puzzles',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.results-triangle-1-img',
        states: [{
            inPages: [
                'triangle-slitherlink',
                'triangle-constraint-puzzle',
                'triangle-remuse-correlation',
                'triangle-average-length-correlation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.results-triangle-2-img',
        states: [{
            inPages: [
                'triangle-constraint-puzzle',
                'triangle-remuse-correlation',
                'triangle-average-length-correlation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.results-triangle-3-img',
        states: [{
            inPages: [
                'triangle-remuse-correlation',
                'triangle-average-length-correlation'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.results-triangle-4-img',
        states: [{
            inPages: [
                'triangle-average-length-correlation',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.future-work-01',
        states: [{
            inPages: [
                'future-work-other-games',
                'future-work-implications'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.future-work-02',
        states: [{
            inPages: [
                'future-work-inference-rules',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.future-work-03',
        states: [{
            inPages: [
                'future-work-co-design-tool',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    // {
    //     selector: '.future-work-03',
    //     states: [{
    //         inPages: [
    //             'future-work-implications',
    //         ],
    //         exitType: 'fade',
    //         delay: 0,
    //         duration: defaultDuration,
    //     },

    //     ]
    // },


    {
        selector: '.future-work-01-02',
        states: [{
            inPages: [
                'future-work-implications',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.presentation-qr-code',
        states: [{
            inPages: [
                'questions-and-thank-you',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.thesis-link > svg, .thesis-link div',
        states: [{
            inPages: [
                'questions-and-thank-you',
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ] 
    },



    {
        selector: '.conclusion-title',
        states: [{
            inPages: [
                'conclusion-summary',
                'conclusion-measures',
                'conclusion-positive-correlation',
                'conclusion-better-correlation',
                'conclusion-ordering',
                'conclusion-final-thought',
                'questions-and-thank-you'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.conclusion-measures',
        states: [{
            inPages: [
                'conclusion-measures',
                'conclusion-positive-correlation',
                'conclusion-better-correlation',
                'conclusion-ordering',
                'conclusion-final-thought',
                'questions-and-thank-you'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },



    {
        selector: '.conclusion-positive-correlation',
        states: [{
            inPages: [
                'conclusion-positive-correlation',
                'conclusion-better-correlation',
                'conclusion-ordering',
                'conclusion-final-thought',
                'questions-and-thank-you'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },


    {
        selector: '.conclusion-better-correlation',
        states: [{
            inPages: [
                'conclusion-better-correlation',
                'conclusion-ordering',
                'conclusion-final-thought',
                'questions-and-thank-you'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },
    {
        selector: '.conclusion-ordering',
        states: [{
            inPages: [
                'conclusion-ordering',
                'conclusion-final-thought',
                'questions-and-thank-you'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },

    {
        selector: '.conclusion-final-thought',
        states: [{
            inPages: [
                'conclusion-final-thought',
                'questions-and-thank-you'
            ],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },

        ]
    },









]