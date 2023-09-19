import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function AllproductsTitle() {
  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <h4 className="text-white-50">
          نتيجة البحث: <span className="text-white">6</span>
        </h4>
        <div className="">
          <DropdownButton id="dropdown-item-button" title="الترتيب حسب">
            <Dropdown.Item className="text-center" as="button">
              الأعلى سعرا
            </Dropdown.Item>
            <Dropdown.Item className="text-center" as="button">
              الأكثر شهرة
            </Dropdown.Item>
            <Dropdown.Item className="text-center" as="button">
              الأعلى تقييما
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
}

export default AllproductsTitle
