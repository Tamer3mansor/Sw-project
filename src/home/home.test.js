import React from "react";
import { shallow } from "enzyme";
import Home from "./home";

describe("Home Component Rendered", () => {
  let wrapper = shallow(<Home />);

  test(wrapper.find("div"));
});
