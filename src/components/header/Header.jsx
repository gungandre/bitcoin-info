import { HeaderContainer, HeaderContent } from "./Header.styles";
import { Outlet } from "react-router-dom";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  const namaButton = [
    { path: "/", desc: "Info Harga Bitcoin" },
    { path: "/idr-to-bitcoin", desc: "IDR to Bitcoin" },
    { path: "/bitcoin-to-idr", desc: "Bitcoin to IDR" },
  ];

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <h1>Bitcoin Info</h1>
        </HeaderContent>
      </HeaderContainer>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {namaButton.map((data, index) => (
          <Link to={data.path} key={index}>
            <Button
              desc={data.desc}
              border={index === 1}
              path={location.pathname === data.path}
            />
          </Link>
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default Header;
