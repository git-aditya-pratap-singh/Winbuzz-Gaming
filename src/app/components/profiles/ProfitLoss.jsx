import Table from "../subcomponents/Table";
import "../../../assets/css/componentcss/mybets.scss";

const ProfitLoss = ()=>{
    const tableHeader = ['No','Date','Event Name','Event','Amount'];
    return(
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
                         <Table tableHeader={tableHeader}/>
                        {/* <div>
                            <table className="listing apl-table bybet-table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Event Name</th>
                                        <th>Nation</th>
                                        <th>Bet Type</th>
                                        <th>User Rate</th>
                                        <th>Amount</th>
                                        <th>Profit/loss</th>
                                        <th>Place Date</th>
                                        <th>Match Date</th>
                                    </tr>
                                </thead>
                                <tbody role="rowgroup">
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td colSpan="8">No Data To Display</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="row row5 mt-2">
                                <div className="col-12">
                                    <ul role="menubar" aria-disabled="false" aria-label="Pagination" className="pagination mb-0 b-pagination justify-content-center">
                                        <li role="presentation" className="page-item disabled">
                                            <a role="menuitemradio" href="javascript:void(0);" className="page-link">
                                                « Previous
                                            </a>
                                        </li>
                                        <li role="presentation" className="page-item active">
                                            <a role="menuitemradio" href="javascript:void(0);" className="page-link">1</a>
                                        </li>
                                        <li role="presentation" className="page-item disabled">
                                            <a role="menuitemradio" href="javascript:void(0);" className="page-link">Next »</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                    </div>
                </section>
    )
}
export default ProfitLoss;