import React from "react";
import Posts from "../../Posts/Posts";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      qus: "What is the purpose of react router? ",
      ans: "Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any route inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.",
    },
    {
      id: 2,
      qus: "How does context api works? ",
      ans: " The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc.Passing data through props over and over can cause problems for your application. Sometimes you might pass more props than you need or even forget to pass props that you do need, rename props through the components without noticing. That’s one of the main problems that Context API came to solve for us  ",
    },
    {
      id: 3,
      qus: "What is use ref hook? ",
      ans: "The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Examples: const refContainer = useRef(initialValue). The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.;",
    },
  ];
  return (
    <div>
      <h1 className="md:text-4xl my-4 underline">Blog Posts</h1>
      <div>
        {blogPosts.map((posts) => (
          <Posts posts={posts} key={posts.id}></Posts>
        ))}
      </div>
    </div>
  );
};

export default Blog;
