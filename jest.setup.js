import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  usePathname: () => "/"
}));

jest.mock("next/link", () => {
  return function MockLink({ children, href, ...props }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

jest.mock("framer-motion", () => {
  const MockMotionDiv = ({ children, ...props }) => <div {...props}>{children}</div>;

  return {
    AnimatePresence: ({ children }) => <>{children}</>,
    motion: {
      div: MockMotionDiv
    }
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
