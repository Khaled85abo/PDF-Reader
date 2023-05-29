import { Worker, Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import { BookmarkIcon, FileIcon, ThumbnailIcon } from '@react-pdf-viewer/default-layout';
// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "750px",
      }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl="../../public/pdfs/A-REVIEW-OF-THE-GANZFELD-WORK-AT-GOTHENBURG-UNIVERSITY.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
