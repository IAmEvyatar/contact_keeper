import React from "react";
interface INavbarProps {
  title?: string;
  icon?: string;
}
export default function Navbar({ title, icon }: INavbarProps) {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </div>
  );
}
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};
