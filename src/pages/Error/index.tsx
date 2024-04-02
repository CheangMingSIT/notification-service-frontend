import { Result } from "antd";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 400) {
    return <Result status="error" title="400" subTitle={error.data.message} />;
  }
  if (isRouteErrorResponse(error) && error.status === 403) {
    return <Result status="403" title="403" subTitle={error.data} />;
  }
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    );
  }
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, Internal Server went wrong."
    />
  );
}
