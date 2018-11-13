import Projects from "./Projects";

describe("Projects component", () => {
  it("should be a project section", () => {
    const projects = new Projects({
      project1: "Dog match",
      project2: "Salmon Cookies",
      project3: "Day planner"
    });
    expect(projects.render()).toMatchSnapshot();
  });
});
