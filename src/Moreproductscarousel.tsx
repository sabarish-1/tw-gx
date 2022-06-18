import React from "react";
import "./styles.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Item from "./productcard";

function MoreProducts() {
  return (
    <>
      <div className="cards mb-24">
        <div className="mx-auto">
          <div className="">
            <ScrollingCarousel>
              <Item />
              <Item />
              <Item />
              <Item />
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreProducts;
