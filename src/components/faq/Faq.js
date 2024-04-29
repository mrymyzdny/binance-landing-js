import { React, useState } from "react";
import "./Faq.css";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";

export default function Faq() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      isOpen: false,
      question: "What is a cryptocurrency exchange?",
      answer:
        "Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.",
    },
    {
      id: 2,
      isOpen: false,
      question: "What products does Binance provide?",
      answer:
        "Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.",
    },
    {
      id: 3,
      isOpen: false,
      question: "How to buy Bitcoin and other cryptocurrencies on Binance?",
      answer:
        "There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to purchase crypto on Binance. Before getting started, please make sure you’ve completed Identity Verification for your Binance account.",
    },
    {
      id: 4,
      isOpen: false,
      question: "How to track cryptocurrency prices",
      answer:
        "The easiest way to track the latest cryptocurrency prices, trading volumes, trending altcoins, and market cap is the Binance Cryptocurrency Directory. Click on the coins to know historical coin prices, 24-hour trading volume, and the price of cryptocurrencies like Bitcoin, Ethereum, BNB and others in real-time.",
    },
    {
      id: 5,
      isOpen: false,
      question: "How to trade cryptocurrencies on Binance",
      answer:
        "You can trade hundreds of cryptocurrencies on Binance via the Spot, Margin, Futures, and Options markets. To begin trading, users need to register an account, complete identity verification, buy/deposit crypto, and start trading.",
    },
    {
      id: 6,
      isOpen: false,
      question: "How to earn from crypto on Binance",
      answer:
        "Users can earn rewards on more than 180+ cryptocurrencies by using one of the products offered on Binance Earn. Our platform offers dozens of digital assets like Bitcoin, Ethereum, and stablecoins.",
    },
  ]);

  function toggleQuestion(item, itemId) {
    if (item.id === itemId) {
      item.isOpen = !item.isOpen;
      setDatas((prevState) => [...prevState]);
    } else {
      item.isOpen = false;
    }
  }

  return (
    <div className="faq-section container">
      <p className="faq-title">Frequently Asked Questions</p>
      {datas.map((item) => (
        <div className="row">
          <div className="faq-wrapper col-12" key={item.id}>
            <div
              className={item.isOpen ? "faq-item faq-item-hovered" : "faq-item"}
            >
              <div>
                <span className="faq-num">{item.id}</span>
                <span>{item.question}</span>
              </div>
              {!item.isOpen ? (
                <LuPlus onClick={() => toggleQuestion(item, item.id)} />
              ) : (
                <FiMinus onClick={() => toggleQuestion(item, item.id)} />
              )}
            </div>
            <div>
              {item.isOpen ? (
                <p
                  className={
                    item.isOpen
                      ? "faq-answer open faq-item-hovered"
                      : "faq-answer"
                  }
                >
                  {item.answer}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
