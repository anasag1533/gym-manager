import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import $ from 'jquery'

const BarChart = () => {

    

  return (<div>
             <h1 className="chartTitle">VARIATION DE NOMBRE DE MEMBRES LES DERNIERS 8 MOIS</h1>
                <div class="chart-container">
                    <div className="base"></div>
                    <ul className="meter">
                    <li className="axeY"><div className="axeY">MEMBRES</div></li>
                    <li className="axeY"><div className="axeY">80</div></li>
                    <li className="axeY"><div className="axeY">60</div></li>
                    <li className="axeY"><div className="axeY">40</div></li>
                    <li className="axeY"><div className="axeY">20 </div></li>
                    </ul>
                    <table>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    </table>
                
                    <div class="bar one"></div>   
                    <div class="bar two"></div>   
                    <div class="bar three"></div>
                    <div class="bar four"></div>   
                    <div class="bar five"></div>   
                    <div class="bar six"></div>
                    <div class="bar seven"></div>   
                    <div class="bar eight"></div>
                    <div class="bar nine"></div>
                    <div class="bar ten"></div>
                    <div class="bar eleven"></div>
                    <div class="bar twelve"></div> 
                </div>
  </div>)
}

export default BarChart;