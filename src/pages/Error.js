import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>404 Not Found</h1>
        <p>페이지를 찾을 수 없습니다.</p>
      </main>
    </>
  );
}

export default ErrorPage;
