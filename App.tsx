import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Tab, TabView } from "@rneui/base";
import { useState } from "react";
import MeetingDirectory from "./deprecated/MeetingDirectory";
import Meditation from "./containers/Meditation";
import MeetingList from "./containers/MeetingList";

export default function App() {
  const [index, setIndex] = useState<number>(0);
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        style={{ backgroundColor: "lightblue", height: 'auto', paddingTop: 60 }}
        variant="primary"
      >
        <Tab.Item title="Meetings" />
        <Tab.Item title="JFT" />
        <Tab.Item title="SPAD" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <MeetingList />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Meditation source="jft" />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Meditation source="spad" />
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
