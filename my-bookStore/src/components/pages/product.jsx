const Product = ({ data }) => {
  console.log(data);
  const addToCart = () => {
    //axios.post('url', { qty: 32, productId: data._id })
    console.log(data._id);
  };
  const imageUrl = data.imageUrl;
  const description = data.description;
  const price = data.price;
  const qty = data.quantity;

  return (
    <div className=" m-[auto]">
      <div className="border border-black w-[250px] rounded-[5px] shadow-xl">
        <div className="w-[180px] flex flex-col  gap-[10px] m-[auto] p-[10px] text-center static">
          <div className="bg-red-600 absolute text-white rounded-[5px] w-[50px] h-[35px] ml-[-20px] mt-[-5px] content-center">
            <h1>${price}</h1>
          </div>
          <img width="100%" height="100%" src={imageUrl} alt="" />

          <h2 className="font-bold">{description}</h2>
          <div>
            <input
              value={qty}
              className="border border-black rounded-[5px] w-[150px] h-[35px]"
              type="number"
            />
          </div>
          <div className="">
            <button
              onClick={addToCart}
              className="bg-purple-700 w-[120px] h-[30px] text-white font-bold rounded-[5px] "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
