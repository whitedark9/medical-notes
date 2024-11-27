import Blockquote from "./Blockquote";
import Del from "./Del";
import Italic from "./Italic";
import Strong from "./Strong";

const MDXComponents = {
  blockquote: Blockquote,
  del: Del,
  strong: Strong,
  b: Strong,
  em: Italic,
  i: Italic,
};

export default MDXComponents;
