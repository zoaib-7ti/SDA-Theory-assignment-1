// components/ProposalForm.jsx
import React, { useState } from 'react';
import ProposalController from '../controllers/ProposalController';

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    objective: '',
    problemStatement: '',
    technologies: '',
    teamMembers: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await ProposalController.submitProposal(formData);
    setMessage(response.message);
  };

  return (
    <div>
      <h2>Submit Project Proposal</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Project Title" onChange={handleChange} required />
        <textarea name="objective" placeholder="Objective" onChange={handleChange} required />
        <textarea name="problemStatement" placeholder="Problem Statement" onChange={handleChange} required />
        <input name="technologies" placeholder="Technologies" onChange={handleChange} required />
        <input name="teamMembers" placeholder="Team Members" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ProposalForm;