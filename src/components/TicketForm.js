import React, { useState, useEffect } from "react";
import "../styles.css";

export default function TicketForm({ dispatch, editingTicket }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabel = {
    1: "low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };
  useEffect(() => {
    // Editing ticket form
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      title,
      description,
      priority,
    };
    // Dispatching action
    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });

    clearForm();
  };
  const handleCancel = () => dispatch({ type: "CLEAR_EDITING_TICKET" });

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <fieldset className="priority-fieldset">
        <legend>priority</legend>
        {Object.entries(priorityLabel).map(([key, value]) => (
          <label key={key} className="priority-label">
            <input
              type="radio"
              className="priority-input"
              value={key}
              onChange={(e) => setPriority(e.target.value)}
              checked={key === priority}
            />
            {value}
          </label>
        ))}
      </fieldset>
      <button className="button" type="submit">
        {editingTicket ? "Edit Ticket" : "Add New Ticket"}
      </button>
      {/* Edit button */}
      {editingTicket && (
        <button className="button" onClick={handleCancel}>
          Cancel Edit
        </button>
      )}
    </form>
  );
}
