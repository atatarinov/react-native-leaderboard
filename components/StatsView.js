import React, { Component } from 'react';
import { Font } from 'expo';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';

export default class StatsView extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Rubik: require('../assets/fonts/Rubik/Rubik-Regular.ttf'),
      RubikBold: require('../assets/fonts/Rubik/Rubik-Bold.ttf')
    });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.listContainer} bounces={true}>
        {this.state.fontLoaded
          ? this.props.leaderboardData.map(data => {
              return (
                <View key={data.rank} style={styles.listItem}>
                  <View style={this.props.styleRank(data.rank)}>
                    <Text style={styles.styleRankNumber}>
                      {this.props.giveMedalToRank(data.rank)}
                      {data.rank}
                    </Text>
                  </View>

                  <View style={styles.playersStats}>
                    <View style={styles.playersName}>
                      <Text style={styles.styleRank}>{this.props.givePrize(data.rank)}</Text>
                      <Text style={styles.nameText}>{data.username}</Text>
                    </View>

                    <View style={styles.styleListItemProps}>
                      <Text style={styles.listItemPoints}>
                        <Image style={styles.coin} source={require('../assets/img/DUcoin.png')} />
                        {data.value}
                        {this.props.styleFlame(data.rank)}
                      </Text>
                      <Text style={styles.listItemComment}>This week</Text>
                    </View>

                    <View style={styles.styleListItemPropsRight}>
                      <Text style={styles.listItemPointsRight}>
                        <Image style={styles.coinRight} source={require('../assets/img/DUcoin.png')} />
                        {data.userXP}
                      </Text>
                      <Text style={styles.listItemCommentRight}>Total</Text>
                    </View>
                  </View>
                </View>
              );
            })
          : null}
      </ScrollView>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    backgroundColor: '#FBFBFB'
  },
  listItem: {
    flexDirection: 'row',
    width: width,
    height: 85,
    backgroundColor: '#FBFBFB',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1
  },
  playersStats: {
    flex: 0.92,
    paddingLeft: 5,
    flexDirection: 'row'
  },
  styleRankNumber: {
    fontFamily: 'RubikBold',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  styleRank: {
    fontFamily: 'RubikBold',
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  playersName: {
    flex: 0.6,
    justifyContent: 'center'
  },
  coin: {
    width: 14,
    height: 14
  },
  coinRight: {
    width: 14,
    height: 14,
    paddingLeft: 10
  },
  styleListItemProps: {
    flex: 0.3,
    justifyContent: 'center'
  },
  styleListItemPropsRight: {
    flex: 0.25,
    justifyContent: 'center'
  },
  nameText: {
    fontFamily: 'Rubik',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 18
  },
  listItemPoints: {
    fontFamily: 'Rubik',
    fontSize: 16,
    paddingLeft: 1
  },
  listItemPointsRight: {
    fontFamily: 'Rubik',
    fontSize: 16,
    paddingLeft: 1
  },
  listItemComment: {
    fontFamily: 'Rubik',
    color: 'grey',
    fontSize: 13,
    opacity: 0.7
  },
  listItemCommentRight: {
    fontFamily: 'Rubik',
    color: 'grey',
    fontSize: 13,
    opacity: 0.7,
    paddingLeft: 3
  }
});
