import React from 'react'
import backgroundphoto from './IMG_20230302_133257.jpg'
import samplePDF1 from './Application for ID Card.pdf'
import samplePDF2 from './intercom updated list.docx'
import samplePHOTO1 from './IMG_20230304_005919.jpg'
import samplePHOTO2 from './Screenshot (1).png'
import { Link } from 'react-router-dom'
export default function Download() {
    return (
        <section class="intro">
            <div class="bg-image h-100" style={{ backgroundImage: `url(${backgroundphoto})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div class="mask d-flex align-items-center h-100" style={{ backgroundColor: "rgba(0,0,0,.25)" }}>
                    <div class="container" style={{animation: "1s ease-out 0s 1 slideInFromLeft"}}>
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="card bg-dark shadow-2-strong chauhansabh">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-dark table-borderless mb-0 mt-4">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className='text-decoration-underline'>S.No</th>
                                                        <th scope="col" className='text-center text-decoration-underline'>DESCRIPTION</th>
                                                        <th scope="col" className='text-decoration-underline'>DOWNLOAD/OPEN</th>
                                                        {/* <th scope="col">AGE</th>
                                                        <th scope="col">ADDRESS</th>
                                                        <th scope="col">SALARY</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td >Application form for issuance of identity  card</td>
                                                        <td><a href={samplePDF1} target="_blank" rel="noreferrer">Click Here</a></td>
                                                        {/* <td>61</td>
                                                        <td>Edinburgh</td>
                                                        <td>$320,800</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td >List of Intercom numbers</td>
                                                        <td><a href={samplePDF2} target="_blank" rel="noreferrer">Click Here</a></td>
                                                        {/* <td>23</td>
                                                        <td>Edinburgh</td>
                                                        <td>$103,600</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td >Circular: Authorization of Leave for six days working outsource workman</td>
                                                        <td><a href={samplePHOTO1} target="_blank" rel="noreferrer">Click Here</a></td>
                                                        {/* <td>30</td>
                                                        <td>London</td>
                                                        <td>$90,560</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td >Order: Basic Facilities to Hon'ble VC and Pro VC</td>
                                                        <td><a href={samplePHOTO2} target="_blank" rel="noreferrer">Click Here</a></td>
                                                        {/* <td>22</td>
                                                        <td>Edinburgh</td>
                                                        <td>$342,000</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td >Order: Basic Facilities to Registrar/HoD/Dean/COF/COE/Chief Warden/OIC B.Tech (Evening)
                                                            Head CC/ Director IQC/Head T&P and equivalent Officer based on functional requirement.</td>
                                                        <td>cmarshall28@example.com</td>
                                                        {/* <td>36</td>
                                                        <td>San Francisco</td>
                                                        <td>$470,600</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td >Order: Basic Facilities to Hostel Warden/Security Officer/ Transport Officer/ Associate

                                                            HoD/Associate Director IQAC, Additional Director (IA), Assistant Diretor (IA)</td>
                                                        <td>hkennedy63@example.com</td>
                                                        {/* <td>43</td>
                                                        <td>London</td>
                                                        <td>$313,500</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td >Order: Basic Facilities to Dy. Registrar/I/C Hostel Office/ Network Manager/ OSD (Exam&

                                                            results)/ Executive Engineer/OIC GA/OIC S&P/Librarian/Associate Deans and equivalent

                                                            Officer based on functional requirement/ Assistant Registrar/ Staff Officer to VC/

                                                            Account Officer/ Statistical Officer/AAO/Section Officer</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">8</th>
                                                        <td >Order: Basic Facilities to Director (Physical Education)</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">9</th>
                                                        <td >Order: Basic Facilities to OSD B.Tech. (Eve.)</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">10</th>
                                                        <td >Order: Basic Facilities to Drivers</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">11</th>
                                                        <td >LIST OF EMPANELLED PRIVATE HOSPITALS/ DIAGNOSTIC CENTRES UNDER DGEHS IN DELHI & NCR</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">12</th>
                                                        <td >Revised Medical Form for Reimbursement  and Check List</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">13</th>
                                                        <td >FREQUENTLY ASKED QUESTIONS ABOUT DGEHS</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">14</th>
                                                        <td >Indent Form for Hospitality</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">15</th>
                                                        <td >LIST OF DELHI GOVT. DISPENSARY (DGEHS)</td>
                                                        <td>tfitzpatrick00@example.com</td>
                                                        {/* <td>19</td>
                                                        <td>Warsaw</td>
                                                        <td>$385,750</td> */}
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
