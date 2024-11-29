import Button from "../shared/Button";

const JoinShopping = () => {
  return (
    <div>
      <div className="bg-bannerImg bg-cover bg-repeat w-full bg-bottom flex justify-center items-center flex-col p-[6rem]">
        <div className="">
          <h2 className="text-3xl font-extrabold text-white leading-[1.3]">
            JOIN SHOPPING COMMUNITY TO 
            <br />
            GET MONTHLY PROMO
          </h2>
          {/* <h2 className="text-3xl font-extrabold text-white leading-[1.3]">
            {" "}
            GET MONTHLY PROMO
          </h2> */}
          <p className="py-3 mb-2 text-white tracking-wider text-md">Type your email down below and be young wild generation</p>
        </div>
        <div className="bg-white flex rounded">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Add your email here"
            className="bg-transparent px-4 py-1 border-none outline-none bg-white"
          />
          <Button text="SEND" href="#" className="m-2" />
        </div>
      </div>
    </div>
  );
};

export default JoinShopping;
