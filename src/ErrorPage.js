import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>אוי, לא!</h1>
      <p>מצטערים, קרה משהו שלא ציפינו לו.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

export default ErrorPage;
