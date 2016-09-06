module.exports = {
    cssDest: './main.css',
    options: {
        namespace: '#atomic',
    },
    configs: {
        breakPoints: {
            sm: '@media screen(min-width=750px)',
            md: '@media(min-width=1000px)',
            lg: '@media(min-width=1200px)'
        },
        custom: {
            '1': '1px solid #000',
        },
        classNames: []
    }
}