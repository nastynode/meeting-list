import { ActivityIndicator, ScrollView, Text, View } from "react-native"
import { MeetingData } from "./Meetings"
import { useEffect, useState } from "react"
import { Meeting } from "../types/Meeting"
import MeetingTile from "../components/MeetingTile"

const MeetingDirectory = () => {
    const [meetings, setMeetings] = useState<Meeting[]>(MeetingData.meetings);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(meetings.length === 0)
    },[meetings]);

    return(
        <ScrollView contentContainerStyle={{alignItems: "center", paddingTop: 10}}>
            {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : 
            <View style={{alignItems: "center", justifyContent: "center"}}>
                {meetings.map((mtg, i)=>(<MeetingTile meeting={mtg} key={i} />))}
            </View>
            }
        </ScrollView>
    )
}

export default MeetingDirectory;