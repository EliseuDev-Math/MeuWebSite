"use client";

import ReactMarkdown from "react-markdown";

export function PostContent({ content }: { content: string }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
