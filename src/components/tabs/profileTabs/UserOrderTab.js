import React from "react";

const UserOrderTab = ({orderInfo}) => {
  return (
    <div className="col-xxl-8 col-lg-8 shadow-effect">
      <div
        className="tab-pane fade active show"
        id="nav-order"
        role="tabpanel"
        aria-labelledby="nav-order-tab"
      >
        <div className="profile__ticket table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Product Title</th>
                <th scope="col">Status</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
            {orderInfo.map((order)=>(
                <tr key={order.id}>
                <th scope="row"> {order.id}</th>
                <td data-info="title">{order.productTitle}</td>
                <td data-info="status pending">{order.productStatus} </td>
                <td>
                  <a href="#" className="tp-logout-btn">
                    view
                  </a>
                </td>
              </tr>
            ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserOrderTab;
