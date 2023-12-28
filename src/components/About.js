import React, {useState} from "react";
import PropTypes from 'prop-types'


export default function About(props) {
   let mystyle= {
        color : props.modes === "light" ? "black" : "white",
        backgroundColor : props.modes === "light" ? "white" : "black"
    }
  return (
    <div className="container" style={mystyle} tit= {document.title = "Textpulator - About"}>
        <h2 className="my-3">{props.aboutHeading}</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item"style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            ><strong>FAQs (Frequently Asked Questions)</strong>
              
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <p>Check out our Frequently Asked Questions section for quick answers to common queries. It covers a range of topics, from basic functionality to troubleshooting common issues.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item"style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            ><strong>Video Tutorials</strong>
              
            </button>
          </h2>
          <div 
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>Prefer visual guidance? Explore our collection of video tutorials that demonstrate various aspects of our text utility. Whether you're a visual learner or just looking for a quick overview, these videos are designed to make your experience more enjoyable.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item"style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            ><strong>Contact Support</strong>
              
            </button>
          </h2>
          <div 
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>If you can't find the answers you're looking for or need personalized assistance, our support team is here to help. Reach out to us via our Contact Support page, and we'll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item"style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={mystyle}
            ><strong>Provide Feedback</strong>
              
            </button>
          </h2>
          <div 
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>We value your input! Help us improve by providing feedback on your experience with our text utility. Whether it's a suggestion for a new feature or a bug report, your feedback is crucial in shaping the future of our platform.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item"style={mystyle}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={mystyle}
            ><strong>Getting Started</strong>
              
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            New to our text utility? No worries! Visit our Getting Started guide to learn the basics and get up to speed quickly. We walk you through the key features and provide step-by-step instructions to help you harness the full potential of our tool.
            </div>
          </div>
        </div>
        <div className="accordion-item"style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={mystyle}
            ><strong>Help Us</strong>
              
            </button>
          </h2>
          <div 
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>Welcome to Textpulator We're here to make your experience with our text utility as smooth and efficient as possible. If you have any questions or need assistance, you're in the right place. Here's how you can make the most of our text utility:</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

About.propTypes = {aboutHeading : PropTypes.string};
