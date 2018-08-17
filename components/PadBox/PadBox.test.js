import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import PadBox from "./PadBox";

describe("PadBox Tests", () => {
  it("renders for all the correct sizes", () => {
    const sizes = [
      "0",
      "4",
      "8",
      "16",
      "24",
      "32",
      "64",
      "128",
      ".05",
      ".10",
      ".15",
      ".20",
      null
    ];
    sizes.forEach(size => {
      const wrapper = shallow(<PadBox size={size} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  it("adds padding to only bottom", () => {
    const wrapper = shallow(<PadBox bottom="0" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("adds padding to only top", () => {
    const wrapper = shallow(<PadBox top="0" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("adds padding to only left", () => {
    const wrapper = shallow(<PadBox left="0" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("adds padding to only right", () => {
    const wrapper = shallow(<PadBox right="0" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("adds padding to only right and size value for the rest of the sides", () => {
    const wrapper = shallow(<PadBox right="0" size=".20" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
