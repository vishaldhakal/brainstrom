import Head from "next/head";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import TopSection from "../../components/TopSection";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Brainstrom Global Education and Visa Services Now</title>
        <meta
          name="Description"
          content="Contact Brainstrom Now | We'd love to hear from you! Don't hesitate to contact us with any questions or feedback. Abroad Studdy questions? Ask us now!"
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="og:website" />
        <meta
          property="og:title"
          content="Contact Brainstrom Global Education and Visa Services Now"
        />
        <meta
          property="og:description"
          content="Contact Brainstrom Now | We'd love to hear from you! Don't hesitate to contact us with any questions or feedback. Abroad Studdy questions? Ask us now!"
        />
        <meta
          property="og:image"
          content="https://Brainstromeducation.edu.np/tor.jpg"
        />
        <meta
          property="og:site_name"
          content="Brainstrom Global Education and Visa Services"
        />
      </Head>
      <Navbar></Navbar>
      <TopSection
        title="Contact Brainstrom Education"
        desc="We are here to help you !"
      ></TopSection>
      <div className="py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <img
              src="/contactt.png"
              alt="dce"
              className="img-fluid w-25 w-smm-50 mb-3"
            />
          </div>
          <h2 className="fw-bb text-center px-md-4 fs-2">
            Are you looking to study abroad ?
          </h2>
          <h5 className="fw-mine text-center px-md-4 fs-5">
            Don't know where to start ? Contact Brainstrom now!
          </h5>
          <div className="row row-cols-1 row-cols-md-3 mt-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <ContactForm></ContactForm>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container px-mine">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col d-flex justify-content-start rounded-mine">
              <div>
                <h3 className="fw-bold mb-3">Get In Touch </h3>
                <div>
                  <h5 className="fw-bold">Email</h5>
                  <p>admission@brainstrom.edu.np</p>
                </div>
                <div>
                  <h5 className="fw-bold">Phone</h5>
                  <p>+977 9851192981</p>
                </div>
                <div>
                  <h5 className="fw-bold">Address</h5>
                  <p>New Baneshwor, Kathmandu</p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center rounded-mine">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.87712943915!2d85.33349881503325!3d27.690192232852638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199648fa2b4d%3A0xd6c11ac169c74363!2sBrainstorm%20Global%20Education!5e0!3m2!1sen!2snp!4v1675311408176!5m2!1sen!2snp"
                allowfullscreen=""
                loading="lazy"
                className="map-res"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      <Newsletter></Newsletter>
      <div className="py-3"></div>
      <div className="py-5"></div>
      <Footer></Footer>
    </>
  );
}
