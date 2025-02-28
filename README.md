# Calendar Viewer

Calendar Viewer is a simple and customizable calendar component for React applications.

![Example](https://raw.githubusercontent.com/alirezakasirzare/calendar-viewer/refs/heads/main/src/assets/example1.png)

## Installation

You can install Calendar Viewer via npm:

```jsx
npm install calendar-viewer
```

## Usage

To use Calendar Viewer in your React application, follow these steps:

Import the useCalendarViewer hook and CalendarViewer in your component:

```jsx
import { CalendarViewer, useCalendarViewer } from "calendar-viewer";
```

And just use it:

```jsx
const App = () => {
  const control = useCalendarViewer({ type: "jalali" });

  const events = [
    {
      date: new Date(),
      title: "Event 1",
    },
  ];

  return <CalendarViewer control={control} events={events} />;
};
```

#### Calendar Types

- "gregorian"
- "jalali"

## useCalendarViewer return type

```jsx
const control = useCalendarViewer({ type: "jalali" });
// control.startDate
// control.endDate
// control.next
// control.prev
// control.type
```

This hook returns an object with this properties and use can use it when you need

- startDate : For filter your events based on current date
- endDate : For filter your events based on current date
- next : Go to next month
- prev : Go to previous month
- type : Get current type ( "gregorian" | "jalali" )

## Example

Here's a example of how to use Calendar Viewer with navs:

```jsx
import { CalendarViewer, useCalendarViewer } from "calendar-viewer";
import { formatDate } from "date-fns";

export const App = () => {
  const control = useCalendarViewer({ type: "gregorian" });

  const events = [
    {
      date: new Date(),
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      date: new Date(),
      title: "Lorem Ipsum is simply dummy text",
    },
    {
      date: new Date(),
      title: "Lorem Ipsum is simply dummy text",
    },
  ];

  return (
    <div className="p-10">
      {/* head */}
      <div className="flex gap-x-2 mb-2">
        <div>{formatDate(control.startDate, "MMMM yyyy")}</div>
        <span className="flex-1"></span>
        <button
          className="py-1 px-3 text-sm rounded-md bg-gray-100"
          onClick={control.prev}
        >
          prev
        </button>
        <button
          className="py-1 px-3 text-sm rounded-md bg-gray-100"
          onClick={control.next}
        >
          next
        </button>
      </div>
      {/* calendar */}
      <CalendarViewer control={control} events={events} />
    </div>
  );
};
```

![Example](https://raw.githubusercontent.com/alirezakasirzare/calendar-viewer/refs/heads/main/src/assets/example2.png)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
