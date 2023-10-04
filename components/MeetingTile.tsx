import { Card, Text } from "@rneui/base";
import { Meeting } from "../types/Meeting";

type Props = {
    meeting: Meeting
}

const MeetingTile = ({meeting}: Props) => {
    const isVirtual = (meeting.virtual_meeting_additional_info && !meeting.location_street)
    const borderColor = isVirtual ? '#dbfdcb' : '#e5f6f9';

    return (
        <Card containerStyle={{borderColor: borderColor, borderRadius: 5, width: '90%', backgroundColor: borderColor}}>
            <Card.Title>{meeting.meeting_name}</Card.Title>
            <Card.Divider />
            {isVirtual && <Text>Virtual Meeting</Text>}
            {meeting.location_text && <Text>{meeting.location_text}</Text> }
            <Text>{meeting.start_time} {meeting.time_zone}</Text>
            {!isVirtual ? 
            <>
                <Text>{meeting.location_street}, {meeting.location_municipality}</Text>
                <Text>{meeting.location_province} {meeting.location_postal_code_1}</Text>
                {meeting.location_text && <Text>{meeting.location_text}</Text>}
            </>
            : 
            <>
             <Text>{meeting.virtual_meeting_link}</Text>
             <Text>{meeting.virtual_meeting_additional_info}</Text>
            </>
            }
        </Card>
    )
}

export default MeetingTile;