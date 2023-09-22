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
            inPages: ['goldilocks-finds-cabin'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    {
        selector: '.storybook-img-soup',
        states: [
        {
            inPages: ['goldilocks-finds-soup'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    {
        selector: '.storybook-img-two-beds',
        states: [
        {
            inPages: ['goldilocks-finds-two-beds'],
            delay: 0,
            exitType: 'fade',
            duration: defaultDuration
        }]
    },

    {
        selector: '.storybook-img-good-bed',
        states: [
        {
            inPages: ['goldilocks-finds-good-bed'],
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
                inPages: ['states-and-actions'],
                exitType: 'fly-left',
                delay: 0,
                duration: defaultDuration,
                styles: {
                    left: 450,
                    scale: 2.5
                }
            },
        ]
    },


    {
        selector: '.states-and-actions-states-text',
        states: [
            {
                inPages: ['states-and-actions'],
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










]