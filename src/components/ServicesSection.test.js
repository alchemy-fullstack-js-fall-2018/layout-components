import Services from "./Services";

describe('Services component', () => {
  it("should be a project section", () => {
    const service = new Services({
      service: ['Design', 'Programming', 'Freelancing']
    });
    expect(service.render()).toMatchSnapshot();
  });
});
