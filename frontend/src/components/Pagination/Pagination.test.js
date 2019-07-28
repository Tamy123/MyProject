import React from "react";
import { shallow } from "enzyme";
import Pagination from "./Pagination";

describe("sample text ", () => {
  let props;
  let getShallowComponent;
  let wrapper;

  beforeEach(() => {
    props = {
      mapper: [{}, {}]
    };
    getShallowComponent = () => shallow(<Pagination {...props} />);
    wrapper = getShallowComponent();
  });
  describe("sample text ", () => {
    test("render", () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
