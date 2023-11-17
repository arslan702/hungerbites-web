function getItems() {
  return {
    categories: [
      {
        id: 1,
        title: "Food Items",
        slug: "/foodItems",
        children: [
          {
            id: 1,
            name: "Dairy",
            slug: "/dairy",
            subitems: [
              {
                id: 1,
                name: "Nougat",
                slug: "/nought",
              },
              {
                id: 2,
                name: "Lollipop",
                slug: "/lollipop",
              },
            ],
          },
          { id: 2, name: "Oil", slug: "/oil" },
          { id: 3, name: "Berverages", slug: "/berverages" },
        ],
      },
      { id: 2, title: "Personal Care", slug: "personalCare" },
      { id: 3, title: "Baby Care", slug: "babyCare" },
      { id: 4, title: "Home Care", slug: "homeCare" },
    ],
  };
}
export default function handler(req, res) {
  res.status(200).json(getItems());
}
