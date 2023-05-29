import "./App.css";
import PDFLink from "./components/PDFLink";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PDFViewer from "./components/PDFViewer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/pdflink">PDFLink</Link>
              </li>
              <li>
                <Link to="/pdfviewer">PDFViewer</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/pdflink" element={<PDFLink />} />
          <Route path="/pdfviewer" element={<PDFViewer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
