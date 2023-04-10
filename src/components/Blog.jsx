import React from "react";

const Blog = () => {
  return (
    <div className="my-container grid grid-cols-1 gap-10">
      <div class="card  bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 className="text-2xl text-blue-600 font-semibold">
            When should you use context API?
          </h2>
          <p className="text-green-600">
            Context API in React is useful when we have some data or state in
            our app that needs to be shared across multiple components, but
            passing it down through each component as a prop becomes tedious and
            difficult to manage. So we should use Context API in React when we
            need to share data or state across multiple components in a more
            efficient and easier way.
          </p>
        </div>
      </div>

      <div class="card  bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 className="text-2xl text-blue-600 font-semibold">
            What is a custom hook?
          </h2>
          <p className="text-green-600">
            Hooks are reusable functions. When we have component logic that
            needs to be used by multiple components, we can extract that logic
            to a custom Hook. A custom hook in React is a reusable function that
            allows us to share logic across multiple components, making our code
            more efficient, easier to read, and easier to maintain.
          </p>
        </div>
      </div>

      <div class="card  bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 className="text-2xl text-blue-600 font-semibold">
            What is useRef?
          </h2>
          <p className="text-green-600">
            The useRef Hook allows us to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly. The
            useRef hook is useful when we need to access a DOM element or a
            component instance from within a function, without the need to
            rerender the component.
          </p>
        </div>
      </div>

      <div class="card  bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 className="text-2xl text-blue-600 font-semibold">
            What is useMemo?
          </h2>
          <p className="text-green-600">
            The React useMemo Hook returns a memoized value. The useMemo Hook
            only runs when one of its dependencies update. This can improve
            performance. the useMemo hook in React is a tool for memoizing the
            result of a function call, and avoiding expensive recomputations
            when the function is called with the same input. This can help to
            optimize the performance of our application by reducing unnecessary
            calculations and improving the rendering speed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
