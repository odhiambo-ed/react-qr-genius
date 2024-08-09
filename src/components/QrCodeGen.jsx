

function QrCodeGen() {
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
                  <input className="form-control" type="text" />
                </div>
              </form>
            </p>
            <a href="#" className="btn btn-primary">
              Generate QR Code
            </a>
          </div>
                  <div className="card-footer">
                      <QrCode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCodeGen