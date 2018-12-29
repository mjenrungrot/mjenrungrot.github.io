import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
