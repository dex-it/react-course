import React from "react";
import { MainLogo } from "../svgs/MainLogo";
import { MenuLink } from "./MenuLink";
import "./styles.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="menu-section">
        <div>
          <a href="/">
            <MainLogo width="96px" height="171px" />
          </a>
        </div>

        <span className="divider"/>

        <nav className="menu">
          <ul className="menu-links">
            <li>
              <MenuLink href="/news" active>Новости</MenuLink>
            </li>
            <li>
              <MenuLink href="/players">Игроки</MenuLink>
            </li>
            <li>
              <MenuLink href="/teams">Команды</MenuLink>
            </li>
          </ul>
        </nav>
      </div>

      <span className="divider"/>

      <div>
        <nav className="menu">
          <ul className="menu-links">
            <li>
              <MenuLink>Instagram</MenuLink>
            </li>
            <li>
              <MenuLink>Twitter</MenuLink>
            </li>
          </ul>
        </nav>
      </div>

      <span className="divider"/>

      <p className="copyright">Copyright © 2019 NBA</p>
    </aside>
  )
}