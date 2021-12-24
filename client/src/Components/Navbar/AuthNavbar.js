import { Link, NavLink } from "react-router-dom";
import imgae from "../../img/signup_img.jpeg";

const defaultLinks = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Discover",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Likes",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    title: "Messages",
  },
];

function AuthNavbar() {
  return (
    <div className="bg-primary text-white flex pt-2 justify-between ">
      <div className="mx-7 pt-3 flex  justify-around ">
        <Link to="/">
          <div className=" flex text-white">LOGO</div>
        </Link>
        {defaultLinks.map((link) => (
          <NavLink
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "1px solid #FE76B6" : "",
                color: isActive ? "white" : "gray",
              };
            }}
            to={`/${link.title.toLowerCase()}`}
          >
            <div className="flex mx-3 content-center">
              {link.svg}
              {link.title}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="mx-8 flex pb-2 space-x-4 items-center">
        <img src={imgae} className="h-12 w-12 rounded-full"></img>
        <p>ffffffklgfd;j;kfghdksgfdklsdfhj</p>
      </div>
    </div>
  );
}

export default AuthNavbar;
