import { FC } from "react";
import { Logo } from "@/widgets/LayoutHeader/model/types";

const Logo: FC<Logo> = ({ logoName }: Logo) => {
  return (
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl">{logoName}</a>
    </div>
  );
};

export default Logo;
