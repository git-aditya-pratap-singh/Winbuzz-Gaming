
const BonusList = () => {
    return (
        <section className="w-full h-[60vh] md:h-full p-[-0.5rem] flex flex-col gap-2 justify-start items-center">
            <div className="w-full flex items-center px-3 py-2 bg-[#b88831] rounded shadow">
                <label className="text-white text-[1.2rem]">Bonus List</label>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
                <button className="p-2 text-[0.7rem] rounded shadow duration-300 hover:scale-105" style={{ background: "var(--theme-color)" }}>In-Progress</button>
                <button className="p-2 text-[0.7rem] rounded shadow duration-300 hover:scale-105" style={{ background: "var(--theme-color)" }}>Redeemed</button>
                <button className="p-2 text-[0.7rem] rounded shadow duration-300 hover:scale-105" style={{ background: "var(--theme-color)" }}>Expired & Void</button>
            </div>
        </section>
    )
}
export default BonusList;