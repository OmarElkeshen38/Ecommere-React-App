import React from 'react'

function AllproductsFilter() {
  return (
    <>
      <div className="col-lg-2 bg-dar">
        <div className="p-1">
          <div className="text-white">
            <h3>الفئة</h3>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                ملابس رجالي
              </label>
            </div>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                ملابس حريمي
              </label>
            </div>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                ملابس أطفال
              </label>
            </div>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                ساعات
              </label>
            </div>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                أحذية رجالي
              </label>
            </div>
          </div>
          <div className="text-white my-4">
            <h3>الماركة</h3>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                Nike
              </label>
            </div>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                Zara
              </label>
            </div>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                Defacto
              </label>
            </div>
            <div className="">
              <input type="checkbox" name="cate" />
              <label className="mx-2 fs-5" htmlFor="cate">
                Adidas
              </label>
            </div>
          </div>
          <div className="text-white">
            <h3>السعر</h3>
            <div className="d-flex justify-content-between">
              <label className="mx-2 fs-5" htmlFor="cate">
                من :
              </label>
              <input type="number" className="form-control w-50" name="cate" />
            </div>
            <div className="d-flex justify-content-between my-2">
              <label className="mx-2 fs-5" htmlFor="cate">
                الى :
              </label>
              <input type="number" className="form-control w-50" name="cate" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllproductsFilter
