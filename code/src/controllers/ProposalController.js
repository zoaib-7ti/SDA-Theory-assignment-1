// controllers/ProposalController.js
import ProposalService from '../services/ProposalService.js';

const ProposalController = {
  async submitProposal(formData) {
    return await ProposalService.getInstance().handleProposalSubmission(formData);
  }
};

export default ProposalController;