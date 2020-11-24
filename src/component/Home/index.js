import React, { Component } from "react";
import styles from "./index.module.css";

import Logo from "../../asset/logo.png";

export class index extends Component {
   render() {
      return (
         <div className={styles.homeContainer}>
            <img src={Logo} className={styles.logo}></img>
            <div className={styles.headerContainer}>
               <h1>IT Service Request Form</h1>
               <p>Please fill out this form</p>
               <p>IT team member will be in touch with you shortly</p>
            </div>
            {/* Form */}
            <form className={styles.formContainer}>
               <div className="form-group row">
                  <label for="inputName" className="col-sm-2 col-form-label">
                     Fullname
                  </label>
                  <div className="col-sm-10">
                     <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Fullname"
                     />
                  </div>
               </div>
               <div className="form-group row">
                  <label for="inputPhone" className="col-sm-2 col-form-label">
                     Phone
                  </label>
                  <div className="col-sm-10">
                     <input
                        type="number"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Phone"
                     />
                  </div>
               </div>
               <div className="form-group row">
                  <label
                     for="inputDepartment"
                     className="col-sm-2 col-form-label"
                  >
                     Department
                  </label>
                  <div className="col-sm-10">
                     <input
                        type="text"
                        className="form-control"
                        id="inputDepartment"
                        placeholder="Department"
                     />
                  </div>
               </div>
               {/* Issue */}
               <div className={styles.issueContainer}>
                  <p>What are you having issues with?</p>
                  <div className={styles.issueCheckboxContainer}>
                     <div class="form-check">
                        <input
                           class="form-check-input"
                           type="checkbox"
                           value=""
                           id="laptop"
                        />
                        <label class="form-check-label" for="laptop">
                           Laptop
                        </label>
                     </div>

                     <div class="form-check">
                        <input
                           class="form-check-input"
                           type="checkbox"
                           value=""
                           id="phone"
                        />
                        <label class="form-check-label" for="phone">
                           Phone
                        </label>
                     </div>

                     <div class="form-check">
                        <input
                           class="form-check-input"
                           type="checkbox"
                           value=""
                           id="desktop"
                        />
                        <label class="form-check-label" for="desktop">
                           Desktop
                        </label>
                     </div>

                     <div class="form-check">
                        <input
                           class="form-check-input"
                           type="checkbox"
                           value=""
                           id="network"
                        />
                        <label class="form-check-label" for="network">
                           Network
                        </label>
                     </div>

                     <div class="form-check">
                        <input
                           class="form-check-input"
                           type="checkbox"
                           value=""
                           id="application"
                        />
                        <label class="form-check-label" for="application">
                           Application
                        </label>
                     </div>
                  </div>
               </div>
               {/* Textarea */}
               <div class="form-group">
                  <label for="exampleFormControlTextarea1">Note</label>
                  <textarea
                     class="form-control"
                     id="exampleFormControlTextarea1"
                     rows="3"
                  ></textarea>
               </div>
               {/* Submit Button */}
               <button
                  class="btn btn-primary justify-content-center"
                  type="submit"
               >
                  Submit form
               </button>
            </form>
         </div>
      );
   }
}

export default index;
