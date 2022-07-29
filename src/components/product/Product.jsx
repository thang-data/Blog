import "./product.css";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div src="https://github.com/thang-data/MERN_APP_FULLSTACK.git" className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
