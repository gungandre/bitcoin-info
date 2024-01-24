import { InfoBitcoinContainer, Table } from "./info-bitcoin.styles";
import axios from "axios";
import { useEffect, useState } from "react";

export const InfoBitcoin = () => {
  const [hargaBtc, setHargaBtc] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const fetchApi = await axios.get("https://blockchain.info/ticker");

        const { USD, JPY, EUR, GBP, AUD } = fetchApi.data;
        setHargaBtc([USD, JPY, EUR, GBP, AUD]);
      } catch (error) {
        alert("Gagal fetch API!");
      }
    };

    getApi();
  }, []);

  return (
    <>
      <InfoBitcoinContainer>
        <div>
          <h3>Harga Bitcoin Hari Ini</h3>
          <Table>
            <tr>
              <th>Mata Uang</th>
              <th>Harga Beli Bitcoin</th>
              <th>Harga Jual Bitcoin</th>
            </tr>
            {hargaBtc.map((data) => (
              <tr key={data.symbol}>
                <td>{data.symbol}</td>
                <td>{data.buy}</td>
                <td>{data.sell}</td>
              </tr>
            ))}
          </Table>
        </div>
      </InfoBitcoinContainer>
      <div></div>
    </>
  );
};
