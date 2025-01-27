import ParagraphBase, { ParagraphProps } from "antd/es/typography/Paragraph";

export const Paragraph = ({ style, ...rest }: ParagraphProps) => {
  return <ParagraphBase {...rest} style={{ ...style, margin: 0 }} />;
};
