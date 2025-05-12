import { Callout } from "nextra/components";
import React from "react";
import APP from "~/constants/configs/app";
import type { CalloutType, MDXProps } from "~/constants/types";

const getBlockquoteStatus = (children: React.ReactNode): CalloutType => {
  // Helper function to recursively check children
  const checkChildren = (nodes: React.ReactNode): CalloutType => {
    for (const child of React.Children.toArray(nodes)) {
      if (React.isValidElement(child)) {
        // Check if the current element is a blockquote
        if (child.props && child.props.children) {
          const textContent = React.Children.toArray(child.props.children)
            .filter((c) => typeof c === "string") // Extract only text nodes
            .join("")
            .trim();

          // Error callout must end with !!!
          if (textContent.endsWith("!!!")) return "error";
          // Warning callout must end with !
          if (textContent.endsWith("!")) return "warning";
          // Info callout must end with . or ။
          if (textContent.endsWith(".") || textContent.endsWith("။"))
            return "info";
          // if (textContent.endsWith(")")) return "question";
          // Default callout must not end with above characters
          // Default callout is used for 'Indication'
        }

        // Recursively check nested children
        const nestedStatus = checkChildren(child.props.children);
        if (nestedStatus !== "default") return nestedStatus;
      }
    }

    return "default"; // Default status if no match is found
  };

  return checkChildren(children);
};

export default function Blockquote({ children }: MDXProps) {
  if (!children) return;

  const calloutType: CalloutType = getBlockquoteStatus(children);

  // For Old Question
  if (calloutType === "question") {
    return (
      <Callout type={"warning"} emoji={APP.emoji.questionMarkRed}>
        {children}
      </Callout>
    );
  }

  return <Callout type={calloutType}>{children}</Callout>;
}
