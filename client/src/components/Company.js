import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export class Company extends Component {
         state = { clicked: false };
         render() {
           return (
             <div class="card">
               <div class="card-header">Company</div> 
               <div class="card-body">
                 <h5 class="card-title">
                    <p>Arabic Name: {this.props.form.arabicName}</p>
                    <p>English Name: {this.props.form.englishName}</p>
                 </h5>
                 <p class="card-text">
                    <p>ID: {this.props.form._id}</p>
                    <p>Law: {this.props.form.law}</p>
                    <p>Legal Form: {this.props.form.legalForm}</p>
                    <p>Form Type: {this.props.form.formType}</p>
                    <p>Address: {this.props.form.address}</p>
                    <p>Phone Number: {this.props.form.phone}</p>
                    <p> Number: {this.props.form.fax}</p>
                    <p>Created On: {this.props.form.createdOn}</p>
                    <p>Capital Currency: {this.props.form.capitalCurr}</p>
                    <p>Capital Value: {this.props.form.capitalVal}</p>

                    {this.props.form.boardOfDirectors.map( BoardOfDirector =>
                        (
                            <div>
                            <p>--Board Of Directors--</p>
                            Name: {BoardOfDirector.name}
                            <p></p>
                            Nationality: {BoardOfDirector.nationality}
                            <p></p>
                            Address: {BoardOfDirector.address}
                            <p></p>
                            Gender: {BoardOfDirector.gender}
                            <p></p>
                            BirthDate: {BoardOfDirector.birthdate}
                            <p></p>
                            ID: {BoardOfDirector.idNum}
                            <p></p>
                            Type Of ID: {BoardOfDirector.typeID}
                            <p></p>
                            Position: {BoardOfDirector.position}
                            <p></p>
                            </div>
                        )
                    )
                    }

                 </p>
               </div>
             </div>
           );
         }
       }

export default Company;
