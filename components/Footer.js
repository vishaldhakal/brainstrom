import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footup position-relative">
        <div className="bg-mine2">
          <div className="py-4"></div>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div className="col col-md-5">
                <img
                  src="/logo.svg"
                  alt=""
                  className="img-fluid smalll-logo-img"
                />
                <h4 className="fw-bold bb mt-4">Brainstrom Global Education</h4>
                <p>
                  Brainstrom Global Education Pvt. Ltd is one of the merging
                  pioneer institution established not only to facilitate abroad
                  education but also aspires to simplify immigration matters
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col">
                <h5 className="fw-bold">Study Destinations</h5>
                <div className="list">
                  <Link href="/study-in-australia" activeClassName="">
                    <a className="mybot">Melbourne</a>
                  </Link>
                  <Link href="/study-in-australia" activeClassName="">
                    <a className="mybot">Sydney</a>
                  </Link>
                  <Link href="/study-in-australia" activeClassName="">
                    <a className="mybot">Brisbane</a>
                  </Link>
                  <Link href="/study-in-uk" activeClassName="">
                    <a className="mybot">London</a>
                  </Link>
                  <Link href="/study-in-usa" activeClassName="">
                    <a className="mybot">Texas</a>
                  </Link>
                </div>
              </div>
              <div className="col">
                <h5 className="fw-bold">Useful Links</h5>
                <div className="list">
                  <Link href="/privacy" activeClassName=" ">
                    <a className="mybot">Terms and Privacy</a>
                  </Link>
                  <Link href="/about-brainstrom" activeClassName=" ">
                    <a className="mybot">About Brainstrom</a>
                  </Link>
                  <Link href="/contact-brainstrom" activeClassName="">
                    <a className="mybot">Contact us</a>
                  </Link>
                  <Link href="/ielts" activeClassName="">
                    <a className="mybot">IELTS</a>
                  </Link>
                  <Link href="/pte" activeClassName="">
                    <a className="mybot">PTE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="row row-cols-1 row-cols-sm-3 pt-5 mx-0">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <div className="row row-cols-7">
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col">
                    <a
                      href="https://m.facebook.com/brainstormglobaleducation"
                      className=" text-center"
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/facebook.svg"
                        alt="Facebook Icon which links to rentbaba facebook page"
                        className="img-fluid social-icon"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.instagram.com/brainstormabroadstudy/"
                      className=" text-center"
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/instagram.svg"
                        alt="Instagram Icon which links to rentbaba instagram page"
                        className="img-fluid social-icon"
                      />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#" className=" text-center">
                      <img
                        loading="lazy"
                        src="/linkedin.svg"
                        alt="Linked Icon which links to rentbaba linkedin page"
                        className="img-fluid social-icon"
                      />
                    </a>
                  </div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div class="row text-center mt-4 px-3 mx-0">
              <p>??2023 Brainstrom Global Education and Visa Services</p>
            </div>
          </div>
          <div className="py-4"></div>
        </div>
      </footer>
    </>
  );
}
