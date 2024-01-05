const parent = React.createElement("div", { id: "parent1" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "This is Heading 1"),
    React.createElement("h2", { id: "heading2" }, "This is heading 2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "This is Heading 1"),
    React.createElement("h2", { id: "heading2" }, "This is heading 2"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
