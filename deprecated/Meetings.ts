/* 
This class intializes the master list of meetings on startup and returns meetings from the corresponding subset by service_body_bigint
*/

import { MichiganUri } from "../config";
import { Meeting } from "../types/Meeting";

class Meetings {
  meetings: Meeting[] = [];

  constructor() {
    this.InitilizeMeetings();
  }

  async InitilizeMeetings() {
    const res = await fetch(MichiganUri);

    if (res.status !== 200) throw new Error("Failed to intialize data");

    const responseText = await res.text();
    const jsonResponse = responseText
      .replace(/^\/\*\*\/jsonp_\d+_\d+\(/, "")
      .replace(/\);$/, "");
    const body = JSON.parse(jsonResponse);

    if (!body["meetings"]) throw new Error("Empty response body");

    this.meetings = body;
  }

  list(opt: string | undefined): Meeting[] {
    if (!opt || opt === "all") return this.meetings;

    const filteredList = this.meetings.filter(
      (mtg) => mtg.service_body_bigint === opt
    );
    return filteredList;
  }
}

const MeetingData = new Meetings();

export { MeetingData };
