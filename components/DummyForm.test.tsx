/**
 * @jest-environment jsdom
 */

import "isomorphic-fetch";

import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import nock from "nock";
import { DummyForm } from "./DummyForm";

describe("DummyForm", () => {
  const USER_NAME = "Arya Stark";

  it("shows an error message if the submission goes wrong", async () => {
    const EXPECTED_ERROR_MESSAGE = "Oops! There was an unexpected error with your submission. Please try again later.";

    nock("http://localhost").post("/name", { name: USER_NAME }).reply(500);

    render(<DummyForm />);

    user.type(screen.getByLabelText("Name"), USER_NAME);
    user.click(screen.getByText("Submit"));

    await waitFor(() => expect(screen.getByText(EXPECTED_ERROR_MESSAGE)).toBeInTheDocument());
  });

  it("shows a success message if the submission goes okay", async () => {
    const EXPECTED_SUCCESS_MESSAGE = "Cool! All done :-)";

    nock("http://localhost").post("/name", { name: USER_NAME }).reply(200);

    render(<DummyForm />);

    user.type(screen.getByLabelText("Name"), USER_NAME);
    user.click(screen.getByText("Submit"));

    await waitFor(() => expect(screen.getByText(EXPECTED_SUCCESS_MESSAGE)).toBeInTheDocument());
  });
});
