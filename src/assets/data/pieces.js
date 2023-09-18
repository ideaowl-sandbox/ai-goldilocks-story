export const pieces = [
    {
        selector: '.intro-title',        
        states: [{
            inPages: ['start'],
            transitionType: 'fly-top',
            delay: 100,
            duration: 500,
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
            transitionType: 'fly-left',
            delay: 100,
            duration: 500,
            styles: {
                top: 350,
                left: 150
            }
        }]
    },

]