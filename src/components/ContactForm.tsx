import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { PlusCircle, Send } from "lucide-react";
import axios from "axios";

interface EmailData {
  name: string;
  email: string;
  phoneNumber: number;
  subject: string;
  message: string;
}
const ContactForm = () => {
  // Set query client
  const queryClient = useQueryClient();
  // Set states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNum] = useState<number | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation(
    (newEmail: EmailDataData) =>
      fetch("/api/send_enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmail),
      }),
    {
      onSuccess: () => {
        toast.success("Your enquiry is sent successfully");
      },
      onError: () => {
        console.error("Error adding collection");
        toast.error("Error sending your enquiry");
      },
    }
  );
  // Handle form submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Confirm with user then add collection and clear the form
    const userConfirmed = window.confirm(
      "Do you want to send your message and contact details to us?"
    );
    if (userConfirmed) {
      mutation.mutate({
        name: name,
        email: email,
        phoneNumber: phoneNumber || 0,
        subject: subject,
        message: message,
      });
      // Clear the form
      setName("");
      setEmail("");
      setPhoneNum(null);
      setSubject("");
      setMessage("");
    }
  };
  // Return the form component
  return (
    <div className="flex flex-col items-center justify-center w-screen text-center bg-black">
      <h1
        className="mb-3 mt-5 text-xl font-semibold"
        style={{
          textAlign: "center",
          color: "#F8C983",
          fontSize: "x-large",
          zIndex: 1,
        }}
      >
        Wanna contact us? Do it here{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        <table className="items-center">
          <tbody>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  color: "#F8C983",
                  fontSize: "x-large",
                  marginRight: "50px",
                  zIndex: 1,
                }}
              >
                <label>First Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  color: "#F8C983",
                  fontSize: "x-large",
                  zIndex: 1,
                }}
              >
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  color: "#F8C983",
                  fontSize: "x-large",
                  zIndex: 1,
                  margin: "50px",
                }}
              >
                <label>Phone:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={phoneNumber || ""}
                  onChange={(e) => setPhoneNum(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  color: "#F8C983",
                  fontSize: "x-large",
                  zIndex: 1,
                }}
              >
                <label>Subject:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "left",
                  color: "#F8C983",
                  fontSize: "x-large",
                  zIndex: 1,
                  marginRight: "50px",
                }}
              >
                <label>Message:</label>
              </td>
              <td>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    minHeight: "200px",
                    padding: "8px",
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Button
                  type="submit"
                  className="items-center text-center mt-3 mb-5 text-sm bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
                  style={{ backgroundColor: "#F8C983" }}
                >
                  Send Enquiry
                  <Send className="ml-2" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ContactForm;