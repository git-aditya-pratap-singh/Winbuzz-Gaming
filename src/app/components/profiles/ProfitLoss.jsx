import Table from "../subcomponents/Table";
//--------------SCSS-------------------
import "../../../assets/scss/mybets.scss";

const ProfitLoss = () => {
    const tableHeader = ['No', 'Date', 'Event Name', 'Event', 'Amount'];
    return (
        <section className="betsConatiner">
            {/* <h1>By Bets</h1> */}
            <div className="betsHeader">
                <h1 className="betsHeading">Betting Profit and Loss</h1>
                <div className="betsHeader-section-item">
                    <div className="gridDate">
                        <div className="input-select-w">
                            <label>From</label>
                            <input name="date" type="date" autoComplete="off" placeholder="Select Date" />
                        </div>

                        <div className="input-select-w">
                            <label>To</label>
                            <input name="date" type="date" autoComplete="off" placeholder="Select Date" />
                        </div>
                        <button>Apply</button>

                    </div>
                </div>
            </div>
            <div className="betsBody">
                <Table tableHeader={tableHeader} />
            </div>
        </section>
    )
}
export default ProfitLoss;