import {View} from "@tarojs/components";
import data from './data';
import React, {useState} from "react";
import {AtButton} from "taro-ui";
export default function QA() {
  const [isAsk, setIsAsk] = useState(true);
  return (
    <View style={{fontSize: '0.8rem', padding: '10px'}}>
      <AtButton type="primary" onClick={()=> setIsAsk(!isAsk)}>{isAsk?'隐藏答案':'显示答案'}</AtButton>
      {
        data.map((i:any, idx:number)=>{
          return (
            <View key={idx}>
              <View style={{margin: '20px 0', color: 'red' }} dangerouslySetInnerHTML={{__html: `${idx+1}、${i.fq}`}} />
              {
                <View style={{opacity: isAsk?1:0}} dangerouslySetInnerHTML={{__html: `答：${i.ask}`}} />
              }
            </View>
          )
        })
      }

    </View>
  )
}
