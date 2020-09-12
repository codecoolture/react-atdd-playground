/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { Foo } from "./Foo";

describe("Foo", () => {
  it("shows the text 'Bar'", async () => {
    render(<Foo />);

    expect(screen.queryByText("Bar")).not.toBeNull();
  });
});
