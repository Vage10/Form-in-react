import React from "react";
import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };
        const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };
  return (
    <div>
      <h1>Form in react</h1>
      <fieldset>
        <form  action="#" method="get">
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              onChange={(e) =>
                setFirstName(e.target.value)
            }
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              onChange={(e) =>
                setLastName(e.target.value)
            }
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Email*
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) =>
                setEmail(e.target.value)
            }
              placeholder="Enter Email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              Contact*
            </label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              onChange={(e) =>
                setContact(e.target.value)
            }
              placeholder="Enter Mobile Number"
              required
            />
          </div>
          <label htmlFor="gender">Gender*</label>
          <input type="radio" onChange={(e) =>
                            setGender(e.target.value)
                        }/>
          Female
          <input type="radio" onChange={(e) =>
                            setGender(e.target.value)
                        }/>
          Male
          <input type="radio" onChange={(e) =>
                            setGender(e.target.value)
                        }/>
          Other
          <label htmlFor="lang">Your best Subject*</label>
          <input type="checkbox" onChange={(e) =>
                            handleSubjectChange("English")
                        }/>
          English
          <input type="checkbox" onChange={(e) =>
                            handleSubjectChange("Maths")
                        }/>
          Maths
          <input type="checkbox" onChange={(e) =>
                            handleSubjectChange("Physics")
                        }/>
          Physics
          <label htmlFor="file">Upload Resume*</label>
          <div className="input-group my-2">
            <input
              type="file"
              className="form-control"
              placeholder="Enter upload file"
              id="inputGroupFile01"
              onChange={(e) =>
                setResume(e.target.value)
            }
              required
            />
          </div>
          <label htmlFor="url">Enter URL*</label>
          <div className="input-group my-2">
            <input
              type="url"
              placeholder="Enter url"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) =>
                setUrl(e.target.value)
            }
            />
          </div>
          <label className="my-3">Select your choice</label>
          <div className="input-group">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option>Select your ans</option>
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="3">Advanced</option>
            </select>
          </div>
          <label className="my-3">About*</label>
          <textarea
            className="form-control"
            placeholder="About Yourself"
            id="about"
            cols={30}
            rows={10}
            onChange={(e) =>
              setAbout(e.target.value)
          }
          ></textarea>
          <h5 className="my-3">Submit or Reset</h5>
          <div className="d-flex justify-content-around">
            <button type="reset" className="btn btn-primary" onClick={() => handleReset()}>
              Reset
            </button>
            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}