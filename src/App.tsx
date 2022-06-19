import preview from "@/assets/preview/carbon.svg";
import themeConfig from "./utils/utils";
import { Carousel } from "antd";
import { LeftOutlined, CopyOutlined, StarFilled } from "@ant-design/icons";
import "./styles.css";
import Reviews from "./reviews";
import CTA from "./CTA";
import MoreProducts from "./moreproducts";

function App() {
  return (
    <div className="bg-white App mb-24 text-black">
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-5u sm:px-6 lg:max-w-3xl lg:px-8">
        <div className="flex justify-between items-center mb-5">
          <span className="text-xl">
            <LeftOutlined />
          </span>
        </div>

        <div className="container1 w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <Carousel autoplay>
            <div>
              <div>
                <img
                  loading="lazy"
                  alt="product"
                  className="h-48 w-full object-cover"
                  src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  loading="lazy"
                  alt="product"
                  className="h-48 w-full object-cover"
                  src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  loading="lazy"
                  alt="product"
                  className="h-48 w-full object-cover"
                  src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  loading="lazy"
                  alt="product"
                  className="h-48 w-full object-cover"
                  src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
                />
              </div>
            </div>
          </Carousel>
        </div>
        <h1 className="text-xl py-2">Luxome Lightweight Blanket</h1>

        <div className="flex justify-between">
          <div className="mb-1 text-2xl font-medium flex">
            $330
            <span className="line-through px-2 text-gray-500">$350</span>
          </div>

          <div className="flex p-1 rounded-lg">
            <p className="text-sm px-2">4.9</p>

            <svg
              className=""
              width="15"
              height="15"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84589 1.3063C5.99557 0.845644 6.64727 0.845644 6.79695 1.3063L7.9347 4.80795C8.00164 5.01397 8.19362 5.15345 8.41023 5.15345L12.0921 5.15345C12.5765 5.15345 12.7778 5.77325 12.386 6.05795L9.4073 8.2221C9.23205 8.34942 9.15873 8.5751 9.22566 8.78111L10.3634 12.2828C10.5131 12.7434 9.98586 13.1265 9.594 12.8418L6.61531 10.6776C6.44007 10.5503 6.20277 10.5503 6.02753 10.6776L3.04884 12.8418C2.65698 13.1265 2.12974 12.7434 2.27942 12.2828L3.41718 8.78111C3.48411 8.5751 3.41078 8.34942 3.23554 8.2221L0.256856 6.05795C-0.135001 5.77325 0.066386 5.15345 0.550748 5.15345L4.23261 5.15345C4.44922 5.15345 4.6412 5.01397 4.70813 4.80795L5.84589 1.3063Z"
                fill="#202037"
              />
            </svg>
          </div>
        </div>

        <div className="border-b"></div>

        <h1 className="text-lg text-gray-500 py-2">OFFERS</h1>

        {/*<div className="flex justify-between items-center">
          <span className="text-sm">Copy & Use code to get 20%</span>

          <div className="pt-2 flex text-sm drop-shadow-md">
            <button className="border shadow-md border-dashed border-5 p-3">
              GLIMPSE-KPI100
            </button>
          </div>
  </div>*/}

        <div className="pt-2 justify-between items-center pb-2">
          <span className="text-sm lg:text-xl ">
            Use code to get 25% off site wide <CopyOutlined />
          </span>

          <div className="text-lg my-2">
            <button className="w-full h-12 px-6 transition-colors duration-150 bg-yellow-g rounded-lg focus:shadow-outline">
              GLIMPSE-KPI
            </button>
          </div>
        </div>

        <div className="border-b"></div>

        <h1 className="text-lg text-gray-500 py-2">DESCRIPTION</h1>

        <p className="text-sm pt-2">
          With a thinner profile than a traditional comforter, this perfectly
          soft & breathable quilted blanket will keep you comfortable all year
          round. The naturally thermal-regulating bamboo viscose fabric and fill
          is perfect for hot sleepers, while still providing adequate warmth in
          the cooler months.
        </p>

        <div className="border-b pt-2"></div>

        <h1 className="text-lg text-gray-500 pt-2">REVIEWS</h1>
        <div className="flex rounded-lg">
          <p className="text-sm px-2">4.9</p>

          <svg
            className=""
            width="15"
            height="15"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.84589 1.3063C5.99557 0.845644 6.64727 0.845644 6.79695 1.3063L7.9347 4.80795C8.00164 5.01397 8.19362 5.15345 8.41023 5.15345L12.0921 5.15345C12.5765 5.15345 12.7778 5.77325 12.386 6.05795L9.4073 8.2221C9.23205 8.34942 9.15873 8.5751 9.22566 8.78111L10.3634 12.2828C10.5131 12.7434 9.98586 13.1265 9.594 12.8418L6.61531 10.6776C6.44007 10.5503 6.20277 10.5503 6.02753 10.6776L3.04884 12.8418C2.65698 13.1265 2.12974 12.7434 2.27942 12.2828L3.41718 8.78111C3.48411 8.5751 3.41078 8.34942 3.23554 8.2221L0.256856 6.05795C-0.135001 5.77325 0.066386 5.15345 0.550748 5.15345L4.23261 5.15345C4.44922 5.15345 4.6412 5.01397 4.70813 4.80795L5.84589 1.3063Z"
              fill="#202037"
            />
          </svg>
        </div>

        <Reviews />

        <div className="border-b mt-3"></div>

        <h1 className="text-lg text-gray-500 py-2">MORE PRODUCTS</h1>
        <MoreProducts />

        <CTA />
      </div>
    </div>
  );
}

export default App;
