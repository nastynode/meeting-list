/**
 * This request grabs all of Michigan's meetings:
 * https://michigan-na.org/bmlt/client_interface/jsonp/?switcher=GetSearchResults&get_used_formats&lang_enum=en&data_field_key=location_postal_code_1,duration_time,start_time,time_zone,weekday_tinyint,service_body_bigint,location_province,location_municipality,location_street,location_info,location_neighborhood,formats,format_shared_id_list,comments,location_sub_province,worldid_mixed,root_server_uri,id_bigint,venue_type,meeting_name,location_text,virtual_meeting_additional_info,virtual_meeting_link,phone_meeting_number,latitude,longitude,contact_name_1,contact_phone_1,contact_email_1,contact_name_2,contact_phone_2,contact_email_2&services[]=6&recursive=1&sort_keys=start_time&callback=jsonp_1696027243185_12996
 * 
 * This is all swmi meetings on friday
 * https://michigan-na.org/bmlt/client_interface/jsonp/?switcher=GetSearchResults&get_used_formats&lang_enum=en&data_field_key=location_postal_code_1,duration_time,start_time,time_zone,weekday_tinyint,service_body_bigint,location_province,location_municipality,location_street,location_info,location_neighborhood,formats,format_shared_id_list,comments,location_sub_province,worldid_mixed,root_server_uri,id_bigint,venue_type,meeting_name,location_text,virtual_meeting_additional_info,virtual_meeting_link,phone_meeting_number,latitude,longitude,contact_name_1,contact_phone_1,contact_email_1,contact_name_2,contact_phone_2,contact_email_2&services[]=4&sort_keys=start_time&callback=jsonp_1696034155568_56131
 * 
 * https://michigan-na.org/bmlt/client_interface/jsonp/?switcher=GetSearchResults&get_used_formats&lang_enum=en&data_field_key=location_postal_code_1,duration_time,start_time,time_zone,weekday_tinyint,service_body_bigint,location_province,location_municipality,location_street,location_info,location_neighborhood,formats,format_shared_id_list,comments,location_sub_province,worldid_mixed,root_server_uri,id_bigint,venue_type,meeting_name,location_text,virtual_meeting_additional_info,virtual_meeting_link,phone_meeting_number,latitude,longitude,contact_name_1,contact_phone_1,contact_email_1,contact_name_2,contact_phone_2,contact_email_2&services[]=4&sort_keys=start_time&callback=jsonp_1696034155568_56131
 */

import { Meeting } from "../types/Meeting";
import { Areas } from "./Areas";

class MeetingGrabber{
    static async GetAllMeetings(): Promise<Meeting[]> {
        const fetchUri = Areas.find(a => a.name === "Michigan")?.fetchUri;

        if(!fetchUri) throw new Error("Failed to fetch: no uri provided"); //will never happen...

        const res = await fetch(fetchUri);
        const responseText = await res.text();
        const jsonResponse = responseText.replace(/^\/\*\*\/jsonp_\d+_\d+\(/, '').replace(/\);$/, '');
        const body = JSON.parse(jsonResponse);

        if(!body["meetings"]){
            console.log("response json:", body)
            return [];
        }
        return body["meetings"];
    }

    static GetAreaMeetings(area: string) {

    }

}

export default MeetingGrabber;