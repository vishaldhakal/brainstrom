import Head from "next/head";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import MiddleSection from "../../components/MiddleSection";
import StudyDestinations from "../../components/StudyDestination";
import Trainings from "../../components/Trainings";

export default function About() {
  return (
    <>
      <Head>
        <title>
          Who are Brainstrom Education and How we help your abroad study Journey
        </title>
        <meta
          name="Description"
          content="Brainstrom Global Education and Visa services is one of the pioneers for abroad education in Kathmandu, Nepal for study in Austrlia and USA."
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="og:website" />
        <meta
          property="og:title"
          content="Who are Brainstrom Education and How we help your abroad study Journey"
        />
        <meta
          property="og:description"
          content="Brainstrom Global Education and Visa services is one of the pioneers for abroad education in Kathmandu, Nepal for study in Austrlia and USA."
        />
        <meta
          property="og:image"
          content="https://Brainstromeducation.edu.np/can.jpg"
        />
        <meta
          property="og:site_name"
          content="Brainstrom Global Education and Visa Services"
        />
      </Head>
      <Navbar></Navbar>
      <div className="py-3"></div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <h2 className="big-title">
              We build bridges between Universities and Students
            </h2>
          </div>
          <div className="col">
            <p className="small-title">
              Brainstrom's Vision is to provide every individual who trusts us
              with the most relevant services and help make their study abroad
              dream a reality.
            </p>
          </div>
        </div>
      </div>
      <div className="py-2">
        <img src="/ab.png" alt="" className="img-fluid fw-img" />
      </div>
      <div className="py-4"></div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5 g-sm-4">
          <div className="col d-flex align-items-stretch">
            <div className="card py-4 bg-white">
              <div className="mx-3 text-center">
                <img
                  src="/vision.png"
                  alt="analysis icon"
                  className="img-fluid ic1"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center fw-bb fs-4">
                  Our Vision
                </h5>
                <p className="card-text justifyy p-2 p-sm-3 mysubtitle">
                  Our vision is to be recognized as a reliable industry leaders
                  in the field of abroad study by showcasing strong
                  proficiencies &amp; exceptional team work that delivers
                  excellent performance &amp; generates great result.
                </p>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-stretch">
            <div className="card py-4 bg-white">
              <div className="mx-3 text-center">
                <img
                  src="/mission.png"
                  alt="analysis icon"
                  className="img-fluid ic1"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center fw-bb fs-4">
                  Our Mission
                </h5>
                <p className="card-text justifyy p-2 p-sm-3 mysubtitle">
                  To provide cross continental quality education in a simplified
                  manner having brainstormed all the available options. We seek
                  for university collaborations and institutional tie-ups to
                  ease up the educational journey for the Nepalese students.
                </p>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-stretch">
            <div className="card py-4 bg-white">
              <div className="mx-3 text-center">
                <img
                  src="/icon_const.svg"
                  alt="analysis icon"
                  className="img-fluid ic1"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center fw-bb fs-4">
                  Our Core Values
                </h5>
                <p className="card-text justifyy p-2 p-sm-3 mysubtitle">
                  <span>
                    There's no way you can improve yourself without pushing
                    yourself to the new heights of ambition regularly.
                    <br />
                    <br />
                    <b>B</b>: Bright <b>R</b>: Responsive <br /> <b>A</b>:
                    Aspiring <b>I</b>: Innovative <b>N</b>: Navigating <br />{" "}
                    <b>S</b>: Supportive <b>T</b>: Trusted <b>R</b>: Reliable{" "}
                    <br /> <b>O</b>: Opportunities <b>M</b>: Mission-driven
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      <section className="mt-5" id="who-are-we">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-end">
              <div>
                <h2 className="myfont fw-bb">
                  Who are Brainstrom Global Education ?
                </h2>
                <p className="pt-3 pe-1 pe-md-5">
                  Brainstrom Global Education and Visa services is one of the
                  pioneers for abroad education in Kathmandu, Nepal.Our services
                  are aimed at students looking for study opportunities in two
                  of the most amazing destinations in the world :
                  <b> Australia, USA and UK .</b>
                  <br /> We assist the students throughout the application
                  procedure, which includes end-to-end counseling, university
                  communication, test preparation, language classes, financial
                  documentation planning, and visa procession. Our university
                  collaborations and institutional tie-ups will further ease up
                  the educational journey for Nepalese students.
                  <br />
                  <br />
                  Our team of highly skilled counselors, well-trained teaching
                  staff, and dedicated student support staff work meticulously
                  to assist you at each step of your international education
                  journey.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 text-end">
              <img src="/about-img.png" className="img-fluid p-2" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="py-5">
        <MiddleSection></MiddleSection>
      </div>
      <div className="py-3"></div>
      <div className="container">
        <h2 className="myfont fw-bb fs-1">
          Meet Our <br /> Amazing Team{" "}
        </h2>
        <hr />
        <br />
        <div className="row row-cols-2 row-cols-md-4 g-5">
          <div className="col">
            <img src="/ashok.png" alt="" className="img-fluid rounded-mine" />
            <h5 className="fw-bb bb2 mt-3 fs-4">Ashok Bhandari</h5>
            <h5> CEO </h5>
            <p className="fw-bold">Contact : +977-9851192981</p>
          </div>
          <div className="col">
            <img src="/ashok.png" alt="" className="img-fluid rounded-mine" />
            <h5 className="fw-bb bb2 mt-3 fs-4">Joh Doe</h5>
            <h5> Counsellor </h5>
            <p className="fw-bold">Contact : +977-9866316114</p>
          </div>
        </div>
      </div>
      <div className="py-4"></div>
      <section className="mt-5" id="how-it-works">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 text-end">
              <img src="/about-img.png" className="img-fluid p-2" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-end">
              <div>
                <h2 className="myfont fw-bb">How it works ?</h2>
                <p className="pt-3 pe-1 pe-md-5">
                  The timeline for making your study abroad dreams a reality
                  with Brainstrom Global Education:
                </p>
                <ul>
                  <li>
                    Initial counseling session to help you make the informed
                    choice on abroad study
                  </li>
                  <li>
                    Choosing the right institution from a pool of leading global
                    colleges and universities
                  </li>
                  <li>
                    Assisting you with finding the best courses from a wide
                    range of options
                  </li>
                  <li>
                    Managing application procedure and obtaining offer letter
                  </li>
                  <li>
                    Match you up with the best scholarships based on your
                    credentials
                  </li>
                  <li>
                    Working on the visa application and processing through
                    relevant authorities
                  </li>
                  <li>Pre-departure informative session</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4"></div>
      <div className="py-5">
        <Trainings></Trainings>
      </div>
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
        <StudyDestinations></StudyDestinations>
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
      <Footer></Footer>
    </>
  );
}
