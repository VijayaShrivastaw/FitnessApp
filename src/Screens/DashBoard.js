import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AccordionItem from '../Screens/AccordionItem';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-paper';
import Message from '../Assets/Svgs/Message';
import TopArraow from '../Assets/Svgs/TopArraow';
import DownArrow from '../Assets/Svgs/DownArrow';
import EvySvg from '../Assets/Svgs/EvySvg';
import StepsSvg from '../Assets/Svgs/StepsSvg';
export default function DashBoard() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const AccordionData = [
    {
      name: 'chat',
      Icon: <Message />,
      topArrow: <TopArraow />,
      downArrow: <DownArrow />,
      content:
        "The contents of a book is the list of chapters or articles or parts that are in the book, with the number of the page they begin on: If you look at the contents, you'll see there's a chapter on Japanese folk music. Contents.",
    },
    {
      name: 'View',
      Icon: <EvySvg />,
      topArrow: <TopArraow />,
      downArrow: <DownArrow />,
      content:
        "The contents of a book is the list of chapters or articles or parts that are in the book, with the number of the page they begin on: If you look at the contents, you'll see there's a chapter on Japanese folk music. Contents.",
    },
    {
      name: 'Reached',
      Icon: <StepsSvg />,
      topArrow: <TopArraow />,
      downArrow: <DownArrow />,
      content:
        "The contents of a book is the list of chapters or articles or parts that are in the book, with the number of the page they begin on: If you look at the contents, you'll see there's a chapter on Japanese folk music. Contents.",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        paddingTop: responsiveHeight(10),
        // paddingHorizontal: responsiveWidth(4),
        // backgroundColor: 'red',
      }}>
      {AccordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.name}
          icon={item.Icon}
          isOpen={openIndex === index}
          content={item.content}
          topArrow={item.topArrow}
          downArrow={item.downArrow}
          onPress={() => toggleAccordion(index)}
        />
      ))}
    </View>
  );
}
