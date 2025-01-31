import Table from "../subcomponents/Table";

const MarketAnalysis = ()=>{
    const tableHeader = ['Event Type','Event Name','Expose'];
    return(
        <section className="py-4 px-3 space-y-8 h-[60vh] md:h-full">
            <h1>Market Analysis</h1>
            <Table tableHeader={tableHeader}/>
        </section>
    )
}
export default MarketAnalysis;