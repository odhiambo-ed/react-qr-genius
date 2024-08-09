import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import download from "downloadjs";

function QrCodeGen() {
  const [value, setValue] = useState("")
  const [qr, setQr] = useState("")
  const qrRef = useRef(null)

  const handleGenerateQr = () => {
    setQr(value)

  }

  const handleDownload = () => {
    if (qrRef.current) {
      toPng(qrRef.current)
        .then((dataUrl) => {
          download(dataUrl, "qr-code.png");
        })
        .catch((err) => {
          console.error("Failed to download QR code", err);
        });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-5">
      <div className="row col-6 mx-auto">
        <div className="card text-center">
          <div className="card-header">QR Code Genius</div>
          <div className="card-body">
            <h5 className="card-title">Enter Text or URL</h5>
            <p className="card-text">
              <form onSubmit={handleGenerateQr} action="">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </form>
            </p>
          </div>
          <div className="card-footer">
            {value && (
              <>
                <QRCode ref={qrRef} size={256} value={qr} />
                <p className="d-flex gap-5 justify-content-center pt-3">
                  <button
                    onClick={handleDownload}
                    className="btn btn-secondary mt-3"
                  >
                    Download QR Code
                  </button>
                  <button
                    onClick={handlePrint}
                    className="btn btn-success mt-3 ml-2"
                  >
                    Print QR Code
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCodeGen;
