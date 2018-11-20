import Projects from "./Projects";

describe("Projects component", () => {
  it("should be a project section", () => {
    const projects = new Projects({
      projects: [],
    });
    expect(projects.render()).toMatchSnapshot();
  });
});
