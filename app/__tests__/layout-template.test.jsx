import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "@/app/layout";
import Template from "@/app/template";

describe("RootLayout", () => {
  it("exposes stable metadata", () => {
    expect(metadata).toEqual({
      title: "Amal Makwana",
      description: "Personal website of Amal Makwana"
    });
  });

  it("returns an html document shell with header, main, and footer regions", () => {
    const layoutTree = RootLayout({ children: <p>Page content</p> });

    expect(layoutTree.type).toBe("html");
    expect(layoutTree.props.lang).toBe("en");

    const body = layoutTree.props.children;
    const appShell = body.props.children;
    const [headerComponent, mainElement, footerComponent] = appShell.props.children;

    expect(headerComponent.type.name).toBe("SiteHeader");
    expect(mainElement.type).toBe("main");
    expect(mainElement.props.children.props.children).toBe("Page content");
    expect(footerComponent.type.name).toBe("SiteFooter");
  });
});

describe("Template", () => {
  it("renders wrapped children", () => {
    render(
      <Template>
        <div>Animated Content</div>
      </Template>
    );

    expect(screen.getByText("Animated Content")).toBeInTheDocument();
  });
});
