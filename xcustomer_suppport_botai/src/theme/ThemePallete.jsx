
export const getThemePallete = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light' ? {
            primary: {
                main: '#D7C7F4',
                light: '#fff',
                dark: '#AF9FCD',
                bglight: '#fafafa',
                bgtheme: '#FAF7FF',
                bg: '#AF9FCD'
            },
            text: {
                primary: '#000000',
                secondary: 'rgba(0,0,0,0.5)',
            }
        } : {
            primary: {
                main: '#34303d',
                light: '#3d3b41',
                dark: '#2a2730',
                bglight: '#212025',
                bgtheme: '#212025',
                bg: '#2a2730'
            },
            text: {
                primary: '#ffffff',
                secondary: 'rgba(255,255,255,0.7)',
            }
        })
    },
    typography: {
        fontFamily: 'ubuntu, sans-serif',
        h1: {
            fontFamily: 'opensans, sans-serif',
            fontSize: 32,
        },
        h2: {
            fontFamily: 'Ubuntu, sans-serif',
            color: 'text.primary',
            fontSize: 28,
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: 22,
            },
        },
        h3: {
            fontFamily: 'opensans, sans-serif',
        },
        heading: {
            fontFamily: 'Ubuntu, sans-serif',
        },
        body: {
            fontFamily: 'ubuntu, sans-serif',
            border: '1px solid',
            color: '#3C3C3C',
            background: '#FFFFFF',
        },
    },
    components: {
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})