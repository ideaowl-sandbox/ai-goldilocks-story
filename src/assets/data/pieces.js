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
            delay: 300,
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
            delay: 400,
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
            duration: defaultDuration,
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
            delay: 500,
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
            delay: 200,
            duration: defaultDuration,
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
            delay: 500,
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

]