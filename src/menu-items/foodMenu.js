import { IconDashboard } from "@tabler/icons-react";
const icons = { IconDashboard };
const foodmenu = {
  id: "dashboard",
  type: "group",
  children: [
    {
      id: "default",
      title: "Food Menu",
      type: "item",
      url: "/dashboard/foodmenu",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default foodmenu;
