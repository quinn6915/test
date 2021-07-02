import classNames from "classnames";
import { NavLink } from "react-router-dom";

const item = classNames(
  "w-20",
  "h-9",
  "flex",
  "items-center",
  "justify-center"
);

const active = classNames(item, "bg-gray-100", "rounded-lg");

export default function Nav() {
  return (
    <div className="text-black flex justify-center mt-2">
      <ul className="flex justify-end">
        <li className={item}>
          <NavLink exact to="/" activeClassName={active}>
            Posts
          </NavLink>
        </li>
        <li className={item}>
          <NavLink to="/albums" activeClassName={active}>
            Albums
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
