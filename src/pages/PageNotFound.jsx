import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div class="flex h-screen w-full items-center justify-center bg-gray-200 px-16 md:px-0">
      <div class="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-8 shadow-2xl md:px-8 lg:px-24">
        <p class="text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl">
          404
        </p>
        <p class="mt-4 text-2xl font-bold tracking-wider text-gray-500 md:text-3xl lg:text-5xl">
          Page Not Found
        </p>
        <p class="mt-4 border-b-2 pb-4 text-center text-gray-500">
          Sorry, the page you are looking for could not be found.
        </p>
        <button
          class="mt-6 flex items-center space-x-2 rounded bg-blue-600 px-4 py-6 text-gray-100 transition-all duration-300 hover:bg-blue-700 "
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Go back</span>
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
