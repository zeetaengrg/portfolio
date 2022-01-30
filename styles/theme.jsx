import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            'html, body' : {
                backgroundColor: '#1a1a2e',
                color: '#B4A5A5',
                fontFamily: '"Roboto Mono", monospace',
                scrollBehavior: 'smooth',
            },
            
            a : {
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                fontWeight: '500',
                position: 'relative',
                _hover: {
                    textDecoration: 'none',
                    color: '#fff',
                },

                '&::after' : {
                    content: '" "',
                    position: 'absolute',
                    left: '0',
                    bottom: '0',
                    width: '100%',
                    height: '1px',
                    background: 'white',
                    transform: 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.2s ease-in-out',
                },

                '&:hover::after' : {
                    transform: 'scaleX(1)',
                    transformOrigin: 'center',
                }
            }
        }
    }
});