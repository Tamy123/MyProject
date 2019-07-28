import React from "react";
import { shallow } from "enzyme";
import Edit from "./Edit";

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
          record: {
            name: "test"
          },
          input: "test-input",
          id: "test-id"
        }
      }
    };
    getShallowComponent = () => shallow(<Edit {...props} />);
    wrapper = getShallowComponent();
    wrapper.setState({
      input: "test"
    });
  });
  describe("sample text ", () => {
    test("render", () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
