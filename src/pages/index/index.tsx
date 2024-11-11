import {Navigator, View} from "@tarojs/components";
import React from "react";

export default function Index() {
  return (
    <View className="x-p10">
      <View><Navigator className="x-link" url="/pages/select/index">Select</Navigator></View>
      <View><Navigator className="x-link" url="/pages/qAndA/index">Q and A</Navigator></View>
    </View>
  )
}
