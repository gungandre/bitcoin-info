import {
  BitcoinToIdrContainer,
  InputContainer,
} from "./bitcoint-to-idr.styles";
import axios from "axios";

import { useState } from "react";

function formatMataUang(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(angka);
}

const BitcoinToIdr = () => {
  const [convertToIDR, setConvertToIDR] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const omChangeHandler = async (event) => {
    const kursRupiahToUSD = 15000;
    if (event.target.value) {
      setInputValue(event.target.value);
      try {
        const fetchApi = await axios.get("https://blockchain.info/ticker");

        const { USD } = fetchApi.data;

        const hargaJualBTC = USD.sell;

        const kalkulasiHarga =
          kursRupiahToUSD * (hargaJualBTC * parseFloat(event.target.value));
        setConvertToIDR(kalkulasiHarga);
        setShowResult(true);
      } catch (error) {
        alert("Gagal fetch API!");
        console.log(error);
      }
    } else {
      setShowResult(false);
      setConvertToIDR(0);
    }
  };

  return (
    <BitcoinToIdrContainer>
      <h3>Konversi Bitcoin ke Rupiah</h3>
      <p>Kurs 1 USD = 15.000 IDR</p>
      <InputContainer>
        <input
          type="number"
          placeholder="Masukkan Jumlah BTC..."
          onKeyUp={omChangeHandler}
        />
      </InputContainer>

      {showResult && (
        <h4 style={{ textAlign: "center", marginTop: "20px" }}>
          BTC {inputValue} = {formatMataUang(convertToIDR)}
        </h4>
      )}
    </BitcoinToIdrContainer>
  );
};

export default BitcoinToIdr;
