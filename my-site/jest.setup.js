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
  const createMotionComponent = (tag) => {
    return function MockMotionComponent({
      children,
      initial,
      whileInView,
      viewport,
      variants,
      transition,
      animate,
      exit,
      ...props
    }) {
      const Component = tag;
      return <Component {...props}>{children}</Component>;
    };
  };

  return {
    AnimatePresence: ({ children }) => <>{children}</>,
    motion: new Proxy(
      {},
      {
        get: (_, tag) => createMotionComponent(tag)
      }
    )
  };
});
