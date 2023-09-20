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
            delay: 1000,
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
            inPages: ['puzzles-to-solve', 'test-puzzles'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: 540-300,
                left: 400,
            }
        }, {
            inPages: ['use-ai-goldilocks'],
            exitType: 'fly-bottom',
            delay: 0,
            duration: defaultDuration,
            styles: {
                bottom: 10,
                left: 400,
            }
        }]
    },

    {
        selector: '.puzzle-intro-hard',
        states: [
        {
            inPages: ['puzzles-to-solve', 'test-puzzles'],
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
        }]
    },

    {
        selector: '.puzzle-intro-medium',
        states: [
        {
            inPages: ['puzzles-to-solve', 'test-puzzles'],
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
            delay: -700,
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
                left: 300
            }
        }]
    },





]