import { Link } from "react-router-dom";

const RightComp = () => {
  return (
    <div>
      <div>
        <Link to="/search">검색</Link>
      </div>
      <div>
        <Link to="/cart">장바구니</Link>
      </div>
      <div>
        <Link to="/login">메뉴</Link>
      </div>
    </div>
  );
};

export default RightComp;
