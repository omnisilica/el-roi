import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import {
  LayoutChangeEvent,
  Pressable,
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

const ActiveRequests = () => {
  //
  function handleClickChatroom() {
    router.navigate("/chat");
  }
  return (
    <View className={/*"bg-red-500*/ "h-full bg-ccgcBlueLight"}>
      {/* <ScrollView
        className={
          "bg-red-400 w-11/12 self-center max-h-[90%] rounded-md m-auto"
        }
      >
        <Text>Red</Text>
      </ScrollView> */}

      <View
        className={
          /*"bg-red-400 */ "bg-commonWhite w-11/12 h-[90%] rounded-md m-auto justify-center"
        }
      >
        <Ionicons
          name="file-tray-sharp"
          size={72}
          color="gray"
          className="self-center"
        />
      </View>
    </View>
  );
};

const PendingRequests = () => (
  <View className={/*bg-green-500 */ "bg-ccgcBlueLight h-full"}>
    <ScrollView
      className={
        /*bg-red-400 */ "bg-commonWhite w-11/12 max-h-[90%] pb-12 rounded-md m-auto"
      }
    >
      <View className={"items-center pb-12"}>
        <View className="w-11/12">
          <Text className={"text-3xl font-bold my-2"}>
            Judy Joe&lsquo;s Request
          </Text>
          <View className="flex-row items-center mb-3">
            <Text className={"text-[20px]"}>Judy Joe</Text>
            <View className="flex-1 items-end">
              <Text className={"text-lg self-end"}>3 days ago</Text>
            </View>
          </View>

          <Text className={"text-lg"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text className={"text-lg my-2"}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </Text>

          <Text className={"text-lg my-2"}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
);

const PreviousRequests = () => {
  function handleClickChatroom() {
    router.navigate("/chat");
  }
  return (
    <View className={/*"bg-blue-500 */ " bg-ccgcBlueLight h-full"}>
      <ScrollView
        className={
          /*"bg-red-400 */ "bg-commonWhite w-11/12 max-h-[90%] rounded-md m-auto"
        }
      >
        <View className={"bg-commonWhite"}>
          <Pressable
            className={"flex-row p-4 border-b-[1px] border-black"}
            onPress={handleClickChatroom}
          >
            <View className={"w-1/12"}>
              <FontAwesome name="dot-circle-o" size={20} color="red" />
            </View>
            <View className={"w-11/12"}>
              <View className={"flex-row"}>
                <Text className={"text-xl font-bold self-start"}>Jon</Text>
                <View className={"flex-1 items-end"}>
                  <Text className={"text-lg"}>8:42 AM</Text>
                </View>
              </View>
              <Text className={"text-xl"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const CurrentRequests = () => (
  <View className={/*"bg-yellow-500 */ " bg-ccgcBlueLight h-full"}>
    <ScrollView
      className={
        /*"bg-red-400 */ "bg-commonWhite w-11/12 max-h-[90%] pb-12 rounded-md m-auto"
      }
    >
      <View className={"items-center pb-12"}>
        <View className="w-11/12">
          <Text className={"text-3xl font-bold my-2"}>
            Judy Joe&lsquo;s Request
          </Text>
          <View className="flex-row items-center mb-3">
            <Text className={"text-[20px]"}>Judy Joe</Text>
            <View className="flex-1 items-end">
              <Text className={"text-lg self-end"}>3 days ago</Text>
            </View>
          </View>

          <Text className={"text-lg"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text className={"text-lg my-2"}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </Text>

          <Text className={"text-lg my-2"}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
);

const CompletedRequests = () => {
  function handleClickChatroom() {
    router.navigate("/chat");
  }
  return (
    <View className={/*"bg-indigo-500 */ " bg-ccgcBlueLight h-full"}>
      <ScrollView
        className={
          /*"bg-red-400 */ "bg-commonWhite w-11/12 max-h-[90%] rounded-md m-auto"
        }
      >
        <View className={"bg-commonWhite"}>
          <Pressable
            className={"flex-row p-4 border-b-[1px] border-black"}
            onPress={handleClickChatroom}
          >
            <View className={"w-1/12"}>
              <FontAwesome name="dot-circle-o" size={20} color="red" />
            </View>
            <View className={"w-11/12"}>
              <View className={"flex-row"}>
                <Text className={"text-xl font-bold self-start"}>Jon</Text>
                <View className={"flex-1 items-end"}>
                  <Text className={"text-lg"}>8:42 AM</Text>
                </View>
              </View>
              <Text className={"text-xl"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const RequestsInReview = () => (
  <View className={/*"bg-purple-500 */ "bg-ccgcBlueLight h-full"}>
    <ScrollView
      className={
        /*"bg-red-400 */ "bg-commonWhite w-11/12 max-h-[90%] pb-12 rounded-md m-auto"
      }
    >
      <View className={"items-center pb-12"}>
        <View className="w-11/12">
          <Text className={"text-3xl font-bold my-2"}>
            Judy Joe&lsquo;s Request
          </Text>
          <View className="flex-row items-center mb-3">
            <Text className={"text-[20px]"}>Judy Joe</Text>
            <View className="flex-1 items-end">
              <Text className={"text-lg self-end"}>3 days ago</Text>
            </View>
          </View>

          <Text className={"text-lg"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text className={"text-lg my-2"}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </Text>

          <Text className={"text-lg my-2"}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
);

const ReviewedRequests = () => {
  function handleClickChatroom() {
    router.navigate("/chat");
  }
  return (
    <View className={/*"bg-pink-500 */ "bg-ccgcBlueLight h-full"}>
      <ScrollView
        className={
          /*"bg-red-400 */ "bg-commonWhite w-11/12 self-center max-h-[90%] rounded-md m-auto"
        }
      >
        <View className={"bg-commonWhite"}>
          <Pressable
            className={"flex-row p-4 border-b-[1px] border-black"}
            onPress={handleClickChatroom}
          >
            <View className={"w-1/12"}>
              <FontAwesome name="dot-circle-o" size={20} color="red" />
            </View>
            <View className={"w-11/12"}>
              <View className={"flex-row"}>
                <Text className={"text-xl font-bold self-start"}>Jon</Text>
                <View className={"flex-1 items-end"}>
                  <Text className={"text-lg"}>8:42 AM</Text>
                </View>
              </View>
              <Text className={"text-xl"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const FinishedRequests = () => {
  function handleClickChatroom() {
    router.navigate("/chat");
  }
  return (
    <View className={/*"bg-gray-500 */ "bg-ccgcBlueLight h-full"}>
      <ScrollView
        className={
          /*"bg-red-400 */ "bg-commonWhite w-11/12 self-center max-h-[90%] rounded-md m-auto"
        }
      >
        <View className={"bg-commonWhite"}>
          <Pressable
            className={"flex-row p-4 border-b-[1px] border-black"}
            onPress={handleClickChatroom}
          >
            <View className={"w-1/12"}>
              <FontAwesome name="dot-circle-o" size={20} color="red" />
            </View>
            <View className={"w-11/12"}>
              <View className={"flex-row"}>
                <Text className={"text-xl font-bold self-start"}>Jon</Text>
                <View className={"flex-1 items-end"}>
                  <Text className={"text-lg"}>8:42 AM</Text>
                </View>
              </View>
              <Text className={"text-xl"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

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
    <View className="h-full bg-[rgba(54,138,156,0.1)]">
      <View className="bg-ccgcBlueLight items-center">
        <View className="bg-commonWhite w-11/12 p-2">
          <Text className="text-2xl font-semibold">
            Jacob&lsquo;s Dashboard
          </Text>
          <Text className="text-lg">Thursday, Jan 01, 2026</Text>
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
          };
          return (
            <View className="bg-ccgcBlueLight h-14">
              <ScrollView
                horizontal
                // ref={handleRef}
                ref={scrollViewRef}
                className={"bg-commonWhite w-11/12 self-center rounded-b-md"}
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
                          "p-3" +
                          (index === i ? " border-b-2 border-black" : "")
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
            </View>
          );
        }}
        // renderTabBar={() => {
        //   return <CustomTabBar />;
        // }}
      />
      {/* <DashboardTabView /> */}
    </View>
  );
}

// return (
//   <View>
//     <Text>Dashboard Under Construction</Text>
//     <Link href={"./chatrooms.tsx"}>My Messages</Link>
//     <Link href={"/submitRequest"}></Link>
//   </View>
// );
