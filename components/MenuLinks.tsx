import React from "react";
import { Divider, Link } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

interface MenuItem {
  path: string;
  label: string;
  icon?: string;
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
    <nav className="grid grid-cols-1">
      {items.map((item, index) => (
        <>
          <Link
            className="min-w-full m-2"
            key={index}
            onClick={() => handleClick(item)}
          >
            {item.icon ? <i className={`m-2 ${item.icon}`} /> : null}
            {item.label}
          </Link>
          <Divider className="divide-red-500" size="small" orientation="horizontal" />
        </>
      ))}
    </nav>
  );
};

export default MenuLinks;