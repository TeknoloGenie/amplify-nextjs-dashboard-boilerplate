import React from 'react';
import { Link } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';

interface MenuItem {
  path: string;
  label: string;
  params?: Record<string, string>;
  preloadData?: () => Promise<any>;
}

interface MenuLinksProps {
  items: MenuItem[];
}

const MenuLinks: React.FC<MenuLinksProps> = ({ items }) => {
  const router = useRouter();

  const handleClick = async (item: MenuItem) => {
    if (item.preloadData) {
      await item.preloadData();
    }
    router.push({
      pathname: item.path,
      query: item.params,
    });
  };

  return (
    <nav>
      {items.map((item, index) => (
        <Link
          key={index}
          onClick={() => handleClick(item)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default MenuLinks;