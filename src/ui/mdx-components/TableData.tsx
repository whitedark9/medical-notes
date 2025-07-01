import { Td } from "nextra/components";
import React from "react";

export default function TableData({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
  if (typeof children === "string" && children.trim() === "✅") {
    return <Td className="bg-green-500 dark:bg-green-600" />;
  }

  return <Td {...props}>{children}</Td>;
}
