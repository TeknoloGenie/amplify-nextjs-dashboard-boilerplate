import MenuLinks from "@/components/menu-links";

const MenuLinksExample = () => {
  const menuItems = [
    {
      path: "/home",
      label: "Home",
      preloadData: async () => {
        // Simulating data preloading
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Home data preloaded");
      },
    },
    {
      path: "/about",
      label: "About",
      params: { id: "123" },
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div>
      <h1>MenuLinks Example</h1>
      <MenuLinks items={menuItems} />
    </div>
  );
};

export default MenuLinksExample;