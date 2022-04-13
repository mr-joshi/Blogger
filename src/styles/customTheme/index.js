import { extendTheme } from '@chakra-ui/react';
import { whiten, mode } from '@chakra-ui/theme-tools';

import colors from './colors';
import Button from './components/button';
import fonts from './fonts';

const customTheme = extendTheme({
    fonts,
    colors,
    components : {
        Button,
    },
    styles : {
        global : (props) => ({
            body:{
                bg : mode('url("/k.svg") ',"rgb(14, 16, 21)")(props),
                backgroundSize: '100%',
                transform: 'scale(1) translateX(0)',
                h: "full"
                
                
            },
            
        })
    },
});

export default customTheme;