export default {
    name: "review",
    title: "Reviews",
    type: "document",
    fields: [
      { name: "name", title: "Reviewer Name", type: "string" },
      { name: "comment", title: "Comment", type: "text" },
      { name: "rating", title: "Rating", type: "number", validation: (Rule:any) => Rule.min(1).max(5) },
      {
        name: "product",
        title: "Product",
        type: "reference",
        to: [{ type: "product" }],
      },
    ],
  };
  