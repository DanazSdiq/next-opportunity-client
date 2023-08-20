import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

export const Markdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      className="leading-relaxed"
      remarkPlugins={[remarkBreaks, remarkGfm]}
    >
      {content.replace(/\n/gi, "\n&nbsp;")}
    </ReactMarkdown>
  );
};
