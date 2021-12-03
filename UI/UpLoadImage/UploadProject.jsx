import React from 'react'
import { ButtonFilled,ButtonOutlined } from '../../components/Button/Button'
import Image from "next/image";

function UploadProject() {
    return (
        <form>
        <h5 className="h5 text-secondary mx-5 ">Projects</h5>
        
        <div className="mb-2">
                    <label className="form-label">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
        
                  <div className="mb-2">
                    <label className="form-label">Project Description</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
              
                  <div className="mb-2">
                    <label className="form-label">Attach Image </label>
                    <input
                      type="file"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
        
                  <div className="mb-2">
                    <label className="form-label">Project Description</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Attach Image </label>
                    <input
                      type="file"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
        
                  <div className="mb-2">
                    <label className="form-label">Project Description</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Attach Image </label>
                    <input
                      type="file"
                      className="form-control"
                      required
                    />
                  </div>
        
                  <input
                    type="submit"
                    value="Submit project/s"
                    style={{ backgroundColor: "#04739B" }}
                    className="btn  rounded-0 border-0 w-100 text-light my-2"
                  />
                </form>
    )
}

export default UploadProject
