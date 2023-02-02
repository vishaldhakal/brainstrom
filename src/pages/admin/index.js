import Head from "next/head";
import AdminSidebar from "../../../components/AdminSidebar";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Brainstrom Dashboard</title>
        <meta
          name="Description"
          content="Join Brainstrom Global Education for professional consultation and visa assistance for your abroad studies journey in Australia, Japan, United Kingdom and United States of America."
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="og:website" />
        <meta
          property="og:title"
          content="Brainstrom Global Education and Visa Services - Kathmandu, Nepal"
        />
        <meta
          property="og:description"
          content="Join Brainstrom Global Education for professional consultation and visa assistance for your abroad studies journey in Australia, Japan, United Kingdom and United States of America."
        />
        <meta
          property="og:image"
          content="https://Brainstromeducation.edu.np/usa.jpg"
        />
        <meta
          property="og:site_name"
          content="Brainstrom Global Education and Visa Services"
        />
      </Head>
      <div className="row row-cols-2 mx-0">
        <div className="col-3">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-9">
          <div className="py-3">
            <table class="table table-striped table-responsive fw-mine">
              <thead>
                <tr className="bg-m text-white">
                  <th scope="col">S.N</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Country Applying</th>
                  <th scope="col">Status</th>
                  <th scope="col">Started Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">Vishal Dhakal</td>
                  <td scope="col">9866316114</td>
                  <td scope="col">Australia</td>
                  <td scope="col">
                    <span className="text-secondary">Just Inquiry</span>
                  </td>
                  <td scope="col">-</td>
                  <td scope="col">Actions</td>
                </tr>
                <tr>
                  <td scope="col">2</td>
                  <td scope="col">Vishal Dhakal</td>
                  <td scope="col">9866316114</td>
                  <td scope="col">Australia</td>
                  <td scope="col">
                    <span className="text-primary">Document Processing</span>
                  </td>
                  <td scope="col">2022-01-03</td>
                  <td scope="col">Actions</td>
                </tr>
                <tr>
                  <td scope="col">3</td>
                  <td scope="col">Vishal Dhakal</td>
                  <td scope="col">9866316114</td>
                  <td scope="col">Australia</td>
                  <td scope="col">
                    <span className="text-success">GTE Approved</span>
                  </td>
                  <td scope="col">2079-01-23</td>
                  <td scope="col">Actions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
