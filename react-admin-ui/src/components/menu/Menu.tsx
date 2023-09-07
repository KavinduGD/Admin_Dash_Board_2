import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data/data";

function Menu() {
  return (
    <div className="menu">
      {menu.map((menuItem) => (
        <div className="item" key={menuItem.id}>
          <span className="title">{menuItem.title}</span>
          {menuItem.listItems.map((tab) => (
            <Link to={tab.url} className="listItem" key={tab.id}>
              <img src={tab.icon} alt={tab.title} />
              <span className="listItemTitle">{tab.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
