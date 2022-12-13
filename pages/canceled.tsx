import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

const Canceled = () => {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <MdCancel />
        </p>
        <h2>Your Transaction has failed</h2>
        <p className="description">
          If you have any quetions, please email
          <a className="email" href="mailto:order@ecm.com">
            order@ecm.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
