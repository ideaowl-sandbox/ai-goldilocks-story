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
                right: 80,
                scale: 1
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
                top: 430,
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
                top: 150,
                color: 'black',
                scale: 0.6
            }
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
            }
        },
        
        {
            inPages: ['reasons-summary'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 306,
                top: 420,
                'font-size': 70,
                color: 'black'
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
                'pick-puzzles-for-game', 'dynamic-goldilocks'
            ],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 500,
                top: 980,
                'font-size': 20,
                color: 'grey'
            }
        },
        
        {
            inPages: ['reasons-summary'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 306,
                top: 520,
                'font-size': 70,
                color: 'black'
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
                left: 840,
                top: 980,
                'font-size': 20,
                color: 'grey'
            }
        },
        
        {
            inPages: ['reasons-summary'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 306,
                top: 620,
                'font-size': 70,
                color: 'black'
            }
        },
        ]
    },


    {
        selector: '.but-why-reason-4',
        states: [
        {
            inPages: ['reasons-summary'],
            exitType: 'fly-left',
            delay: 0,
            duration: defaultDuration,
            styles: {
                left: 306,
                top: 720,
                'font-size': 70,
                color: 'black'
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

    {
        selector: '.puzzle-1x1-combination .combinations path',
        states: [
        {
            inPages: ['combinations-two-sized-grid', 'results-two-sized-grid'],
            exitType: 'fade',
            delay: 0,
            duration: defaultDuration,
        },
        ]
    },

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
                    'solution-entropy-second-solution',
                    'comparing-a-and-l',
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: 400,
                    top: 1080/2-180,
                    scale: 2.5
                }
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
                }
            },

            {
                inPages: [
                    'muse-recursive-two-lines',
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: 200,
                    top: 260,
                    scale: 1.8
                }
            },

            {
                inPages: [
                    'must-we-communicate-all-actions',
                    'inference-rule-puzzle-example'
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: (1080+810)/2-120,
                    top: 360,
                    scale: 2.8
                }
            },

            {
                inPages: [
                    'puzzle-showing-l',
                    'comparing-a-and-l'
                ],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: (1080 + 810) / 2 - 120,
                    top: 60,
                    scale: 2.8
                },
                runOnEnter: function ({ appInst }) {
                    // return;
                    console.log('option set')
                    const puzzle = appInst.puzzlesByClassTarget['puzzle-state-and-actions'];
                    // puzzle
                    //     .setOption('userInterface', true);
                    puzzle
                        setOption('renderNLookAhead', true)
                    puzzle.reset();
                    puzzle.attemptMove([1, 0]);
return;


                    puzzle
                        .setOption('userInterface', true);

                    puzzle
                        .setOption('renderNLookAhead', true)
                    puzzle.reset();
                    puzzle.attemptMove([1, 0]);
                },
                runOnExit: function ({ appInst }) {
                    console.log('exit js')
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('renderNLookAhead', false)
                    appInst.puzzlesByClassTarget['puzzle-state-and-actions']
                        .setOption('userInterface', false)
                }
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
                inPages: ['dynamic-goldilocks'],
                exitType: 'fade',
                delay: 0,
                duration: defaultDuration
            }
        ]
    },

    

    {
        selector: '.contribution-contribution-title',
        states: [{
            inPages: ['contributions-title'],
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
            inPages: ['contribution-two-measures','contribution-validation'],
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
            inPages: ['how-title-section'],
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

        ]
    },

    {
        selector: '.contribution-two-measures-text',
        states: [{
            inPages: ['contribution-two-measures','contribution-validation'],
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
            inPages: ['contribution-validation',],
            exitType: 'fly-left',
            delay: -0,
            duration: defaultDuration,
            styles: {
                left: 250,
                top: 560,
            }
        },

        ]
    },


    {
        selector: '.toc-title',
        states: [{
            inPages: ['how-title-section',],
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
        states: [{
            inPages: ['how-title-section',],
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
        states: [{
            inPages: ['how-title-section',],
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
        states: [{
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
        // {
        //     inPages: ['how-main-idea',],
        //     exitType: 'fly-left',
        //     delay: 0,
        //     duration: defaultDuration,
        //     styles: {
        //         left: 750,
        //         top: 80,
        //         'font-size': 200,
        //         color: 'black'
        //     }
        // },

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

        ]
    },




    {
        selector: '.how-img-oracle',
        states: [
        {
            inPages: [
                'how-main-idea', 
                'how-communicate-solution',
                'goal-of-communicating-solution',
                'revisit-goal-of-communicating-solution',
                'goal-now-minimum-bits'
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
                'font-size': 60
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
                'font-size': 60
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
                'entropy-coin-what-is-1-bit',
                'entropy-coin-heads-representation',
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
                'entropy-coin-heads-representation',
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
                'entropy-puzzle-what-is-2-bits',
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
                    'muse-interpretation-recursive'
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










]