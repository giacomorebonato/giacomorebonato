import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const customTheme = extendTheme(
  {
    components: {
      Heading: {
        variants: {
          primary: ({ colorMode }: StyleFunctionProps) => {
            return {
              color: colorMode === 'dark' ? 'pink.300' : 'black'
            }
          }
        }
      },
      Link: {
        variants: {
          primary: ({ colorMode }: StyleFunctionProps) => {
            return {
              color: colorMode === 'dark' ? 'pink.200' : 'blue.600',
              _hover: {
                color: colorMode === 'dark' ? 'pink.400' : 'blue.800',
                textDecoration: 'none'
              }
            }
          }
        },
        defaultProps: {
          variant: 'primary'
        }
      }
    },
    colors: {
      text: mode('black', 'pink.100'),
      primary: mode('black', 'pink.400'),
      highlight: mode('blue.600', 'purple.200')
    }
  },
  withDefaultColorScheme({
    colorScheme: 'pink'
  })
)
