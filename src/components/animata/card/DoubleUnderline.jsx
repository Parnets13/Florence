import React from "react";
import { cn } from "@/lib/utils"; // Ensure this utility function is available

const DoubleUnderline = ({ className, children, ...props }) => {
  const common =
    "absolute h-px w-full bg-[#f8841e] transition-all duration-200 group-hover:opacity-50 dark:bg-white/70 text-[#f8841e]";

  return (
    <span
      {...props}
      className={cn("group relative inline-block cursor-pointer text-[#f8841e]", className)}
    >
      {children}
      <span
        className={cn(
          common,
          "pointer-events-none left-0 top-[calc(100%_-_2px)] group-hover:top-0"
        )}
      />
      <span className={cn(common, "-bottom-[2px] left-0")} />
    </span>
  );
};

export default DoubleUnderline;
