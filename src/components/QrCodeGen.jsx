import { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeGen() {
  const [value, setValue] = useState("")
  const [qr, setQr] = useState("")

  const handleGenerateQr = (e) => {
    e.preventDefault();
    setQr(value)
    setValue("")
  }
  return (
    <div className="pt-5">
      <div className="row col-6 mx-auto">
        <div className="card text-center">
          <div className="card-header">QR Code Genius</div>
          <div className="card-body">
            <h5 className="card-title">Enter Text or URL</h5>
            <p className="card-text">
              <form action="">
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
            <a
              onClick={handleGenerateQr}
              type="submit"
              href="#"
              className="btn btn-primary"
            >
              Generate QR Code
            </a>
          </div>
          <div className="card-footer">
            {value && <QRCode size={256} value={qr} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCodeGen;
