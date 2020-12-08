import tw, { css } from "twin.macro";

export const markdownStyles = css`


@screen sm {
  .markdown {
    ${tw`text-base`}
  }
}

@screen lg {
  .markdown {
    ${tw`text-lg`}
  }
}

/* Headers */
.markdown h1,
.markdown h2 {
  ${tw`text-xl my-6 font-semibold`}
}
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  ${tw`text-lg my-3 font-semibold`}
}

@screen sm {
  .markdown h1,
  .markdown h2 {
    ${tw`text-2xl`}
  }
  .markdown h3,
  .markdown h4,
  .markdown h5,
  .markdown h6 {
    ${tw`text-xl`}
  }
}

/* Links */
.markdown a {
  ${tw`text-blue-600`}
}
.markdown a:hover {
  ${tw`underline`}
}
/* Paragraph */
.markdown p {
  ${tw`mb-4`}
}
/* Lists */
.markdown ul,
.markdown ol {
  ${tw`mb-4 ml-8`}
}
.markdown li > p,
.markdown li > ul,
.markdown li > ol {
  ${tw`mb-0`}
}
.markdown ol {
  ${tw`list-decimal`}
}
.markdown ul {
  ${tw`list-disc`}
}
/* Blockquotes */
.markdown blockquote {
  ${tw`p-2 mx-6 bg-gray-100 mb-4 border-l-4 border-gray-400 italic`}
}
.markdown blockquote > p {
  ${tw`mb-0`}
}
/* Tables */
.markdown td,
.markdown th {
  ${tw`px-2 py-1 border border-gray-400`}
}
.markdown tr:nth-child(odd) {
  ${tw`bg-gray-100`}
}
.markdown table {
  ${tw`mb-6`}
}

.markdown :not(pre) > code.language-text {
  white-space: pre-line;
}
`;