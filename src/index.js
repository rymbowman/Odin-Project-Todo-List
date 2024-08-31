import "./style.css";
import { renderHeader, renderBody, renderTaskDetails } from "./render-document";
import "./form-handler.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderBody();
});
