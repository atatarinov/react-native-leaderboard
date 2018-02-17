import React, { Component } from 'react';
import { Font } from 'expo';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';

export default class Landing extends Component {
  state = {
    leaderboardData: [],
    fontLoaded: false
  }

  componentDidMount() {
    Font.loadAsync({
      'Rubik': require('../assets/fonts/Rubik/Rubik-Regular.ttf'),
      'RubikBold': require('../assets/fonts/Rubik/Rubik-Bold.ttf'),
    });

    axios.get('http://dusoccer.dribbleup.com/sampleAPI/')
      .then(res => res.data)
      .then(data => {
        this.setState({
          leaderboardData: data.leaderboard,
          fontLoaded: true
        });
      });
  }

  styleRank = (rank) => {
    if (rank === 1) {
      return {
        flex: 0.09,
        backgroundColor: '#FEC100',
        justifyContent: 'center'
      };
    } else if (rank === 2) {
      return {
        flex: 0.09,
        backgroundColor: '#00BBF0',
        justifyContent: 'center'
      };
    } else if (rank === 3) {
      return {
        flex: 0.09,
        backgroundColor: '#F12D2D',
        justifyContent: 'center'
      };
    } else if (rank === 4) {
      return {
        flex: 0.09,
        backgroundColor: '#989898',
        justifyContent: 'center'
      };
    } else if (rank === 5) {
      return {
        flex: 0.09,
        backgroundColor: '#B8B8B8',
        justifyContent: 'center'
      };
    } else if (rank === 6) {
      return {
        flex: 0.09,
        backgroundColor: '#C8C8C8',
        justifyContent: 'center'
      };
    } else {
      return {
        flex: 0.09,
        backgroundColor: '#D8D8D8',
        justifyContent: 'center'
      };
    }
  };

  giveMedalToRank = (rank) => {
    if (rank === 1) return '🥇';
    else if (rank === 2) return '🥈';
    else if (rank === 3) return '🥉';
  }

  styleFlame = (rank) => {
    if (rank === 1) return '🔥';
  }

  givePrize = (rank) => {
    if (rank === 1) return '🌟🏆🌟';
    if (rank === 2) return '🌟🌟';
    if (rank === 3) return '🌟';
  }

  render() {
    let { leaderboardData } = this.state;
    return (
      <View style={styles.container} >

        <View style={styles.header}>
          <Text style={styles.headerText}>Leaderboard</Text>
        </View>

        <ScrollView contentContainerStyle={styles.listContainer}>
          {
            this.state.fontLoaded ? (
              leaderboardData.map(data => {
                return (
                  <View key={data.rank} style={styles.listItem}>

                    <View style={this.styleRank(data.rank)}>
                      <Text style={styles.styleRankNumber}>{this.giveMedalToRank(data.rank)}{data.rank}</Text>
                    </View>

                    <View style={styles.playersStats}>
                      <View style={styles.playersName}>
                        <Text style={styles.styleRank}>{this.givePrize(data.rank)}</Text>
                        <Text style={styles.nameText}>{data.username}
                        </Text>
                      </View>

                      <View style={styles.styleListItemProps}>
                        <Text style={styles.listItemPoints}>{data.value}{this.styleFlame(data.rank)}</Text>
                        <Text style={styles.listItemComment}>This week</Text>
                      </View>

                      <View style={styles.styleListItemProps}>
                        <Text style={styles.listItemPointsRight}>{data.userXP}</Text>
                        <Text style={styles.listItemCommentRight}>Total</Text>
                      </View>

                    </View>
                  </View>
                );
              })
            ) : null
          }
        </ScrollView>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 0.15,
    justifyContent: 'center',
    backgroundColor: '#FBFBFB',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1,
    borderBottomColor: '#999999',
    borderBottomWidth: 0.3,
  },
  headerText: {
    paddingTop: 30,
    fontSize: 30,
    color: '#330f53',
    textAlign: 'center',
    fontFamily: 'AvenirNext-Medium',
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 0.85,
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
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
    shadowOpacity: 1,
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
  styleListItemProps: {
    flex: 0.25,
    justifyContent: 'center'
  },
  nameText: {
    fontFamily: 'Rubik',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 18,
  },
  listItemPoints: {
    fontFamily: 'Rubik',
    fontSize: 18
  },
  listItemPointsRight: {
    fontFamily: 'Rubik',
    fontSize: 18,
    paddingLeft: 10
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
    paddingLeft: 10
  }
});
