/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Foo } from "./Foo";

describe("Foo", () => {
  it("has a 'Name' text field", async () => {
    render(<Foo />);

    const input = await screen.findByLabelText("Name");
    await user.type(input, "Jon Snow");

    expect(input).toHaveValue("Jon Snow");
  });
});
