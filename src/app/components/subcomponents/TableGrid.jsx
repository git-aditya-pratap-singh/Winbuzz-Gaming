import IconComponent from "../../../assets/icons/IconComponent";
import "../../../assets/scss/_tablegrid.scss";


const TableGrid = () => {
    return (
        <section className="table-container">
            <div className="constiner-Header">
                <div className="header1">
                    <label>SESSION</label>
                </div>
                <div className="header2">
                    <label>NO</label>
                    <label>YES</label>
                </div>
            </div>

            <div className="table-body">
                <div className="row-section">
                    <div className="row-section-A">
                        <span><IconComponent iconType="starIcon" /></span>
                        <label>10 Over Runs HH (N)</label>
                    </div>

                    <div className="row-section-B">
                        <div className="flex items-center gap-2">

                            {/* <div className="ball-running">Suspended</div> */}

                            <div className="flex flex-col justify-center items-center py-1 px-2 rounded bg-[#a5d9fe]">
                                <label className="text-[0.8rem] font-bold">13.76</label>
                                <span className="text-[0.7rem]">87.76</span>
                            </div>

                            <div className="flex flex-col justify-center items-center py-1 px-2 rounded bg-[#f8d0ce]">
                                <label className="text-[0.8rem] font-bold">13.76</label>
                                <span className="text-[0.7rem]">87.76</span>
                            </div>

                        </div>
                        <div className="flex flex-col items-center justify-center text-[0.55rem]">
                            <label>Min Bet: 100</label>
                            <label>Max Market: 50k</label>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default TableGrid;