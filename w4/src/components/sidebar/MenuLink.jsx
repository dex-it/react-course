import React from "react";

export function MenuLink({ active, children, ...restProps }) {
  const className = `link ${active ? 'active' : ''}`;

  return (
    <a className={className} {...restProps} >
      {children}
    </a>
  )
}