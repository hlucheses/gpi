import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Pessoas extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {
            /*
            <Block flex row>
              <Card item={articles[2]} style={{ marginRight: theme.SIZES.BASE }} />
              <Card item={articles[0]} />
            </Block>
             */
          }
          <Card item={articles[2]} horizontal />
          <Card item={articles[3]} horizontal />
          <Card item={articles[9]} horizontal />
          <Card item={articles[8]} horizontal />
          <Card item={articles[7]} horizontal />
          <Card item={articles[5]} horizontal />
          <Card item={articles[6]} horizontal />

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

export default Pessoas;
