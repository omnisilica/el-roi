import React from "react";
import {
  LayoutChangeEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

// function Dashboard() {
//   const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "red" }} />;
//   const SecondRoute = () => (
//     <View style={{ flex: 1, backgroundColor: "blue" }} />
//   );
//   const ThirdRoute = () => (
//     <View style={{ flex: 1, backgroundColor: "yellow" }} />
//   );
//   const FourthRoute = () => (
//     <View style={{ flex: 1, backgroundColor: "green" }} />
//   );

//   const FirstTabView = () => {
//     const layout = useWindowDimensions();

//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([
//       { key: "first", title: "First" },
//       { key: "second", title: "Second" },
//     ]);
//     const renderScene = SceneMap({
//       first: FirstRoute,
//       second: SecondRoute,
//     });

//     return (
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={{ width: layout.width }}
//       />
//     );
//   };

//   const SecondTabView = () => {
//     const layout = useWindowDimensions();

//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([
//       { key: "third", title: "Third" },
//       { key: "fourth", title: "Fourth" },
//     ]);

//     const renderScene = SceneMap({
//       third: ThirdRoute,
//       fourth: FourthRoute,
//     });

//     return (
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={{ width: layout.width }}
//       />
//     );
//   };

//   return (
//     <View>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Header</Text>
//       </View>
//       <FirstTabView />
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Other Content</Text>
//       </View>
//       <SecondTabView />
//     </View>
//   );

//   // return (
//   //   <View>
//   //     <Text>Dashboard Under Construction</Text>
//   //     <Link href={"./chatrooms.tsx"}>My Messages</Link>
//   //     <Link href={"/submitRequest"}></Link>
//   //   </View>
//   // );
// }

// export default Dashboard;

const ActiveRequests = () => (
  <ScrollView className={"bg-red-500"}>
    <View className={"bg-red-400 w-11/12 self-center"}>
      <Text>Red</Text>
    </View>
  </ScrollView>
);

const PendingRequests = () => (
  <ScrollView className={"bg-green-500"}>
    <View className={"bg-red-400 w-11/12 self-center"}>
      <Text>Green</Text>
    </View>
  </ScrollView>
);

const PreviousRequests = () => (
  <ScrollView className={"bg-blue-500"}>
    <View className={"bg-red-400 w-11/12 self-center"}>
      <Text>Blue</Text>
    </View>
  </ScrollView>
);

const CurrentRequests = () => (
  <ScrollView className={"bg-yellow-500"}>
    <View className={"bg-red-400 w-11/12 self-center"}>
      <Text>Yellow</Text>
    </View>
  </ScrollView>
);

const CompletedRequests = () => (
  <ScrollView className={"bg-indigo-500"}>
    <View className={"bg-red-400 w-11/12 self-center"}>
      <Text>Indigo</Text>
    </View>
  </ScrollView>
);

const RequestsInReview = () => (
  <ScrollView className={"bg-purple-500"}>
    <View className={"bg-red-400 w-11/12 self-center"}>
      <Text>Purple</Text>
    </View>
  </ScrollView>
);

const ReviewedRequests = () => (
  <ScrollView className={"bg-pink-500"}>
    <View className={"bg-red-400 w-11/12 self-center"}>
      <Text>Pink</Text>
    </View>
  </ScrollView>
);

const FinishedRequests = () => (
  <ScrollView className={"bg-gray-500"}>
    <View className={"bg-red-400 w-11/12 self-center"}>
      <Text>Gray</Text>
    </View>
  </ScrollView>
);

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "blue" }} />;

