import React from "react";
import { mount } from "enzyme";
import Search from "./Search";

it("renders text input", () => {
  const wrapper = mount(<Search />);
  const input = wrapper.find("input");
  expect(input).toHaveLength(1);
  expect(input.prop("type")).toEqual("text");
});

it("renders submit button with custom text", () => {
  const wrapper = mount(<Search />);
  const button = wrapper.find("button");
  expect(button).toHaveLength(1);
  expect(button.prop("type")).toEqual("submit");
  expect(button.text()).toEqual("Search");
});
