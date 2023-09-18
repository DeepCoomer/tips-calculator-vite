import { useEffect, useState } from "react";
import dolloricon from "../assets/icon-dollar.svg";
import personicon from "../assets/icon-person.svg";

const TipsCard = () => {
  const [tipPerPerson, setTipPerson] = useState<number | string>(0);
  const [totalAmount, setTotalAmount] = useState<number | string>(0);
  const [bill, setbill] = useState(0);
  const [tipPercent, settipPercent] = useState(0);
  const [customTip, setcustomTip] = useState(0);
  const [noOfPeople, setnoOfPeople] = useState(0);

  const [billError, setbillError] = useState(false)
  const [tipPercentError, settipPercentError] = useState(false)
  const [noOfPeopleError, setnoOfPeopleError] = useState(false)


  const [activeTabs, setactiveTabs] = useState({
    "5": false,
    "10": false,
    "15": false,
    "25": false,
    "50": false,
  });

  useEffect(() => {
    if (Number.isNaN(bill)) {
      setbillError(true)
      return;
    } else {
      setbillError(false)
    }
    if (noOfPeople <= 0) {
      return;
    }

    if (tipPercent < 0) {
      return;
    }

    calculateAndDisplayTip();
  }, [bill]);

  useEffect(() => {
    if (Number.isNaN(noOfPeople)) {
      return;
    }
    if (bill <= 0) {
      return;
    }

    if (tipPercent < 0) {
      return;
    }
    console.log(noOfPeople);
    calculateAndDisplayTip();
  }, [noOfPeople]);

  useEffect(() => {
    if (Number.isNaN(tipPercent)) {
      return;
    }
    if (bill <= 0) {
      return;
    }
    if (noOfPeople <= 0) {
      return;
    }
    calculateAndDisplayTip();
  }, [tipPercent]);

  const calculateAndDisplayTip = () => {
    if (Number.isNaN(bill) || bill == Number.POSITIVE_INFINITY || bill == Number.NEGATIVE_INFINITY) {
      setTotalAmount(0)
      setTipPerson(0)
      setbillError(true)
      throw new Error("Invalid Input");
      // return;
    } else {
      setbillError(false)
    }
    if (Number.isNaN(noOfPeople) || noOfPeople == Number.POSITIVE_INFINITY || noOfPeople == Number.NEGATIVE_INFINITY) {
      setTotalAmount(0)
      setTipPerson(0)
      throw new Error("Invalid Input");
      // return;
    }

    if (Number.isNaN(tipPercent) || tipPercent == Number.POSITIVE_INFINITY || tipPercent == Number.NEGATIVE_INFINITY) {
      throw new Error("Invalid Input");
      // return;
    }
    // if (customTip <=0) {
    //   return;
    // }
    const totalTip: number = (bill * tipPercent) / 100;
    setTipPerson(totalTip / noOfPeople);
    const totalAmount =
      parseFloat(bill.toString()) + parseFloat(totalTip.toString());
    setTotalAmount(parseFloat((totalAmount / noOfPeople).toString()));
  };

  const handleReset = () => {
    setbill(0);
    settipPercent(0);
    setcustomTip(0);
    setnoOfPeople(0);
    setTotalAmount(0);
    setTipPerson(0);
    setactiveTabs({
      "5": false,
      "10": false,
      "15": false,
      "25": false,
      "50": false,
    });
  };

  return (
    <div className="tips-card">
      <div className="formSection">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="Bill" className="form-label">
            Bill
          </label>
          <label htmlFor="bill" id="bill-error" className={billError ? "error-active" : "error bill-error"}>
            Invalid Input
          </label>
        </div>
        <div className="input-container" id="bill-container">
          <img src={dolloricon} className="dollar-icon" alt="" srcSet="" />
          <input
            type="number"
            inputMode="numeric"
            name="bill"
            id="bill"
            className="input-field bill-field"
            placeholder="0"
            min="0.01"
            step="0.01"
            value={bill}
            onChange={(e: any) => setbill(e.target.value)}
          />
        </div>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="Select Tip" className="form-label">
            Select Tip %
          </label>
          <label htmlFor="tip" id="tip-error" className="error tip-error">
            Invalid Input
          </label>
        </div>
        <div className="tabs">
          <label
            className="tip-tab"
            style={activeTabs["5"] ? { backgroundColor: "#26c2ad" } : {}}
            onClick={() =>
              setactiveTabs({
                "5": true,
                "10": false,
                "15": false,
                "25": false,
                "50": false,
              })
            }
          >
            <input
              type="radio"
              name="tip"
              id="tip-5"
              value="5"
              className="tab-input-hidden tip-button"
              checked={tipPercent === parseFloat("5")}
              onChange={(e) => settipPercent(parseFloat(e.target.value))}
            />
            5%
          </label>

          <label
            className="tip-tab"
            style={activeTabs["10"] ? { backgroundColor: "#26c2ad" } : {}}
            onClick={() =>
              setactiveTabs({
                "5": false,
                "10": true,
                "15": false,
                "25": false,
                "50": false,
              })
            }
          >
            <input
              type="radio"
              name="tip"
              id="tip-10"
              value="10"
              className="tab-input-hidden tip-button"
              checked={tipPercent === parseFloat("10")}
              onChange={(e) => settipPercent(parseFloat(e.target.value))}
            />
            10%
          </label>

          <label
            className="tip-tab"
            style={activeTabs["15"] ? { backgroundColor: "#26c2ad" } : {}}
            onClick={() =>
              setactiveTabs({
                "5": false,
                "10": false,
                "15": true,
                "25": false,
                "50": false,
              })
            }
          >
            <input
              type="radio"
              name="tip"
              id="tip-15"
              value="15"
              className="tab-input-hidden tip-button"
              checked={tipPercent === parseFloat("15")}
              onChange={(e) => settipPercent(parseFloat(e.target.value))}
            />
            15%
          </label>

          <label
            className="tip-tab"
            style={activeTabs["25"] ? { backgroundColor: "#26c2ad" } : {}}
            onClick={() =>
              setactiveTabs({
                "5": false,
                "10": false,
                "15": false,
                "25": true,
                "50": false,
              })
            }
          >
            <input
              type="radio"
              name="tip"
              id="tip-25"
              value="25"
              className="tab-input-hidden tip-button"
              checked={tipPercent === parseFloat("25")}
              onChange={(e) => settipPercent(parseFloat(e.target.value))}
            />
            25%
          </label>

          <label
            style={activeTabs["50"] ? { backgroundColor: "#26c2ad" } : {}}
            className="tip-tab"
            onClick={() =>
              setactiveTabs({
                "5": false,
                "10": false,
                "15": false,
                "25": false,
                "50": true,
              })
            }
          >
            {" "}
            <input
              type="radio"
              name="tip"
              id="tip-50"
              value="50"
              className="tab-input-hidden tip-button"
              checked={tipPercent === parseFloat("50")}
              onChange={(e) => settipPercent(parseFloat(e.target.value))}
            />
            50%
          </label>

          <div className="tab-input-container" id="selected-tip-container">
            <input
              type="number"
              inputMode="numeric"
              name="tip-custom"
              id="tip-custom"
              placeholder="Custom"
              min="0"
              step="1"
              className="tab-input custom-tip"
              value={customTip}
              onChange={(e) => {
                settipPercent(parseFloat(e.target.value));
                setcustomTip(parseFloat(e.target.value));
              }}
            />
          </div>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="No of People" className="form-label">
            Number of People
          </label>
          <label
            htmlFor="No of People"
            id="no-of-people-error"
            className="error no-of-people-error"
          >
            Invalid Input
          </label>
        </div>
        <div className="input-container" id="people-container">
          <img src={personicon} alt="" srcSet="" className="person-icon" />
          <input
            type="number"
            inputMode="numeric"
            min="0"
            step="1"
            name="no-of-people"
            id="no-of-people"
            className="input-field people-field"
            placeholder="0"
            value={noOfPeople}
            onChange={(e: any) => setnoOfPeople(e.target.value)}
          />
        </div>
      </div>
      <div className="amountSection">
        <div className="tip-amount-info">
          <div>
            Tip Amount <br />
            <small style={{ color: "grey" }}>/person</small>
          </div>
          <div className="amount" id="tipPerPerson">
            ${parseFloat(tipPerPerson.toString()).toFixed(2)}
          </div>
        </div>
        <div className="tip-amount-lastSection">
          <div className="total-amount-info">
            <div style={{ color: "white", fontSize: "12px" }}>
              Total <br />
              <small style={{ color: "grey" }}>/person</small>
            </div>
            <div className="amount" id="amountPerPerson">
              ${parseFloat(totalAmount.toString()).toFixed(2)}
            </div>
          </div>
          <button
            type="submit"
            className="reset-btn"
            onClick={() => handleReset()}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
