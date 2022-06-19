import React from "react";
import "./styles.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Discounts from "./moreproductscard";

function MoreProducts() {
  return (
    <>
      <div className="">
        <div className="mx-auto">
          <ScrollingCarousel>
            <Discounts />
            <Discounts />
            <Discounts />
            <Discounts />
          </ScrollingCarousel>
        </div>
      </div>
    </>
  );
}

export default MoreProducts;
