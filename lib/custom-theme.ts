import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

export const customTheme = extendTheme(
  {
    components: {
      Heading: {
        variants: {
          primary: ({ colorMode }: StyleFunctionProps) => ({
            color: colorMode === 'dark' ? 'pink.300' : 'black'
          })
        }
      },
      Text: {
        text: {
          primary: ({ colorMode }: StyleFunctionProps) => ({
            color: colorMode === 'dark' ? 'pink.100' : 'black'
          })
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
      text: 'black',
      textDark: 'pink.100',
      primary: 'black',
      primaryDark: 'pink.400',
      highlight: 'blue.600',
      highlightDark: 'purple.200'
    }
  },
  withDefaultColorScheme({
    colorScheme: 'pink'
  })
)
