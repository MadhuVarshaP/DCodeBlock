import React from "react";
import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef(
  ({ className = "", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={`
        relative
        group
        bg-purple-400
        hover:bg-purple-500
        text-white
        py-2
        px-4
        rounded-md
        transition-colors
        duration-200
        overflow-hidden
        ${className}
      `}
        ref={ref}
        {...props}
      >
        {/* Main content */}
        <div className="flex items-center justify-center relative z-10">
          {children}
        </div>

        {/* Left edge accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-l-md" />

        {/* Bottom fold effect */}
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-300 rounded-tl-md transform rotate-45 translate-x-3 translate-y-3" />
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
