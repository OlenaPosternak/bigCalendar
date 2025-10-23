import { useState, useEffect } from "react";
import "./eventPopUp.css";

export const EventPopUp = ({ isOpen, onClose, onSave, date, event }) => {
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const formatDateLocal = (d) => {
    const pad = (num) => num.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setSelectedDate(
        event.start ? formatDateLocal(new Date(event.start)) : ""
      );
      setTime(
        event.start
          ? `${new Date(event.start)
              .getHours()
              .toString()
              .padStart(2, "0")}:${new Date(event.start)
              .getMinutes()
              .toString()
              .padStart(2, "0")}`
          : ""
      );
      setNotes(event.notes || "");
    } else if (date) {
      const defaultDate = new Date(date);
      setSelectedDate(formatDateLocal(defaultDate));
      setTime(
        `${defaultDate.getHours().toString().padStart(2, "0")}:${defaultDate
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
      setTitle("");
      setNotes("");
    }
  }, [event, date]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const start = new Date(`${selectedDate}T${time}`);
    const end = new Date(start);
    end.setHours(start.getHours() + 1);

    onSave({
      id: event ? event.id : Date.now(),
      title,
      start,
      end,
      notes,
    });
    onClose();
  };

  return (
    <div className="event-container">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
          style={{ padding: "5px", borderBottom: "1px solid black" }}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
          style={{ padding: "5px", borderBottom: "1px solid black" }}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={{ padding: "5px", borderBottom: "1px solid black" }}
        />
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
          style={{ padding: "5px", borderBottom: "1px solid black" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">{event ? "Edit" : "Save"}</button>
        </div>
      </form>
    </div>
  );
};
