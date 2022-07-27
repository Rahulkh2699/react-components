import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    // IF you want non clickable label add passive prop in Switch.Label
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">Enable notifications</Switch.Label>
        <Switch
          value="o"
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-600"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors  duration-200 focus:outline-none`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform ease-in-out duration-200 rounded-full bg-white `}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
