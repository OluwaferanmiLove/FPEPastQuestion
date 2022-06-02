import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { hp, wp } from '../../util/dimension';
import { colors } from '../../constants/colors';
import Input from '../../components/Input';
import HeaderLite from '../../components/HeaderLite';
import Userlist from '../../components/Userlist';
import { users } from '../../constants/mockData';
import Button from '../../components/Button';
import ImageView from '../../components/ImageView';
import ActionCard from '../../components/ActionCard';
import CourseCard from '../../components/CourseCard';
import * as MediaLibrary from 'expo-media-library';

function QuestionView({navigation, route}) {
  const [addAdminModal, setAddAdminModal] = useState(false);
  let questionData = route.params;

  console.log(questionData);
  return (
    <SafeAreaView style={styles.main}>
      <HeaderLite title={'Question'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ImageView
          width='100%'
          borderRadius={0}
          height={hp(550)}
          image={{uri: questionData.image}} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // marginHorizontal: wp(20),
  },
  content: {
    // alignItems: 'center',
    marginTop: hp(20),
    paddingHorizontal: wp(20),
  },
  name: {
    fontSize: hp(20),
    fontWeight: '700',
    color: colors.primary,
  },
  roleContainer: {
    backgroundColor: colors.primary + 20,
    marginTop: hp(8),
    paddingVertical: wp(4),
    paddingHorizontal: wp(25),
    borderRadius: wp(9999)
  },
  description: {
    // fontFamily: 'ApparelDisplayBold',
    fontSize: hp(16),
    color: colors.primary,
  },
  actionContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: hp(10),
    marginBottom: hp(25),
  },
})

export default QuestionView;