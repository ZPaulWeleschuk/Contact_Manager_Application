export class ContactService {
  static async fetchContacts() {
    try {
      let response = await fetch("http://localhost:9000/contacts", {
        method: "GET",
      });
      if (response.status === 200) {
        return await response.json();
      }
    } catch (error) {
      console.error("Error fetching Contacts:", error);
    }
  }

  static async fetchContact(contactId) {
    try {
      let response = await fetch(`http://localhost:9000/contacts/${contactId}`);
      if (response.status === 200) {
        return await response.json();
      }
    } catch (error) {
      console.error("Error fetching Contact:", error);
    }
  }

  static async createContact(contact) {
    try {
      let response = await fetch(`http://localhost:9000/contacts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.status === 201) {
        return response;
      }
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  }

  static async updateContact(contactId, contact) {
    try {
      let response = await fetch(
        `http://localhost:9000/contacts/${contactId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  }

  static async deleteContact(contactId) {
    try {
      let response = await fetch(
        `http://localhost:9000/contacts/${contactId}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  }
}