const CustomTabBar = (props: any) => {
  const [coordinate, setCoordinate] = React.useState(Array<number>);

  const [index, setIndex] = React.useState(0);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const onLayoutHandler = (event: LayoutChangeEvent) => {
    // tab = event.nativeEvent.layout;
  };
  return (
    <ScrollView
      horizontal
      ref={scrollViewRef}
      className={"bg-purple-100 w-11/12 max-h-14 self-center"}
    >
      {props.navigationState.routes.map((route: any, i: number) => {
        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => {
              // scrollViewRef.current?.scrollTo({ x: tab.x, animated: true });
              // props.navigationState.index = i;
              // setIndex(i);
              scrollViewRef.current?.scrollTo({
                x: coordinate[route.key] - 50,
                animated: true,
              });
              console.log(scrollViewRef);
              scrollViewRef.current?.scrollToEnd();
            }}
            className={"self-center"}
            // onLayout={onLayoutHandler}
            onLayout={(event) => {
              const tab = event.nativeEvent.layout;
              coordinate[route.key] = tab.x;
              // console.log("tab ", tab);
            }}
          >
            <View
              className={
                "p-3" + (index === i ? " border-b-2 border-black" : "")
              }
            >
              {/* <View className="p-3 border-b-2"> */}
              {/* <Text>{index}</Text> */}
              <Text className={"text-xl"}>{route.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
const DashboardTabView = () => {
  // const scrollViewRef = React.useRef<ScrollView>(null);
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  // let tab: LayoutRectangle;

  const [routes] = React.useState([
    { key: 0, title: "Active Requests" },
    { key: 1, title: "Pending Requests" },
    { key: 2, title: "Previous Requests" },
    { key: 3, title: "Current Requests" },
    { key: 4, title: "Completed Requests" },
    { key: 5, title: "Requests In Review" },
    { key: 6, title: "Reviewed Requests" },
    { key: 7, title: "Finished Requests" },
    // Current Request
    // Completed Requests
    // Requests In Review
    // Reviewed Requests
    // Finished Requests
  ]);
  const renderScene = SceneMap({
    0: ActiveRequests,
    1: PendingRequests,
    2: PreviousRequests,
    3: CurrentRequests,
    4: CompletedRequests,
    5: RequestsInReview,
    6: ReviewedRequests,
    7: FinishedRequests,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={(index) => {
        console.log(index);
        setIndex(index);
        // console.log(tab);
        // console.log(scrollViewRef);
        // scrollViewRef.current?.scrollToEnd({ animated: true });
        // .scrollTo({
        //   // x: tab.x,
        //   // y: tab.y,
        //   x: coordinate[index],
        //   animated: true,
        // });
        // scrollViewRef.current?.scrollToEnd();
      }}
      initialLayout={{ width: layout.width }}
      renderTabBar={CustomTabBar}
      // renderTabBar={() => {
      //   return <CustomTabBar />;
      // }}
    />
  );
};

export default function Dashboard() {
  const [index, setIndex] = React.useState(0);
  const [coordinate, setCoordinate] = React.useState(Array<number>);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const [scrollView, setScrollView] = React.useState();
  const layout = useWindowDimensions();
  const [routes, updateRoutes] = React.useState([
    { key: 0, title: "Active Requests" },
    { key: 1, title: "Pending Requests" },
    { key: 2, title: "Previous Requests" },
    { key: 3, title: "Current Requests" },
    { key: 4, title: "Completed Requests" },
    { key: 5, title: "Requests In Review" },
    { key: 6, title: "Reviewed Requests" },
    { key: 7, title: "Finished Requests" },
    // Current Request
    // Completed Requests
    // Requests In Review
    // Reviewed Requests
    // Finished Requests
  ]);
  const renderScene = SceneMap({
    0: ActiveRequests,
    1: PendingRequests,
    2: PreviousRequests,
    3: CurrentRequests,
    4: CompletedRequests,
    5: RequestsInReview,
    6: ReviewedRequests,
    7: FinishedRequests,
  });

  const handleRef = (r: any) => {
    console.log("reference: ", r);
    scrollViewRef.current = r;
  };

  return (
    <>
      <View className="bg-green-500 items-center">
        <View className="bg-green-100 w-11/12">
          <Text>Dashboard</Text>
          <Text>Thursday, Jan 01, 2026</Text>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(index) => {
          console.log(index);
          setIndex(index);
          // console.log(tab);
          console.log("Scroll View Ref", scrollViewRef);
          // scrollViewRef.current?.scrollToEnd({ animated: true });
          // .scrollTo({
          //   // x: tab.x,
          //   // y: tab.y,
          //   x: coordinate[index],
          //   animated: true,
          // });
          // scrollViewRef.current?.scrollToEnd();
        }}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => {
          const onLayoutHandler = (event: LayoutChangeEvent) => {
            // tab = event.nativeEvent.layout;
          };
          const handleOnPress = (route: any) => {
            // scrollViewRef.current?.scrollTo({ x: tab.x, animated: true });
            // props.navigationState.index = i;
            console.log(route);
            setIndex(route.key);
            scrollViewRef.current?.scrollTo({
              x: coordinate[route.key] - 50,
              animated: true,
            });
            console.log(scrollViewRef);
            scrollViewRef.current?.scrollToEnd();
          };
          return (
            <ScrollView
              horizontal
              // ref={handleRef}
              ref={scrollViewRef}
              className={"bg-purple-100 w-11/12 max-h-14 self-center"}
            >
              {routes.map((route: any, i: number) => {
                return (
                  <TouchableOpacity
                    key={route.key}
                    onPress={() => {
                      handleOnPress(route);
                    }}
                    className={"self-center"}
                    // onLayout={onLayoutHandler}
                    onLayout={(event) => {
                      const tab = event.nativeEvent.layout;
                      coordinate[route.key] = tab.x;
                      // console.log("tab ", tab);
                    }}
                  >
                    <View
                      className={
                        "p-3" + (index === i ? " border-b-2 border-black" : "")
                      }
                    >
                      {/* <View className="p-3 border-b-2"> */}
                      {/* <Text>{index}</Text> */}
                      <Text className={"text-xl"}>{route.title}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          );
        }}
        // renderTabBar={() => {
        //   return <CustomTabBar />;
        // }}
      />
      {/* <DashboardTabView /> */}
    </>
  );
}

// return (
//   <View>
//     <Text>Dashboard Under Construction</Text>
//     <Link href={"./chatrooms.tsx"}>My Messages</Link>
//     <Link href={"/submitRequest"}></Link>
//   </View>
// );
