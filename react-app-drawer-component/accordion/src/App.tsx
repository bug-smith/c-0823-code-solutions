import { GiHamburgerMenu } from 'react-icons/gi';

import './App.css';
import { useState } from 'react';

const menuItems = [
  {
    id: 1,
    title: 'Menu',
  },
  {
    id: 2,
    title: 'About',
  },
  {
    id: 3,
    title: 'Get Started',
  },
  {
    id: 4,
    title: 'Sign In',
  },
];

type Item = {
  id: number;
  title: string;
};

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="menu-icon" onClick={() => setIsOpen(true)}>
        <GiHamburgerMenu />
      </div>
      {selectedMenuItem && <h1>{selectedMenuItem}</h1>}
      <AppDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onMenuItemClick={(itemTitle) => {
          setSelectedMenuItem(itemTitle);
          setIsOpen(false);
        }}
        items={menuItems}
      />
    </div>
  );
}

type AppDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onMenuItemClick: (title: string) => void;
  items: Item[];
};

function AppDrawer({
  isOpen,
  onClose,
  onMenuItemClick,
  items,
}: AppDrawerProps) {
  return (
    <div>
      <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
        <ul className="menu-items">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              title={item.title}
              onClick={() => {
                onMenuItemClick(item.title);
              }}
            />
          ))}
        </ul>
      </div>
      {isOpen && <div className="menu-shade" onClick={onClose}></div>}
    </div>
  );
}
type MenuItemProps = {
  title: string;
  onClick: () => void;
};
function MenuItem({ title, onClick }: MenuItemProps) {
  return (
    <li className="menu-item" onClick={onClick}>
      {title}
    </li>
  );
}

export default App;
