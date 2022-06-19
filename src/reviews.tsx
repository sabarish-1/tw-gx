import React from "react";
import "./styles.css";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Item from "./reviewcard";

function Reviews() {
  return (
    <>
      <div className="">
        <div className="mx-auto">
          <ScrollingCarousel>
            <Item />
            <Item />
            <Item />
            <Item />
          </ScrollingCarousel>
        </div>
      </div>
    </>
  );
}

export default Reviews;
