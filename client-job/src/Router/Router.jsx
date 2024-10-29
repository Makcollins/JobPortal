import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

import PostJob from "../pages/PostJob";
import MyJobs from "../pages/MyJobs";

import Update from "../pages/Update";
import Login from "../components/Login";
import JobDetails from "../pages/JobDetails";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        { path: "/", element: <Home/>},
        {path: "/post-job", element: <PostJob />},
        {path: "/my-job", element: <MyJobs />},
        {path: "/edit-job/:id", element: <Update />,
          loader: ({params}) => fetch(`https://jobportal-backend-waol.onrender.com/all-jobs/${params.id}`)
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/sign-up",
          element: <SignUp/>
        },
        {path: "/job/:id", element: <JobDetails/>}
      ]
    },
  ]);

  export default router;
