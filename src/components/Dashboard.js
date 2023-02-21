import React from "react"

import {useState,useEffect} from "react"

import Menu2 from "./Menu2"

import Marker from "./Marker"

import Circles from "./Circles"

import BarChart from "./BarChart"



import $ from 'jquery'


const Dashboard = () =>
{   

    

    return(
        
        <div className="Home">
            <Menu2 activeTab={'.TAB4'}/>
            <div className="financesDiv">
             <BarChart />
             <div className="NumbersDiv">
                <table className="statistics">
                    <tr>
                        <td>MEMBRES ACTIFS</td>
                        <td>  : </td>
                        <td> 150</td>
                    </tr>
                </table>
                <table className="statistics">
                    <tr>
                        <td>MEMBRES NON ACTIFS</td>
                        <td>  : </td>
                        <td> 300</td>
                    </tr>
                </table>
                <table className="statistics">
                    <tr>
                        <td>Total De ventes ce mois</td>
                        <td>  : </td>
                        <td>  $ </td>
                        <td> 15000</td>
                    </tr>
                </table>
                
            </div>
            <table className="statistics">
                    <tr>
                        <td>MEMBRES</td>
                        <td>  : </td>
                        <td> <span className="redKey">_________________</span></td>
                    </tr>
                </table>
            </div>
            
        </div>
        )
}

export default Dashboard;