const TipsCard = () => {
  return (
    <div className="tips-card">
    <div className="formSection">
      <form action="/" method="post">
        <label htmlFor="Bill" className="form-label">
          Bill
        </label>
        <div className="input-container">
          <img
            src="../assets/icon-dollar.svg"
            className="dollar-icon"
            alt=""
            srcSet=""
          />
          <input
            type="text"
            name=""
            id=""
            className="input-field"
            placeholder="0"
          />
        </div>
        <br />
        <br />
        <label htmlFor="Select Tip" className="form-label">
          Select Tip %
        </label>
        <div className="tabs">
          <div className="tip-tab">5%</div>
          <div className="tip-tab">10%</div>
          <div className="tip-tab">15%</div>
          <div className="tip-tab">25%</div>
          <div className="tip-tab">50%</div>
          <div className="tab-input-container">
            <input
              type="text"
              name=""
              id=""
              placeholder="Custom"
              value="Custom"
              className="tab-input"
            />
          </div>
        </div>
        <br />
        <label htmlFor="No of People" className="form-label">
          Number of People
        </label>
        <div className="input-container">
          <img
            src="../assets/icon-person.svg"
            alt=""
            srcSet=""
            className="person-icon"
          />
          <input
            type="text"
            name=""
            id=""
            className="input-field"
            placeholder="0"
          />
        </div>
      </form>
    </div>
    <div className="amountSection">
      <div className="tip-amount-info">
        <div>
          Tip Amount <br />
          <small style={{ color: "grey" }}>/person</small>
        </div>
        <div className="amount">$4.27</div>
      </div>
      <div className="tip-amount-lastSection">
        <div className="total-amount-info">
          <div style={{ color: "white", fontSize: "12px" }}>
            Total <br />
            <small style={{ color: "grey" }}>/person</small>
          </div>
          <div className="amount">$32.79</div>
        </div>
        <button type="submit" className="reset-btn">
          RESET
        </button>
      </div>
    </div>
  </div>
  );
};

export default TipsCard;
