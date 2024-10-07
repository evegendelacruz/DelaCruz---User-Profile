// UserHeader.js
import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from '../styles/Stylesheet';// Import centralized styles
import AntDesign from '@expo/vector-icons/AntDesign';

const UserHeader = ({ isDarkMode }) => {
  const dynamicStyles = styles(isDarkMode); // Get styles based on the mode

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.menuTitle}>P R O F I L E</Text>
      <AntDesign name="arrowleft" size={24} color="white" top={33} left={20}/>
        <View style={[dynamicStyles.backgroundRec, { backgroundColor: '#8c52ff' }]}>
        <View style={dynamicStyles.avatarContainer}>
          <Image 
            source={require('../assets/profile-picture.png')} 
            style={dynamicStyles.avatar} 
          />
        </View>
        <View style={dynamicStyles.textContainer}>
          <View style={dynamicStyles.nameContainer}>
            <Text style={dynamicStyles.name}>Evegen P. Dela Cruz</Text>
            <Text style={dynamicStyles.username}>delacruz.evegen30@gmail.com</Text>
            <Text style={dynamicStyles.joined}>Joined 1 year ago</Text>
            <View style={dynamicStyles.fcontainer}>
              <Text style={dynamicStyles.followers}>398k followers</Text>
            </View>
            </View>
          </View>
        </View>
      </View>
  );
};

export default UserHeader;
