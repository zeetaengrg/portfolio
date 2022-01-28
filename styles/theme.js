import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            'html, body' : {
                backgroundColor: '#111827',
                color: '#9ca3b0',
                fontFamily: '"Roboto Mono", monospace',
            },
            
            a : {
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                fontWeight: '500',
                position: 'relative',

                '&:hover' : {
                    color: 'white',
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
                    transition: 'transform 0.3s ease-in-out',
                },

                '&:hover::after' : {
                    transform: 'scaleX(1)',
                    transformOrigin: 'center',
                }
            }
        }
    }
});