import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import PostJob from "../pages/PostJob";
import MyJobs from "../pages/MyJobs";
import { useLoaderData, useParams } from 'react-router-dom'
import Update from "../pages/Update";
import Login from "../components/Login";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        { path: "/", element: <Home/>},
        {path: "/post-job", element: <PostJob />},
        {path: "/my-job", element: <MyJobs />},
        {path: "/edit-job/:id", element: <Update />,
          loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
        {
          path: "/login",
          element: <Login/>
        },
        {path: "/job/:id", element: <JobDetails/>}
      ]
    },
  ]);

  export default router;