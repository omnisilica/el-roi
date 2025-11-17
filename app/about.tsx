import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function About() {
  return (
    <View className="flex-1">
      <ScrollView className="my-6">
        <View className="w-11/12 my-2 self-center">
          <Text className="text-xl font-semibold">About El Roi</Text>
          <Text className="text-lg mb-2">
            Shalom! El Roi was created to provide a platform for the Body of
            Christ at CCGC to minister to, and practice love toward, one
            another. Those who don’t have anyone to rely on, especially widows,
            are encouraged to lean on the Body of Christ for support. Your
            struggles may not be conspicuous but don’t forget that the Lord sees
            you. This platform is meant to make it easier for those who
            genuinely need the help to reach out, and meant to provide an
            opportunity for men to practice godly love through service.
          </Text>
        </View>
        <View className="w-11/12 self-center">
          <Text className="text-xl font-semibold">Inspiration</Text>
          <Text className="text-lg mb-2">
            Paul instructs Timothy, in 1 Timothy 5, to have the Church body
            honor widows who are truly widows, while emphasizing the importance
            of believers providing for their own household. That is, if anyone
            has a family member that is a widow they are to relieve them so as
            not to burden the Church.\nThe Church, in its infancy, was generally
            practicing this principal. Shortly after Christ ascended, all those
            who believed were of one heart and mind. Some brought proceeds from
            the sale of their property and laid it at the apostle’s feet, and it
            would then be distributed to anyone who had need. This system worked
            so well that there was no one who lacked. There was a distribution
            held daily and the impression, based on Acts 6, was that widows
            benefited significantly from this ministry.
          </Text>
        </View>
        <View className="w-11/12 self-center">
          <Text className="text-xl font-semibold">
            Who Qualifies to Receive Service
          </Text>
          <Text className="text-lg mb-2">
            As previously stated, this platform is meant for those who have no
            one or very little to rely on, which includes elderly women with no
            husband who can’t rely on their children, or younger women with no
            husband who live on their own but have a task that’s more suitable
            for a man to handle, or women with no husband who might be
            overwhelmed with a task that a husband would typically handle or a
            task that might need many hands. This is also extended to men who
            are very elderly who simply can’t accomplish a task on their own or
            elderly men who are dealing with an acute or debilitating health
            issue.\nFilling out the form below without signing up will allow for
            communication through email, but signing up and logging in provides
            the option for communication through email or within the app. After
            submitting the form, the request will be reviewed and displayed to
            the group of volunteers on the platform for allocation.
          </Text>
        </View>
        <View className="w-11/12 self-center">
          <Text className="text-xl font-semibold">
            Exhortation for Volunteers
          </Text>
          <Text className="text-lg mb-2">
            Those who are looking for one practical way to exercise their faith
            are encouraged to sign up and reach out to those in need and,
            through love, serve one another, remembering that whatever is done
            to the least of the brethren is done unto Christ. Christ told His
            disciples, and by proxy us, that the world would know that we are
            His disciples by the love we have for one another. Don’t forget that
            Jesus Christ’s return is imminent and that His reward is with Him.
            Each Christian will receive what is due for the things done while in
            the body.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
