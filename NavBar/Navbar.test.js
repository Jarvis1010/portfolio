import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { NavWrapper, Brand, NavSlider, NavItem } from "../NavBar";

const theme = {
  white: "white",
  fontFamily: "Palatino",
  primaryColor: "dodgerblue"
};

describe("Navbar Components Render", () => {
  describe("Navwrapper Renders", () => {
    it("Renders NavWrapper", () => {
      const wrapper = shallow(<NavWrapper />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("Renders NavWrapper with theme", () => {
      const wrapper = shallow(<NavWrapper theme={theme} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe("NavSlider Renders", () => {
    it("Renders NavSlider", () => {
      const wrapper = shallow(<NavSlider />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("Renders NavSlider with theme", () => {
      const wrapper = shallow(<NavSlider theme={theme} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe("NavItem Renders", () => {
    it("Renders NavSlider", () => {
      const wrapper = shallow(<NavItem />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("Renders NavSlider with theme", () => {
      const wrapper = shallow(<NavItem theme={theme} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe("Brand Renders", () => {
    it("Renders Brand", () => {
      const allProps = { brandName: "BrandName", src: "/", href: "#" };
      const missingBrandName = { src: "/", href: "#" };
      const missingSrc = { brandName: "BrandName", href: "#" };
      [allProps, missingBrandName, missingSrc].forEach(props => {
        const wrapper = shallow(<Brand {...props} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
    });
  });
});
