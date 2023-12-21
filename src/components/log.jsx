import React from "react";
import LogForm from "./logform";

const Login = () => {
  return (
    <main className="bg-black" style={{ minHeight: '70vh' }}>
      <div className="modal modal-sheet position-static d-block bg-dark p-6 py-md-5" tabIndex={-1} role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content bg-black rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2 card-text">Вход</h1>
            </div>
            <div className="modal-body p-5 pt-0">
              <LogForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Login;