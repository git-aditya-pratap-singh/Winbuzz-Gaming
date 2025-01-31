import IconComponent from "../../../assets/icons/IconComponent";

const RefferAndEarn = () => {
    return (
        <section className="w-full p-[-0.5rem] flex flex-col gap-2 justify-center items-center">
            <div className="w-full flex items-center px-3 py-2 bg-[#b88831] rounded shadow">
                <label className="text-white text-[1.2rem]">Referral</label>
            </div>

            <div className="w-full flex flex-col space-y-3 justify-center items-center px-3 py-2 bg-[#b88831] rounded shadow">
                <label className="font-semibold text-[1.2rem] text-white">REFER AND EARN!</label>
                <div className="flex flex-row space-x-3">
                    <span><IconComponent iconType="faceBookIcon" iconSize={25} iconColor="#0288f7" /></span>
                    <span><IconComponent iconType="twitterIcon" iconSize={25} iconColor="#3498eb" /></span>
                    <span><IconComponent iconType="teligramIcon" iconSize={25} iconColor="#3498eb" /></span>
                    <span><IconComponent iconType="whatsappIcon" iconSize={25} iconColor="#04db3a" /></span>
                    <span><IconComponent iconType="instagramIcon" iconSize={25} iconColor="#f0023a" /></span>
                </div>
                <p className="text-white text-[0.8rem]">Keep your friends close and referral friends closer! Invite your friends and family to sign up using your personal referral code
                    (mentioned below) and get 20% of each and every one of their deposits made thereafter!</p>
            </div>

            <div className="bg-gray-800 rounded shadow px-2 py-4 text-center text-white text-sm w-[70%]">
                <label>Don’t wait, start making HUGE PROFITS NOW! Use my special code mLzC7u to Sign-Up & Get a 20% Referral Bonus!
                    https://winbuzz.com</label>
            </div>

            <div className="px-3 py-2 rounded text-white shadow flex items-center space-x-2 cursor-pointer"
                style={{ background: "var(--theme-color)" }}>
                <p>Copy</p>
                <IconComponent iconType="copyIcon" />
            </div>

            <div className="bg-gray-800 rounded shadow px-2 py-4 text-center text-white text-sm w-[70%]">
                <label>mLzC7u</label>
            </div>

            <div className="px-3 py-2 rounded text-white shadow flex items-center space-x-2 cursor-pointer"
                style={{ background: "var(--theme-color)" }}>
                <p>Copy</p>
                <IconComponent iconType="copyIcon" />
            </div>

        </section>
    )
}
export default RefferAndEarn;