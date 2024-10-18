import {View, Text} from "@tarojs/components";
import {AtButton, AtRadio} from "taro-ui";
import {useEffect, useState} from "react";
import data from './data';
export default function Index() {
  const [ask, setAsk] = useState('');
  const [fq, setFq] = useState<any>({});
  const [sureAsk, setSureAsk] = useState('');
  const [isAsk, setIsAsk] = useState(false);
  const handleChange = (v:any)=>{
    setAsk(v);
  }
  const submit = ()=>{
    setIsAsk(true);
  }
  const next = ()=>{
    randomFQ();
  }
  const randomFQ = ()=>{
    let num = Math.floor(Math.random() * data.length);
    let fqData = data[num];
    setFq(fqData);
    setSureAsk(fqData.ask);
    setIsAsk(false);
    setAsk('');
  }

  useEffect(()=>{
    randomFQ();
  }, [])
  return (
    <View style={{fontSize: '0.8rem'}}>
      <View style={{margin: '20px 0'}}>{fq.fq}</View>
      <AtRadio
        options={fq.options}
        value={ask}
        onClick={handleChange}
      />
      <View style={{display: 'flex', marginTop: '20px'}}>
        <AtButton type='primary' onClick={submit} disabled={!ask}>提交</AtButton>
        <AtButton onClick={next}>下一题</AtButton>
      </View>
      {
        isAsk&&(<>正确答案：<Text style={{color: `${sureAsk == ask?'green':'red'}`}}>{sureAsk}</Text></>)
      }
    </View>
  )
}
