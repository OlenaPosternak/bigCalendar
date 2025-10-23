import moment from "moment";
export const initialEvents = [
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
