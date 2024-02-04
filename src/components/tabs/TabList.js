import React from "react";

const TabList = ({ children }) => {
  return (
    <div className="col-xxl-4 col-lg-4">
      <div className="profile__tab mr-40">
        <nav>
          <div
            className="nav nav-tabs tp-tab-menu flex-column"
            id="profile-tab"
            role="tablist"
          >
            {children}
           
            <span
              id="marker-vertical"
              className="tp-tab-line d-none d-sm-inline-block"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TabList;
