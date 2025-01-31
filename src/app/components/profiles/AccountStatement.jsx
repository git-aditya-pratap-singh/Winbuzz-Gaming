import Table from "../subcomponents/Table";

const AccountStatment = () => {
    const tableHeader = ['Sr No', 'Date', 'Credit', 'Debit', 'Balence', 'Remark'];
    return (
        <section className="betsConatiner">
            {/* <h1>By Bets</h1> */}
            <div className="betsHeader">
                <h1 className="betsHeading">Account Statement</h1>
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

                        <div className="input-select-w">
                            <label>Types</label>
                            <select name="reportType">
                                <option value="ALL">All Sports</option>
                                <option value="4">Cricket</option>
                                <option value="1">Football</option>
                                <option value="2">Tennis</option>
                                <option value="2378961">Politics</option>
                                <option value="99999">Casino</option>
                                <option value="99998">Int Casino</option>
                                <option value="99991">Sports book</option>
                                <option value="7">Horse Racing</option>
                                <option value="4339">Greyhound Racing</option>
                                <option value="99990">Binary</option>
                                <option value="99994">Kabaddi</option>
                                <option value="7522">Basketball</option>
                                <option value="7511">Baseball</option>
                                <option value="20">Table Tennis</option>
                                <option value="998917">Volleyball</option>
                                <option value="7524">Ice Hockey</option>
                                <option value="5">Rugby</option>
                                <option value="26420387">Mixed Martial Arts</option>
                                <option value="3503">Darts</option>
                                <option value="29">Futsal</option>
                            </select>
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
export default AccountStatment;