export default function AdminSidebar() {
  return (
    <>
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-m h-1000">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <span class="fs-4 fw-bold">Dashboard</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto gap-3">
          <li>
            <a href="#" class="nav-link text-white">
              Student Management
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              Online Inquiries
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              Offline Inquiries
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              Payments
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              Expenses
            </a>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </a>
        </div>
      </div>
    </>
  );
}
