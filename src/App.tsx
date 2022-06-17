import preview from "@/assets/preview/carbon.svg";
import themeConfig from "./utils/utils";
import { Carousel } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./styles.css";
import MoreProducts from "./Moreproductscarousel";
import CTA from "./CTA";

function App() {
  return (
    <div className="bg-white App mb-24">
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-5u sm:px-6 lg:max-w-3xl lg:px-8">
        <div className="flex justify-between items-center mb-5">
          <span className="text-xl">
            <LeftOutlined />
          </span>

          <span className="flex text-xl">Saved discounts</span>
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
        <h1 className="text-2xl py-2">Luxome Lightweight Blanket</h1>
        <p className="text-sm py-2">
          With a thinner profile than a traditional comforter, this perfectly
          soft & breathable quilted blanket will keep you comfortable all year
          round. The naturally thermal-regulating bamboo viscose fabric and fill
          is perfect for hot sleepers, while still providing adequate warmth in
          the cooler months.
        </p>
        <div className="mb-1 text-2xl font-medium flex">
          $330
          <span className="line-through px-2 text-gray-500">$350</span>
        </div>

        <div className="border-b"></div>

        <h1 className="text-1xl text-gray-500 py-2">OFFERS</h1>

        <div className="flex justify-between items-center">
          <span className="text-sm">Copy & Use code to get 20%</span>

          <div className="pt-2 flex text-sm drop-shadow-md">
            <button className="border shadow-md border-dashed border-5 p-3">
              GLIMPSE-KPI101
            </button>
          </div>
        </div>

        <div className="">
          <div className="pt-2 justify-between items-center">
            <span className="text-sm lg:text-1xl">
              Use code to get 25% off site wide
            </span>

            <div className="text-sm">
              <button className="border shadow-md border-dashed border-5 p-3">
                GLIMPSE-KPI101
              </button>
            </div>
          </div>

          <div className="border-b pt-5"></div>

          <h1 className="text-1xl text-gray-500 py-2">MORE PRODUCTS</h1>
        </div>
        <MoreProducts />
        <CTA />
      </div>
    </div>
  );
}

export default App;
