import React from "react";
import { Link } from "react-router-dom";
export const Lor = () => {
  return (
    <>
      <div className="container my-3">
        <div className="jumbotron">
          <h1 className="display-4">Details</h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            provident dicta voluptatum aliquam sunt aperiam, optio numquam
            necessitatibus tenetur expedita suscipit adipisci nemo, soluta
            earum, atque explicabo obcaecati facere sequi.
          </p>
          <hr className="my-4" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
            illum impedit. Neque ratione earum enim quod consequuntur quibusdam
            voluptatibus deleniti culpa nostrum, architecto itaque voluptatem!
            Dicta consequatur quae ipsum laborum! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Doloribus quibusdam accusamus nisi,
            aperiam labore nesciunt quas eligendi molestias blanditiis vitae.
            Odio repudiandae quo maiores, laudantium et quia facilis vero natus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Recusandae modi quo, fuga earum officia at quod numquam iusto
            temporibus aperiam ut inventore nam corrupti natus quaerat sed nisi
            sapiente dolor.
          </p>
          <Link to="/">
            <button className="btn btn-primary btn-lg">Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};
