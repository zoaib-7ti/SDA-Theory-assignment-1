// services /ProposalService.js
import ProposalRepository from "../repositories/ProposalRepository.js";
import NotificationService from "./ NotificationService.js";

class ProposalService {
  static instance;

  constructor() {
    this.notificationService = new NotificationService();
  }

  static getInstance() {
    if (!ProposalService.instance) {
      ProposalService.instance = new ProposalService();
    }
    return ProposalService.instance;
  }

  async handleProposalSubmission(data) {
    // Validation
    if (!data.title || !data.objective || !data.problemStatement) {
      return { success: false, message: "All fields are required." };
    }

    // Simulate database insert
    const saved = ProposalRepository.saveProposal(data);

    if (saved) {
      this.notificationService.notify(
        "supervisor@example.com",
        "New proposal submitted."
      );
      this.notificationService.notify(
        "student@example.com",
        "Proposal submitted successfully."
      );
      return {
        success: true,
        message: "Proposal submitted and notifications sent.",
      };
    } else {
      return { success: false, message: "Submission failed. Try again later." };
    }
  }
}

export default ProposalService;
