// @flow
import type {Node} from "@babel/types";
import type {EventDoc} from "@webdoc/types";
import {nodeIdentifer} from "./nodeIdentifer";
import {createDoc} from "@webdoc/model";

// Parses @event docs. These aren't really interesting.
export function parseEventDoc(node: ?Node, options: { [id: string]: any }): EventDoc {
  const eventTag = options.tags.find((tag) => tag.type === "EventTag");
  let name = eventTag ? eventTag.event : options.name;

  if (!name && node) {
    name = nodeIdentifer(node);
  }
  if (!name) {
    name = "UnknownEvent";
  }

  return createDoc(name, "EventDoc", options);
}
