import { memo, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View, useWindowDimensions } from "react-native";
import RenderHTML, { HTMLSource } from "react-native-render-html";

const jft = "https://jftna.org/jft";
const spad = "https://spadna.org";

type Props = {
  source: string;
};

const Meditation = ({ source }: Props) => {
  const [sourceHtml, setSourceHtml] = useState<HTMLSource>({ html: source });
  const [isLoading, setIsLoading] = useState(true);
  const { width } = useWindowDimensions();

  const sourceUri = source === "jft" ? jft : spad;

  useEffect(() => {
    fetch(sourceUri)
      .then((res) => {
        if (res.status !== 200)
          throw new Error(`Failed to fetch: ${res.status}`);

        return res.text();
      })
      .then((text) => setSourceHtml({ html: text }))
      .catch((err) => setSourceHtml({ html: JSON.stringify(err) }))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <ActivityIndicator size="large" color="#00ff00" />;
  else return (<ScrollView style={{padding: 10}}><RenderHTML contentWidth={width} source={sourceHtml} /></ScrollView>);
};

export default memo(Meditation);
