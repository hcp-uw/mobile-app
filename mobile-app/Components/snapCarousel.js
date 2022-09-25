import React from 'react'
import { View, Dimensions } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import ProfileCard from './ProfileCard'
import { data } from './CardCarousel'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

    function renderItem() {
        return (
            <ProfileCard />
        );
    }

  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Carousel
        layout='stack'
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

export default CarouselCards