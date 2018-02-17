import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import StatsView from './StatsView';

export default class Landing extends Component {
  state = {
    leaderboardData: []
  }

  componentDidMount() {
    axios.get('http://dusoccer.dribbleup.com/sampleAPI/')
      .then(res => res.data)
      .then(data => {
        this.setState({
          leaderboardData: data.leaderboard
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

        <StatsView
          leaderboardData={leaderboardData}
          styleRank={this.styleRank}
          giveMedalToRank={this.giveMedalToRank}
          givePrize={this.givePrize}
          styleFlame={this.styleFlame}
        />
      </View>
    );
  }
}

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
      height: 0
    },
    shadowOpacity: 1,
    borderBottomColor: '#999999',
    borderBottomWidth: 0.3
  },
  headerText: {
    paddingTop: 30,
    fontSize: 30,
    color: '#330f53',
    textAlign: 'center',
    fontFamily: 'AvenirNext-Medium',
    fontWeight: 'bold'
  }
});
