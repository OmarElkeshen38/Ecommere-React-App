import React from 'react'
import Subtitle from '../../Components/Utilities/Subtitle/Subtitle'
import Allbrands from '../../Components/Allbrands/Allbrands'

function BrandsPage() {
  return (
    <>
      <div className="my-5">
        <Subtitle catig="الماركات" />
        <Allbrands />
      </div>
    </>
  );
}

export default BrandsPage
