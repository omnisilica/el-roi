import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

// const data = [...new Array(6).keys()];
const data = [
  {
    title: "About El Roi",
    body: "Shalom! El Roi was created to provide a platform for the Body of Christ at CCGC to minister to, and practice love toward, one another. Those who don’t have anyone to rely on, especially widows, are encouraged to lean on the Body of Christ for support. Your struggles may not be conspicuous but don’t forget that the Lord sees you. This platform is meant to make it easier for those who genuinely need the help to reach out, and meant to provide an opportunity for men to practice godly love through service.",
  },
  {
    title: "Inspiration",
    body: "Paul instructs Timothy, in 1 Timothy 5, to have the Church body honor widows who are truly widows, while emphasizing the importance of believers providing for their own household. That is, if anyone has a family member that is a widow they are to relieve them so as not to burden the Church.\nThe Church, in its infancy, was generally practicing this principal. Shortly after Christ ascended, all those who believed were of one heart and mind. Some brought proceeds from the sale of their property and laid it at the apostle’s feet, and it would then be distributed to anyone who had need. This system worked so well that there was no one who lacked. There was a distribution held daily and the impression, based on Acts 6, was that widows benefited significantly from this ministry.",
  },
  {
    title: "Who Qualifies to Receive Service",
    body: "As previously stated, this platform is meant for those who have no one or very little to rely on, which includes elderly women with no husband who can’t rely on their children, or younger women with no husband who live on their own but have a task that’s more suitable for a man to handle, or women with no husband who might be overwhelmed with a task that a husband would typically handle or a task that might need many hands. This is also extended to men who are very elderly who simply can’t accomplish a task on their own or elderly men who are dealing with an acute or debilitating health issue.\nFilling out the form below without signing up will allow for communication through email, but signing up and logging in provides the option for communication through email or within the app. After submitting the form, the request will be reviewed and displayed to the group of volunteers on the platform for allocation.",
  },
  {
    title: "Exhortation for Volunteers",
    body: "Those who are looking for one practical way to exercise their faith are encouraged to sign up and reach out to those in need and, through love, serve one another, remembering that whatever is done to the least of the brethren is done unto Christ. Christ told His disciples, and by proxy us, that the world would know that we are His disciples by the love we have for one another. Don’t forget that Jesus Christ’s return is imminent and that His reward is with Him. Each Christian will receive what is due for the things done while in the body.",
  },
];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function Index() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View className="flex-1 bg-homePageBackground">
      <View className="h-32 bg-yellow-500">
        <Image
          className="w-[100%] h-[100%] object-contain"
          source={require("./../assets/images/ccgc_logo.png")}
        />
      </View>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.36}
        data={data}
        onProgressChange={progress}
        style={{
          backgroundColor: "#fafafa",
          // flex: 1,
          // justifyContent: "center",
          // maxHeight: height * 0.36,
          minWidth: "100%",
          // borderWidth: 1,
        }}
        onConfigurePanGesture={(gestureChain) =>
          gestureChain.activeOffsetX([-10, 10])
        }
        renderItem={({ index }) => (
          <View className="flex-1 mb-7">
            <Text className="text-center text-3xl mx-24 h-20">
              {data[index].title}
            </Text>
            <ScrollView className="flex-1 h-20 mx-6 mt-6">
              <Text className="text-left text-lg pb-7">{data[index].body}</Text>
            </ScrollView>
            <LinearGradient
              colors={["transparent", "rgba(250,250,250,1)"]}
              className="w-[100%] h-7 absolute bottom-0"
            />
          </View>
        )}
      />
      <View className="h-10 bg-white rounded-b-full">
        <Pagination.Basic
          progress={progress}
          data={data}
          dotStyle={{
            backgroundColor: "rgba(54, 138, 156, 1)",
            borderRadius: 50,
          }}
          containerStyle={{ gap: 5, marginTop: 10 }}
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
}

export default Index;
