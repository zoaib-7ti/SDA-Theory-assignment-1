// services/NotificationService.js

class NotificationService {
  constructor() {
    this.subscribers = [];
  }

  subscribe(email) {
    this.subscribers.push(email);
  }

  notify(email, message) {
    console.log(`Email sent to ${email}: ${message}`);
  }
}

export default NotificationService;