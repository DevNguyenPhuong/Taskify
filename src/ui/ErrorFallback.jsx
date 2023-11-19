function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-[4.8rem]">
      <div className="flex-[0_1_96rem] rounded-md border border-solid border-gray-200 bg-gray-50 p-[4.8rem] text-center [&_h1]:mb-[1.6rem] [&_p]:mb-12 [&_p]:text-gray-500">
        <h1 className="text-[3rem] font-semibold leading-[1.4]">
          Something went wrong 🧐
        </h1>
        <p>{error.message}</p>
        <button
          className="flex flex-col items-center rounded-md bg-indigo-600 px-5 py-2 text-[1rem] font-medium text-indigo-50 hover:bg-indigo-500 md:px-10 md:py-5 md:text-[1.6rem]"
          size="large"
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      </div>
    </main>
  );
}

export default ErrorFallback;
