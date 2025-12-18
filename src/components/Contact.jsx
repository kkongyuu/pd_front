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
              <strong>Tel :</strong>{" "}
              <a
                href="tel:0989232424"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                098-9232424
              </a>
            </p>

            <p>
              <strong>Facebook :</strong>{" "}
              <a
                href="https://www.facebook.com/PDinnovates?locale=th_TH"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                PD Marketinginnovate
              </a>
            </p>

            <p>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:Pdmarketing@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Pdmarketing@gmail.com
              </a>
            </p>

            <p>
              <strong>Line :</strong>{" "}
              <a
                href="https://lin.ee/Z0QkSgU"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00ff00", textDecoration: "none" }}
              >
                @pdmarketing
              </a>
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
