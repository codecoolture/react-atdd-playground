import { useState } from "react";

export function DummyForm() {
  const [failed, setFailed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");

  return (
    <>
      {submitted && !failed && <p>Cool! All done :-)</p>}
      {submitted && failed && <p>Oops! There was an unexpected error with your submission. Please try again later.</p>}

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const response = await fetch(`${window.location.origin}/name`, {
            body: JSON.stringify({ name }),
            headers: { "content-type": "application/json" },
            method: "post",
          });

          setFailed(!response.ok);
          setSubmitted(true);
        }}
      >
        <label>
          Name <input type="text" onChange={(event) => setName(event.currentTarget.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
