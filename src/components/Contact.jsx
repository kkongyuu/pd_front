import "../components/Css/contact.css";
import Logo from "../assets/img/logo/logo.png";
import QrCodeLine from "../assets/img/other/qrCodeLine.png";

function Contact() {
  return (
    <div id="contact" className="contact_Containner">
      {/* ส่วนที่ 1: Logo */}
      <div
        className="contact-box"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <img src={Logo} alt="PD Marketing Logo" className="contact-logos" />
      </div>

      {/* ส่วนที่ 2: Location */}
      <div className="contact-box">
        <h3>LOCATION</h3>
        <p className="address-text">
          2/19-21 โครงการเวร่า ถ.รามคำแหง <br />
          แขวงราษฎร์พัฒนา เขตสะพานสูง <br />
          กรุงเทพมหานคร 10240
        </p>
      </div>

      {/* ส่วนที่ 3: Contact Us */}
      <div className="contact-box">
        <h3>CONTACT US</h3>
        <div className="contact-flex-container">
          <div className="contact-info-list">
            <p>
              <strong>Tel :</strong> 098-9232424
            </p>
            <p>
              <strong>Facebook :</strong> PD Marketing
            </p>
            <p>
              <strong>Email :</strong> Pdmarketing@gmail.com
            </p>
            <p style={{ color: "#00ff00" }}>
              <strong>Line :</strong> @pdmarketing
            </p>
          </div>
        </div>
      </div>

      {/* ส่วนที่ 4: QR Code (ใส่ใน contact-box เพื่อความสมดุล) */}
      <div
        className="contact-box"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <img src={QrCodeLine} alt="Line QR Code" className="qr-code" />
      </div>
    </div>
  );
}

export default Contact;
