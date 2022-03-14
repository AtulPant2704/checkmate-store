const ProductsCategory = ({ cardType, cardImg, cardAlt, cardTitle }) => {
    console.log(cardTitle);
    return (
      <div className="card-container">
        <div className="background">
          <img src={cardImg} alt={cardAlt} className="img-responsive" />
        </div>
        <div className="content">
          <h6 className="card-title">{cardTitle}</h6>
        </div>
      </div>
    );
  };
  
  export { ProductsCategory };
  