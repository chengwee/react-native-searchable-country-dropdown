import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from "react-native";

import {getData, getName, overwrite} from 'country-list'
import Flags from 'react-native-flags'

function CountrySelectDropdown ({
    countrySelect, 
    toggleParentScroll = () => null, 
    error, 
    overwrites = [{code: 'TW', name: 'Taiwan'}], 
    defaultCountry = "", 
    dropdownOffsetX = 0, 
    dropdownOffsetY = 0, 
    fontFamily,
    fontSizeOffset = 0,
    textColor = "black"}) 
{

  overwrite(overwrites)

  const allCountryList = getData()
  const [modalVisible, setModalVisible] = useState(false);
  const [countryCode, setCountryCode] = useState(defaultCountry);
  const [country, setCountry] = useState(getName(defaultCountry));
  const [countryList, setCountryList] = useState(getData())

  const onCountrySelect = ({name, code}) => {
    setModalVisible(false)
    setCountryCode(code)
    setCountry(name)
    countrySelect(code)
    toggleParentScroll()
  }

  const filterCountryList = (searchText) => {
    const newList = allCountryList.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()))
    setModalVisible(true)
    setCountryList(newList)
  }

  const clearCountryField = () => {
    countrySelect("")
    setCountryCode("")
    setCountry("")
  }
  const renderItem = (item) => {
    return (
      <TouchableOpacity key={item.code}
        style={{
        flexDirection: "row",
        backgroundColor: "#f3f3f3",
        padding: 15,
        paddingLeft: 5,
        alignItems: "center",
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: "rgba(0,0,0,0.2)",
        zIndex: 2,}}
        onPress={() => {onCountrySelect(item)}}
      >
        <Flags code={item.code} type={"flat"} size={24} />
        <Text style={{
          fontFamily: fontFamily,
          fontWeight: "500",
          color: textColor,
          paddingHorizontal: 20,}}>{item.name}</Text>

      </TouchableOpacity>
    )
  }

  return (
    <View style={{flex:1, width: "100%"}}>      
      {countryCode !== "" &&
        <View style={{
          marginBottom: 20,
          borderBottomColor: "rgba(0, 0, 0, 0.2)",
          borderBottomWidth: 1,
          color: textColor,
          fontSize: 14 + fontSizeOffset,
          fontFamily: fontFamily
        }}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <TouchableOpacity 
              onPress={clearCountryField} 
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding:3,
                margin: 2,
                maxWidth: "100%",}}
            >
              <Flags code={countryCode} type={"flat"} size={24} style={{marginHorizontal: 2}} />

              <Text style={{
                flex: 1,
                paddingHorizontal: 10,
                color: textColor,
                fontSize: 14 + fontSizeOffset,
                fontFamily: fontFamily
              }}>{country}</Text>

              <Text style={{
                paddingHorizontal: 10,
                alignSelf: "flex-end",
                transform: [{ rotate: '45deg' }], 
                color: "#FC5949", 
                fontSize: 20 + fontSizeOffset
              }}>+</Text>

            </TouchableOpacity>
          </View>
        </View>
      }

      {countryCode === "" &&
        <TextInput style={error ? { 
          minHeight: 35,
          borderBottomColor: "#FF7070",
          borderBottomWidth: 1,
          color: textColor,
          fontSize: 14 + fontSizeOffset,
          fontFamily: fontFamily,} : {
          minHeight: 35,
          borderBottomColor: "rgba(0, 0, 0, 0.2)",
          borderBottomWidth: 1,
          color: textColor,
          fontSize: 14 + fontSizeOffset,
          fontFamily: fontFamily}
        } 
          placeholder={"Select country..."} 
          onChangeText={filterCountryList} 
          onFocus={toggleParentScroll}/>
      }

      {error &&
        <Text style={{
          marginBottom: 20,
          alignSelf: "flex-start",
          color: "#FF7070",
          fontFamily: fontFamily,
          fontSize: 14 + fontSizeOffset}}>{error}</Text>
      }

      {modalVisible &&
      <ScrollView style={{
        position: "absolute",
        maxHeight: 220,
        marginTop: 35 + dropdownOffsetY,
        marginLeft: dropdownOffsetX,
        width: "100%",
        backgroundColor: "white",
        elevation: 5,}}>
        {countryList.map((country) => renderItem(country))}
      </ScrollView>}
    </View>
  );
};

export default CountrySelectDropdown;
