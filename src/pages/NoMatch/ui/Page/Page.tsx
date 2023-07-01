import { FC } from "react";
import { Link } from "react-router-dom";

const NoMatch: FC = () => {
  return (
    <section>
      <div className="w-screen min-h-screen gap-y-5 flex flex-col justify-center items-center">
        <h1 className="text-9xl bg-clip-text font-bold text-transparent bg-gradient-to-l to-primary via-secondary from-primary-content">
          404
        </h1>
        <p className="text-3xl text-neutral font-medium">Page not found</p>
        <Link className="btn btn-primary-content px-16" to="/">
          Go back
        </Link>
      </div>
    </section>
  );
};

export default NoMatch;
