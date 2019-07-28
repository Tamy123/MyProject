import React from "react";
import { shallow } from "enzyme";
import App from "./App";

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
    getShallowComponent = () => shallow(<App {...props} />);
    wrapper = getShallowComponent();
    wrapper.setState({
      data: {}
    });
  });
  describe("sample text ", () => {
    test("render", () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
    test("should run handlePagination", () => {
      const handlePaginationSpy = jest.spyOn(
        wrapper.instance(),
        "handlePagination"
      );
      wrapper
        .instance()
        .handlePagination({ preventDefault: jest.fn(), target: {} });
      expect(handlePaginationSpy).toHaveBeenCalled();
    });

    test("should run submitSearch", () => {
      const submitSearchSpy = jest.spyOn(wrapper.instance(), "submitSearch");
      wrapper.instance().submitSearch({ tester: jest.fn() });
      expect(submitSearchSpy).toHaveBeenCalled();
    });
  });
});
