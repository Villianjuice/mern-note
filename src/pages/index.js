import AddPost from "./AddPost";
import EditPost from "./EditPost";
import Login from "./Login";
import Main from "./Main";
import Post from "./Post";
import Posts from "./Posts";
import Register from "./Register";

// routes consts
export const routes = [
  {
    path: "/",
    component: <Main />,
  },
  {
    path: "/posts",
    component: <Posts />,
  },
  {
    path: ":id",
    component: <Post />,
  },
  {
    path: ":id/edit",
    component: <EditPost />,
  },
  {
    path: "/new",
    component: <AddPost />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/login",
    component: <Login />,
  },
];
