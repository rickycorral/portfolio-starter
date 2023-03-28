import { slide as Menu } from "react-burger-menu";

export default function Sidebar() {
   return(
        <Menu>
            <a id="home" className="menu-item" href="/">Hola</a>
            <a id="about" className="menu-item" href="/about">Esto</a>
            <a id="contact" className="menu-item" href="/contact">Es Un</a>
            <a id="settings" className="menu-item" href="/settings">Test</a>
        </Menu>
   )
}