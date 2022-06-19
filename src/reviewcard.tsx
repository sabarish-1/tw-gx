import React from "react";
import "./styles.css";
import { StarFilled } from "@ant-design/icons";

function Item() {
  return (
    <>
      <div className="border-100 w-64 mr-2 rounded-lg">
        <div className="p-3">
          <h1 className="mb-2">Username</h1>
          <div className="flex bg-yellow pb-3">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </div>
          <p>
            My husband and I have tried 6 different sets of pillows in the last
            year. These are the first we both like - in fact we've given all the
            other pillows to our kids and ordered more of these! I wish they
            came in white instead of dark blue-- but when a pillow is this great
            the color is irrelevant!
          </p>
        </div>
      </div>
    </>
  );
}

export default Item;
