import { useRouter } from "next/router";
import React from "react";
import { RightNavWrapper } from "./RightNav.style";
import MyLink from "../../../Common/MyLink";

const RightNav = ({ open }) => {
  const router = useRouter();
  return (
    <RightNavWrapper open={open}>
      <ul>
        <li>
          <MyLink className="link" to="/" >
            Home
          </MyLink>
        </li>
        <li>
          <MyLink className="link"  to="/" >
            What we do
          </MyLink>
        </li>
        <li>
          <MyLink className="link"  to="/" >
            Our works
          </MyLink>
        </li>
        <li>
          <MyLink className="link"  to="/" >
            Contacts
          </MyLink>
        </li>

      </ul>
    </RightNavWrapper>
  );
};

export default RightNav;
