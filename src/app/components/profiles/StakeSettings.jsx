
import "../../../assets/css/componentcss/stake.scss";

const StakeSettings = ()=>{
    const arr = [
        {
            name: 500,
            value: 500
        },
        {
            name: 1000,
            value: 1000
        },
        {
            name: 2000,
            value: 2000
        },
        {
            name: 3000,
            value: 3000
        },{
            name: 1000,
            value: 1000
        },{
            name: 2000,
            value: 2000
        },{
            name: 5000,
            value: 5000
        },{
            name: 10000,
            value: 10000
        }
    ];
    return(
        <section className="StakeContainer">
            {
                arr.map((item,index)=>{
                    return(
                       <div className="flex justify-between w-[100%] px-6 space-x-4" key={index}>
                            <div className="formInput">
                                <label>Button Name</label>
                                <input type="number" min="1" max="99999999" maxLength="9" placeholder="stackVal0" value={item?.name}/>
                            </div>
                            <div className="formInput">
                                <label>Button Value</label>
                                <input type="number" min="1" max="99999999" maxLength="9" placeholder="stackVal0" value={item?.value}/>
                            </div>
                       </div>
                    )
                })
            }
            <div className="flex w-[100%] justify-center gap-5 text-sm">
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </section>
    )
}
export default StakeSettings;