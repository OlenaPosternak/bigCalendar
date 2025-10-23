import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import { useState, useEffect } from "react";
import { EventPopUp } from "./EventPopUp";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const initialEvents = [
  {
    id: 1,
    title: "Daily Meeting",
    start: new Date(moment().add(1, "days").set({ hour: 10, minute: 0 })),
    end: new Date(moment().add(1, "days").set({ hour: 11, minute: 0 })),
    notes: "Discuss project details",
  },
  {
    id: 2,
    title: "Customer Meeting",
    start: new Date(moment().add(2, "days").set({ hour: 15, minute: 30 })),
    end: new Date(moment().add(2, "days").set({ hour: 16, minute: 30 })),
    notes: "New requirements discussion",
  },
  {
    id: 3,
    title: "English class",
    start: new Date(moment().add(2, "days").set({ hour: 15, minute: 30 })),
    end: new Date(moment().add(2, "days").set({ hour: 16, minute: 30 })),
    notes: "new vacabulary about office routines",
  },
];

export const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpenEvent, setIsOpenEvent] = useState(false);

  const storedEvents = localStorage.getItem("events");
  const [events, setEvents] = useState(
    storedEvents
      ? JSON.parse(storedEvents, (key, value) => {
          if (key === "start" || key === "end") return new Date(value);
          return value;
        })
      : initialEvents
  );

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setSelectedEvent(null);
    setIsOpenEvent(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setSelectedDate(event.start);
    setIsOpenEvent(true);
  };

  const handleSaveEvent = (eventData) => {
    const exists = events.find((e) => e.id === eventData.id);
    if (exists) {
      setEvents((prevEvents) =>
        prevEvents.map((e) => (e.id === eventData.id ? eventData : e))
      );
    } else {
      setEvents((prevEvents) => [...prevEvents, eventData]);
    }
  };

  const handleEventDrop = ({ event, start, end }) => {
    const updatedEvent = { ...event, start, end };
    setEvents((prevEvents) =>
      prevEvents.map((e) => (e.id === event.id ? updatedEvent : e))
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <DnDCalendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        onEventDrop={handleEventDrop}
        style={{ height: "80vh" }}
      />

      {isOpenEvent && (
        <EventPopUp
          isOpen={isOpenEvent}
          onClose={() => setIsOpenEvent(false)}
          onSave={handleSaveEvent}
          event={selectedEvent}
          date={selectedDate}
        />
      )}
    </div>
  );
};
