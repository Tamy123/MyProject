import React from "react";
import { shallow } from "enzyme";
import Table from "./Table";

describe("sample text ", () => {
  let props;
  let getShallowComponent;
  let wrapper;

  beforeEach(() => {
    props = {
      headings: [{}],
      data: [{}]
    };

    getShallowComponent = () => shallow(<Table {...props} />);
    wrapper = getShallowComponent();
  });

  describe("sample text ", () => {
    test("render", () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
