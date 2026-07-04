import { contactInfo } from "@/data/nav";

export default function MobileFloatBtn() {
  return (
    <div className="mobile-float-btn">
      <a href={contactInfo.phoneRaw}>
        <button>
          <i className="phone icon" />
        </button>
      </a>
    </div>
  );
}
