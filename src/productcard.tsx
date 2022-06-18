import React from "react";
import "./styles.css";

function Item() {
  return (
    <>
      <div className="bg-neutral-100  w-64 mr-2 rounded-lg">
        <div className="text-center p-3">
          <h1 className="mb-2">Really good pillow</h1>
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
