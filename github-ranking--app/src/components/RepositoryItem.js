import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const RepositoryItem = ({name, desc, lang, stars, forks, reviwes, ratings, path}) => {
  return (
    <View style={styles.main}>
        <View style={styles.flexContainer}>
        {/* upper part*/}
        <View style={styles.container}>
        {/*image */}
        <Image style={styles.logo} source={path} />
        <View >
            <Text>{name}</Text>
            <Text>{desc}</Text>
        </View>
        </View>
        <View >
                <Text style={styles.button}>
                    {lang}
                </Text>
            </View>
        {/* lower part*/}
        <View style={styles.bottomContainer}>
            {/* stars*/}
            <View style={styles.flexContainer}>
            <Text style={{fontWeight:'bold'}}>{stars}</Text>
            <Text>Stars</Text>
            </View>
            {/* forks*/}
            <View style={styles.flexContainer}>
            <Text style={{fontWeight:'bold'}}>{forks}</Text>
            <Text>Forks</Text>
            </View>
            {/* reviwes*/}
            <View style={styles.flexContainer}>
            <Text style={{fontWeight:'bold'}}>{reviwes}</Text>
            <Text>Reviwes</Text>
            </View>
            {/* ratings*/}
            <View style={styles.flexContainer}>
            <Text style={{fontWeight:'bold'}}>{ratings}</Text>
            <Text>Ratings</Text>
            </View>
        </View>
        </View>

      
     
    </View>
  )
}

export default RepositoryItem

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'column',
      },
    container: {
        flexDirection: 'row',
        // flexWrap:'wrap',
        // alignItems:'stretch',

      },
      //
    //   three:{
    //       flexDirection:'column-reverse'
    //   },
    main:{
        marginBottom:5,
    },
    logo: {
        width: 66,
        height: 58,
        marginRight:5,
        marginBottom:10,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent:'space-around'

    },
    button:{
        backgroundColor:'lightblue',
        maxWidth:'18%'
        
    }
})