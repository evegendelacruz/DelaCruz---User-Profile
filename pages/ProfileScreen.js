import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProfileHeader from '../components/UserHeader';
import ProfileOption from '../components/UserOptions';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const ProfileScreen = ({ isDarkMode, setIsDarkMode }) => {
  const sectionTitleColor = isDarkMode ? '#fff' : '#000';
  const optionBackgroundColor = isDarkMode ? '#555' : '#ddd';
  const optionTextColor = isDarkMode ? '#fff' : '#000';
  const iconBorderColor = '#8c52ff';
  

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <ProfileHeader isDarkMode={isDarkMode} />

      <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Profile</Text>
      <ProfileOption
        title="Manage Account"
        icon={isDarkMode ? require('../assets/userD.png') : require('../assets/userL.png')}
        backgroundColor={optionBackgroundColor}
        textColor={optionTextColor}
        iconBorderColor={iconBorderColor} 
      />

      <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Settings</Text>
      <ProfileOption
        title="Notifications"
        icon={isDarkMode ? require('../assets/bellL.png') : require('../assets/bellD.png')}
        backgroundColor={optionBackgroundColor}
        textColor={optionTextColor}
        iconBorderColor={iconBorderColor} 
      />
      <ProfileOption
        title="Dark Mode"
        subtitle={isDarkMode ? "On" : "Off"} 
        icon={isDarkMode ? require('../assets/moonL.png') : require('../assets/moonD.png')}
        backgroundColor={optionBackgroundColor}
        textColor={optionTextColor}
        onPress={() => setIsDarkMode(!isDarkMode)}
        iconBorderColor={iconBorderColor}
      />

      <ProfileOption
        title="Sign Out"
        icon={isDarkMode ? require('../assets/signoutL.png') : require('../assets/signoutD.png')}
        backgroundColor={optionBackgroundColor}
        textColor={optionTextColor}
        iconBorderColor={iconBorderColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 2,
    top: 220,
    alignSelf: 'left',
    
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
    top: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginLeft: 1,
    paddingHorizontal: 0,
  },
  iconRowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 35,
    height: 35,
    marginTop: 50,
    marginHorizontal: 10,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 35,
    height: 35,
  },
  rowIcon: {
    width: 30,
    height: 30,
  },
  iconTitle: {
    fontSize: 12,
    textAlign: 'center',
    top: 0,
  },
});

export default ProfileScreen;
