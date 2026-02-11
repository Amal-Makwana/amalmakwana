import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/navigation", () => ({
  usePathname: () => "/"
}));

jest.mock("next/link", () => {
  return ({ children, href, ...props }: React.ComponentPropsWithoutRef<"a">) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
});

jest.mock("framer-motion", () => {
  const MockMotionDiv = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props}>{children}</div>
  );

  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
      div: MockMotionDiv
    }
  };
});
