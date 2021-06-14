import "./Breadcrumb.scss";

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <nav
        class="ribbon ribbon--alpha"
        role="navigation"
        aria-label="breadcrumbs"
      >
        <a class="ribbon__element" href="#" target="_blank">
          Organisation
        </a>
        <a class="ribbon__element" href="#" target="_blank">
          Parking[NAME]
        </a>
        <a class="ribbon__element" href="#" target="_blank">
          Administration
        </a>
        <a
          class="ribbon__element last-a"
          href="#"
          aria-current="page"
          target="_blank"
        >
          Planning period
        </a>
      </nav>
    </div>
  );
}

export default Breadcrumb;
