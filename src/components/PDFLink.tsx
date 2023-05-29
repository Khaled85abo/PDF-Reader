import { useState } from "react";
import pdfFile from "../../public/pdfs/A-REVIEW-OF-THE-GANZFELD-WORK-AT-GOTHENBURG-UNIVERSITY.pdf";
const PDFLink = () => {
  const [url, setUrl] = useState<Blob | null>(null);
  const fetchPDF = () => {
    fetch("./A-REVIEW-OF-THE-GANZFELD-WORK-AT-GOTHENBURG-UNIVERSITY.pdf", {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => {
        console.log("fetch pdf response: ", response);
        return response.blob();
      })
      .then((blob) => {
        setUrl(blob);
      });
    // .then((blob) => {
    //   // Create blob link to download
    //   const url = window.URL.createObjectURL(new Blob([blob]));
    //   setUrl(url);
    //   // const link = document.createElement("a");
    //   // link.href = url;
    //   // link.setAttribute("download", `FileName.pdf`);

    //   // // Append to html link element page
    //   // document.body.appendChild(link);

    //   // // Start download
    //   // link.click();

    //   // // Clean up and remove the link
    //   // link.parentNode.removeChild(link);
    // });
  };
  return (
    <>
      <div>
        <button onClick={fetchPDF}>Fetch pdf file</button>
        <div>
          {url && (
            <a href={url} target="_blank">
              <button>Download file</button>
            </a>
          )}
        </div>
      </div>
      <div className="column small-12">
        <a href={pdfFile} target="_blank">
          <button>Download PDF from public</button>
        </a>
      </div>
    </>
  );
};

export default PDFLink;
