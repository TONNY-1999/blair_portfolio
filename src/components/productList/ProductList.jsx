import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire its Tech moves</h1>
                 <p className="pl-desc">
                 provide a variety of technological information and ideas. encourage curiosity, ingenuity, resourcefulness and discrimination. 
                 stimulate self-confidence through the knowledge and application of technology. 
                 develop practical skills through the creation of products/solutions.
            </p>
            </div>
        <div className="pl-list">
            {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
            </div>
        </div>
    );
};

export default ProductList;
