import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Stack from "./Stack";

describe("Stack Tests", () => {
  it("renders with proper gaps", () => {
    ["0", "4", "8", "16", "24", "32", "64", "128", null].forEach(gapSize => {
      const wrapper = shallow(<Stack gapSize={gapSize} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
