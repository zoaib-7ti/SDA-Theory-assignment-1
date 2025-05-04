// repositories/ProposalRepository.js

const proposals = [];

const ProposalRepository = {
  saveProposal(proposal) {
    try {
      proposals.push({ ...proposal, timestamp: new Date() });
      return true;
    } catch (error) {
      return false;
    }
  },
};

export default ProposalRepository;
