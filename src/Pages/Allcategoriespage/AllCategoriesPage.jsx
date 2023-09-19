import React from 'react';
import Subtitle from '../../Components/Utilities/Subtitle/Subtitle';
import Allcategories from '../../Components/Allcategories/Allcategories';

function AllCategoriesPage() {
  return (
    <>
      <div className="my-5">
        <Subtitle catig="التصنيفات" />
        <Allcategories />
      </div>
    </>
  );
}

export default AllCategoriesPage
