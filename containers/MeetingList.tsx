import { Suspense, memo, useEffect, useState } from "react";
import MeetingGrabber from "../utilities/MeetingGrabber";
import { ActivityIndicator, FlatList, ScrollView } from "react-native";
import { Meeting } from "../types/Meeting";
import { Card } from "@rneui/base";
import MeetingTile from "../components/MeetingTile";

type ListProps = {
  meeting: Meeting;
};

const MeetingList = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    MeetingGrabber.GetAllMeetings()
        .then(res => {
            setMeetings(res);
            setIsLoading(false);
        })
        .catch(err => console.log("failed to grab:", err));
  },[])

  if (isLoading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  } else
    return (
      <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
        {meetings.map((mtg, i) => (
          <MeetingTile meeting={mtg} key={i} />
        ))}
      </ScrollView>
    );
};

export default memo(MeetingList);
