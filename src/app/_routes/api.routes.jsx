import { createBrowserRouter, Navigate } from "react-router-dom";
import {IsloginGuard, ProctedRouteGuard} from "../_guard/route.guard";
import Dashboard from "../pages/home/dashboard";
import Home from "../components/Home"; 
import Registration from "../pages/home/Registration";
import MyBets from "../components/profiles/MyBets";
import ProfitLoss from "../components/profiles/ProfitLoss";
import AccountStatment from "../components/profiles/AccountStatement";
import MarketAnalysis from "../components/profiles/MarketAnalysis";
import StakeSettings from "../components/profiles/StakeSettings";
import ChangePassword from "../components/profiles/ChangePassword";
import GameDetails from "../pages/home/GameDetails";
import RefferAndEarn from "../components/profiles/RefferAndEarn";
import BonusList from "../components/profiles/BonusList";
import GameList from "../pages/GameList/GameList";
import NotFound from "../pages/home/NotFround";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />, 
        children: [
            {
                index: true, 
                element: <Navigate to="/dashboard" />, 
            },
            {
                path: "/dashboard",  
                element: <Home />
            },
            {
                path: "/reports/bet-history",
                element: (
                    <IsloginGuard>
                      <MyBets/>
                    </IsloginGuard>
                )
            },
            {
                path: "/reports/profit-loss",
                element: (
                    <IsloginGuard>
                      <ProfitLoss/>
                    </IsloginGuard>
                )
            },
            {
                path: "/reports/account-statement",
                element: (
                    <IsloginGuard>
                      <AccountStatment/> 
                    </IsloginGuard>
                )
            },
            {
                path: "/market-analysis",
                element: (
                    <IsloginGuard>
                      <MarketAnalysis/>
                    </IsloginGuard>
                )
            },
            {
                path: "/settings",
                element: (
                    <IsloginGuard>
                      <StakeSettings/>
                    </IsloginGuard>
                )
            },
            {
                path: "/change-password",
                element: (
                    <IsloginGuard>
                      <ChangePassword/>
                    </IsloginGuard>
                )
            },
            {
                path: "/game-detail/:id",
                element: (
                    <IsloginGuard>
                       <GameDetails/>
                    </IsloginGuard>
                )
            },
            {
                path: "/reffer-and-earn",
                element: (
                    <IsloginGuard>
                       <RefferAndEarn/>
                    </IsloginGuard>
                )
            },{
                path: "/bonus-list",
                element: (
                    <IsloginGuard>
                       <BonusList/>
                    </IsloginGuard>
                )
            },
            {
                path: "/game-list/:id",
                element: (
                    <IsloginGuard>
                       <GameList/>
                    </IsloginGuard>
                )
            }
        ],
    },
    
    {
        path: "/register",  
        element: (
            <ProctedRouteGuard>
               <Registration />
            </ProctedRouteGuard>
        ),
    },
    {
        path: "*",  // Catch-all route for 404
        element: <NotFound/>,
    },
]);

export default router;
