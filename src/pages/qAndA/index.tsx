import {View} from "@tarojs/components";
import data from './data';
import React from "react";
export default function QA() {

  return (
    <View style={{fontSize: '0.8rem', padding: '10px'}}>

      {
        data.map((i:any, idx:number)=>{
          return (
            <View key={idx}>
              <View style={{margin: '20px 0', color: 'red' }} dangerouslySetInnerHTML={{__html: `${idx+1}、${i.fq}`}} />
              <View dangerouslySetInnerHTML={{__html: `答：${i.ask}`}} />
            </View>
          )
        })
      }

    </View>
  )
}
