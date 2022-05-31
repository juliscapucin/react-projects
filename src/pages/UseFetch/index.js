import React from "react";
import { useFetch } from "./useFetch";

import Product from "./Product";

const url = "https://course-api.com/react-prop-types-example";

export default function Index() {
  const { products } = useFetch(url);

  return (
    <div>
      <section>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
}
