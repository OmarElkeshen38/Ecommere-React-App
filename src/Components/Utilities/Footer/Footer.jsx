import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-black py-2">
        <div className="container">
          <div className="my-1 footFlex text-white d-flex justify-content-between">
            <div className="d-flex gap-3">
              <a className="fs-5 text-white-50" href='#'>الشروح والأحكام</a>
              <a className="fs-5 text-white-50" href='#'>سياسة الخصوصية</a>
              <a className="fs-5 text-white-50" href='/'>اتصل بنا</a>
            </div>
            <div className="d-flex gap-3 text-white-50">
              <a className="fs-5 text-white-50" href='https://github.com/OmarElkeshen38' target='_blank'>
                <i className="fa-brands fa-github"></i>
              </a>
              <a className="fs-5 text-white-50" href='https://www.linkedin.com/in/omar-elkheshen-922a68218/' target='_blank'>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a className="fs-5 text-white-50" href="https://api.whatsapp.com/send?phone=01212981957" target='_blank'>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
