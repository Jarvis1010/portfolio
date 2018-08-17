import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Stackable from "./Stackable";

describe("Stackable Tests", () => {
  it("renders with proper gaps", () => {
    ["light", "medium", "dark", null].forEach(x => {
      const wrapper = shallow(<Stackable type={x} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
