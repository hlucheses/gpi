import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Comidas extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Card item={articles[14]} full  />

        
            <Card item={articles[0]} horizontal />
          
          <Block flex row>
            <Card item={articles[15]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[12]} />
          </Block>
          <Card item={articles[13]} horizontal/>

          <Block flex row>
            <Card item={articles[11]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[10]} />
          </Block>

          <Card item={articles[1]} full />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Comidas;
