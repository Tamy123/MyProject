import React from "react";
import { shallow } from "enzyme";
import View from "./View";

window.fetch = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ ok: true, Id: "123" }));

describe("sample text ", () => {
  let props;
  let getShallowComponent;
  let wrapper;

  beforeEach(() => {
    props = {
      location: {
        state: {
          id: "test-id"
        }
      }
    };
    getShallowComponent = () => shallow(<View {...props} />);
    wrapper = getShallowComponent();
    wrapper.setState({
      data: {}
    });
  });

  describe("sample text ", () => {
    test("render", () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
