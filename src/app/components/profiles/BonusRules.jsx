import { useDispatch } from "react-redux";
import { bonus_popup } from "../../redux/slices/stateSlice";
import IconComponent from "../../../assets/icons/IconComponent";
//----------------SCSS-------------------
import "../../../assets/scss/bonusrules.scss";

const BonusRules = () => {
    const dispatch = useDispatch();
    return (
        <section className="rulesBackConatiner">
            <div className="rulesConatiner">
                <div className="rulesHeader">
                    <label>Bonus Rules</label>
                    <span onClick={() => dispatch(bonus_popup(false))}><IconComponent iconType="crossIcon" /></span>
                </div>

                <div className="card-body">
                    <div>
                        <p>All new members! We Welcome you with a 300% Sports Bonus on your starting journey.</p><br></br>
                        <p>=&gt; Claim your bonus immediately and start your journey two times faster.</p><br></br>
                        <p>=&gt; The welcome bonus shall exclusively apply to each user's First deposit and Second deposit&nbsp;&nbsp;and even on Every Deposit on your account.</p><br></br>
                        <p>=&gt; Minimum deposit amount is 300 INR for Every Deposit to claim bonus.</p><br></br>
                        <p>=&gt; Register an account and make your first deposit.</p><br></br>
                        <p>First Deposit :</p><br></br>

                        <p>INR 300-5,000 =&gt; 300%&nbsp;&nbsp;on 200 X True Rolling<br></br>
                            INR 5,001-2,00,000 =&gt;&nbsp;50% or 15,000 Whichever is&nbsp;MORE on 200X True Rolling<br></br>
                            INR 2,00,001 OR MORE =&gt;&nbsp;1,00,000&nbsp;&nbsp;on 200X True Rolling</p>
                        <p>Second Deposit :</p><br></br>

                        <p>INR 300-10,000 =&gt;&nbsp;50 %&nbsp;&nbsp;on 200X True Rolling<br></br>
                            INR 10,001 - 4,00,000 =&gt;&nbsp;25% or 5,000 Whichever is More on 200X True Rolling<br></br>
                            INR 4,00,001 OR MORE =&gt;&nbsp;1,00,000&nbsp;&nbsp;on 200X True Rolling</p>
                        <br></br><br></br>

                        <p>
                            On Every Deposit Bonus (min:1000) :&nbsp;&nbsp;10% on 200 X True Rolling up to Deposit of 10,00,000</p>
                        <br></br>
                        <p>(On&nbsp;&nbsp;Deposit of more than 10,00,000 , you will get Bonus equivalent to deposit of 10,00,000)</p>
                        <br></br>
                        <p>Referral Bonus:</p>
                        <br></br>
                        <p>=&gt; You can also earn from Referring someone to play on this website.</p><br></br>

                        <p>=&gt; You can Earn 20% of First deposit of your Reference, once he Redeem at least 1 coupon of 10 coupons of First Deposit Bonus (If You Refer Someone and He/She deposit 10000 , You Earn 2000 Referral Bonus, Which can be converted in to awaiting bonus after your reference Redeem at least 1000 Bonus Coupons Received by him on First Deposit)</p>
                        <br></br>
                        <p>=&gt; 20% of Your Reference Deposit or 50,000 Whichever is Less on 200X true rolling (Min Deposit:- 2500)</p>
                        <br></br>
                        <p># True Rolling</p>
                        <br></br>
                        <p>=&gt; True Rolling will be calculated on every bet you placed, i.e it is accumulation of true rolling of all bets</p>
                        <br></br>
                        <p>=&gt; True Rolling amount is Exposure created on bet or profit on that exposure ,whichever is less</p>
                        <br></br>
                        <p>i.e if you back&nbsp;&nbsp;10000 on runner at rate of 45, your Rolling Amount will be 4500</p>
                        <br></br>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;if you lay &nbsp;&nbsp;10000 on runner at rate of 35, your Rolling Amount will be 3500</p>

                        <p># For fancy</p>
                        <br></br>
                        <p>=&gt; if you back&nbsp;&nbsp;10000 on any run on even rate, your Rolling Amount will be 10000</p>
                        <br></br>
                        <p>=&gt; if you lay &nbsp;&nbsp;10000 on any run on even rate, your Rolling Amount will be 10000</p>
                        <br></br>
                        <p>=&gt; if you back&nbsp;&nbsp;10000 on any run on at rate of 90, your Rolling Amount will be 9000</p>
                        <br></br>
                        <p>=&gt; if you lay &nbsp;&nbsp;10000 on any run on at rate of 110, your Rolling Amount will be 10000</p>
                        <br></br>
                        <p>=&gt; if you back&nbsp;&nbsp;10000 on any run on at rate of 120, your Rolling Amount will be 10000</p>
                        <br></br>
                        <p>=&gt; if you lay &nbsp;&nbsp;10000 on any run on at rate of 60, your Rolling Amount will be 6000</p>
                        <br></br>
                        <p>- Maximum rolling amount will be of 10,000 per market&nbsp;&nbsp;or maximum limit of bet at the time of result for that event, which ever is less( every session and bookmaker and match odds are different markets, so you can get benefit of maximum limit on every market)</p>
                        <br></br>
                        <p>- Once you completed your Required Rolling, Your Awaited Bonus can be Converted in to Bonus Chips, You Can bet your bonus chips to win the amount which can be withdrawn but you can not withdraw bonus chips</p>
                        <br></br>
                        <p>* All Bets&nbsp;&nbsp;on Cricket , Football and Tennis will be calculated for Bonus , Even Match Odds and Book maker.</p>
                        <br></br>
                        <p>* No minimum Odd Criteria to calculate Bonus</p>
                        <br></br>
                        <p>* No one side bet Criteria in Football,Cricket and Tennis to calculate Bonus</p>
                        <br></br>
                        <p>* All the bonuses will now be divided into 10 equal coupons each. Eg: If the bonus received is Rs. 10000, it will be split into &nbsp;(10000/ 10) = 1000. So you will get 10 coupons with 1000 each. Every coupon is available for reedem after required True Rolling for coupon amount completed</p>
                        <br></br>
                        <p>* Awaiting Bonus will be expire in 14 days</p>
                        <br></br>
                        <p>#Conditions</p>
                        <br></br>
                        <p>=&gt; A New user of the website will not Receive the First Deposit Bonus if the same Device ( Computer, laptop, mobile) is used to make multiple accounts.</p>
                        <br></br>
                        <p>=&gt; Bonus promotion cannot be combined with any other promotion offer.</p>
                        <br></br>
                        <p>=&gt; Void/Cancelled/Draw bets do not considered for bonus.</p>
                        <br></br>
                        <p>=&gt; These Terms and Conditions are subject to the General organisational Terms and Conditions.</p>
                        <br></br>
                        <p>=&gt; Mangement reserves&nbsp;&nbsp;the right to modify, alter, discontinue, cancel, refuse or void this Bonus promotion.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BonusRules;