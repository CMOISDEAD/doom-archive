import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="sticky bottom-0 p-5 w-full bg-white">
      <hr />
      <div className="text-center">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
