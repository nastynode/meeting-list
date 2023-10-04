import { Button, Card } from "@rneui/base";
import { Image } from "react-native";
import { useState } from "react";


const Butts = () => {
  const [showButts, setShowButts] = useState(false);

  return (
    <>
      {showButts && 
        <Card containerStyle={{}}>
          <Card.Title>Check out this butt</Card.Title>
          <Card.Divider />
          <Image 
          style={{width: '100%', height: 200}}
          source={require('../assets/butt-pic.jpg')} />
        </Card>}
      <Button
        buttonStyle={{
            borderRadius: 5,
        }}
        onPress={()=>setShowButts(!showButts)}
      >
        {showButts ? 'Hide' : 'Show'} Butt
      </Button>
    </>
  );
};

export default Butts;
