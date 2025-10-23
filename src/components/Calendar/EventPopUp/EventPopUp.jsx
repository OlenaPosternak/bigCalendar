import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./eventPopUp.css";

export const EventPopUp = ({ isOpen, onClose, onSave, date, event }) => {
  const formatDateLocal = (d) => {
    const pad = (num) => num.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  const initialValues = {
    title: event?.title || "",
    date: event?.start
      ? formatDateLocal(new Date(event.start))
      : date
      ? formatDateLocal(new Date(date))
      : "",
    time: event?.start
      ? `${new Date(event.start)
          .getHours()
          .toString()
          .padStart(2, "0")}:${new Date(event.start)
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      : date
      ? `${new Date(date).getHours().toString().padStart(2, "0")}:${new Date(
          date
        )
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      : "",
    notes: event?.notes || "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
  });

  return (
    <div className="event-container">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const start = new Date(`${values.date}T${values.time}`);
          const end = new Date(start);
          end.setHours(start.getHours() + 1);

          onSave({
            id: event ? event.id : Date.now(),
            title: values.title,
            start,
            end,
            notes: values.notes,
          });
          onClose();
        }}
      >
        {() => (
          <Form className="form">
            <div className="input-container">
              <Field name="title" placeholder="Title" className="input" />
              <ErrorMessage name="title" component="p" className="error" />
            </div>

            <div className="input-container">
              <Field name="date" type="date" className="input" />
              <ErrorMessage name="date" component="p" className="error" />
            </div>

            <div className="input-container">
              <Field name="time" type="time" className="input" />
              <ErrorMessage name="time" component="p" className="error" />
            </div>

            <div className="input-container">
              <Field name="notes" placeholder="Notes" className="input" />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="button cancel" type="button" onClick={onClose}>
                {event ? "DISCARD" : "Cancel"}
              </button>
              <button className="button" type="submit">
                {event ? "Edit" : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
