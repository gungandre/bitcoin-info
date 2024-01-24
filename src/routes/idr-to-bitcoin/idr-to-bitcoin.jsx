import { IdrToBitcoinContainer, InputContainer } from "./idr-to-bitcoin.styles";
import { useState } from "react";
import axios from "axios";

function formatMataUang(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(angka);
}

const IdrToBitcoin = () => {
  const [convertToBTC, setConvertToBTC] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const omChangeHandler = async (event) => {
    const kursRupiahToUSD = 15000;
    if (event.target.value) {
      setInputValue(event.target.value);
      const convertToUSD = parseFloat(event.target.value) / kursRupiahToUSD;

      try {
        const fetchApi = await axios.get(
          "https://blockchain.info/tobtc?currency=USD&value=" + convertToUSD
        );
        setShowResult(true);
        setConvertToBTC(parseFloat(fetchApi.data));
      } catch (error) {
        alert("Gagal fetch API!");
      }
    } else {
      setShowResult(false);
      setConvertToBTC(0);
    }
  };

  return (
    <IdrToBitcoinContainer>
      <h3>Konversi Rupiah ke Bitcoin</h3>
      <p>Kurs 1 USD = 15.000 IDR</p>
      <InputContainer>
        <input
          type="number"
          placeholder="Masukkan Jumlah Rupiah..."
          onKeyUp={omChangeHandler}
        />
      </InputContainer>

      {showResult && (
        <h4 style={{ textAlign: "center", marginTop: "20px" }}>
          Rp. {inputValue} = {convertToBTC} BTC
        </h4>
      )}
    </IdrToBitcoinContainer>
  );
};

export default IdrToBitcoin;
