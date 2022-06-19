import preview from "@/assets/preview/carbon.svg";
import themeConfig from "./utils/utils";

import "./styles.css";

function CTA() {
  return (
    <div className="bg-white App mb-24">
      <div className="max-w-2xl mx-auto py-5 px-2 sm:py-5 sm:px-3 lg:max-w-3xl lg:px-8">
        <div className="flex fixed1 bg-white shadow-top pt-3 max-w-2xl mx-auto px-2  lg:max-w-3xl lg:px-8">
          <button
            type="button"
            className="mx-2 w-1/2 text-lg items-center justify-center h-12 rounded-lg border-sec outline-none focus:outline-none"
          >
            Save for later
          </button>
          <button className="mx-2 w-1/2 text-lg h-12 rounded-lg blue-navy text-white outline-none focus:outline-none">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
