import tw, { css } from 'twin.macro'

export const markdownStyles = css`
  @screen sm {
     {
      ${tw`text-base`}
    }
  }

  @screen lg {
     {
      ${tw`text-lg`}
    }
  }

  /* Headers */
  h1,
  h2 {
    ${tw`text-xl my-6 font-semibold`}
  }
  h3,
  h4,
  h5,
  h6 {
    ${tw`text-lg my-3 font-semibold`}
  }

  @screen sm {
    h1,
    h2 {
      ${tw`text-2xl`}
    }
    h3,
    h4,
    h5,
    h6 {
      ${tw`text-xl`}
    }
  }

  /* Links */
  a {
    ${tw`text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500`}
  }

  a:hover {
    ${tw`underline`}
  }
  /* Paragraph */
  p {
    ${tw`mb-4`}
  }
  /* Lists */
  ul,
  ol {
    ${tw`mb-4 ml-8`}
  }
  li > p,
  li > ul,
  li > ol {
    ${tw`mb-0`}
  }
  ol {
    ${tw`list-decimal`}
  }
  ul {
    ${tw`list-disc`}
  }
  /* Blockquotes */
  blockquote {
    ${tw`p-2 mx-6 bg-gray-100 mb-4 border-l-4 border-gray-400 italic`}
  }
  blockquote > p {
    ${tw`mb-0`}
  }
  /* Tables */
  td,
  th {
    ${tw`px-2 py-1 border border-gray-400`}
  }
  tr:nth-child(odd) {
    ${tw`bg-gray-100`}
  }
  table {
    ${tw`mb-6`}
  }

  :not(pre) > code.language-text {
    white-space: pre-line;
  }
`
