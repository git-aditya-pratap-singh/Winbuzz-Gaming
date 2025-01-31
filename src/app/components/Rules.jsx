import { useState } from "react";
import { useDispatch } from "react-redux";
import { rules_popup } from "../redux/slices/stateSlice";
//-----------Icons Components--------------
import IconComponent from "../../assets/icons/IconComponent";
//-------------SCSS and JSON---------------
import data from "../data/data.json";
import "../../assets/scss/rules.scss";

const RulesBody = ({ id, title, subTitle, isVisible, setIsVisible }) => {
    return (
        <div className="rulesChildContainer" key={id} onClick={() => setIsVisible(!isVisible)}>
            <div className="rulesChildHeader">
                <label>{title}</label>
            </div>
            <div className="">
                {
                    isVisible && subTitle.map((data) => {
                        return (
                            <div className="rulesChildBody" key={data.id}>
                                <div className="child">
                                    <p>{data.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const Rules = () => {
    const dispatch = useDispatch();
    const [visibleSection, setVisibleSection] = useState(false);
    return (
        <section className="rulesBackConatiner">
            <div className="rulesConatiner">

                <div className="rulesHeader">
                    <label>Rules</label>
                    <span onClick={() => dispatch(rules_popup(false))}><IconComponent iconType="crossIcon" /></span>
                </div>

                <div className="rulesBody space-y-5">
                    {
                        data?.rulesData.map((items, index) => {
                            return (
                                <RulesBody key={index} id={items.id} title={items.title} subTitle={items.subTitle}
                                    isVisible={visibleSection === items.id}
                                    setIsVisible={(display) => {
                                        if (display) {
                                            setVisibleSection(items.id);
                                        } else {
                                            setVisibleSection(" ");
                                        }
                                    }}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}
export default Rules;