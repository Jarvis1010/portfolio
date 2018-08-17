import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Grid from "./index";

describe("Grid Tests", () => {
  it("renders with proper gaps with default columns and width", () => {
    ["0", "4", "8", "16", "24", "32", "64", "128", null].forEach(gapSize => {
      const wrapper = shallow(<Grid gapSize={gapSize} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  it("renders Grid with columns passed as props", () => {
    const wrapper = shallow(<Grid columns={4} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders Grid with minWidth passed as props", () => {
    const wrapper = shallow(<Grid minWidth={100} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
