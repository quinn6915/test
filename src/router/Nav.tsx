import classNames from "classnames";
import { Link } from "react-router-dom";

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
          <Link to="/">Posts</Link>
        </li>
        <li className={item}>
          <Link to="/albums">Albums</Link>
        </li>
      </ul>
    </div>
  );
}
